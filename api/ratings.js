const HANDLES = {
  leetcode: "Kakarotto007",
  codeforces: "Kakarotto007",
  atcoder: "Kakarotto007",
  codechef: "kakarotto007",
};

const REQUEST_TIMEOUT_MS = 7_000;

const toRating = (value) => {
  const rating = Number(value);
  return Number.isFinite(rating) ? Math.round(rating) : null;
};

const highestRating = (ratings) => {
  const validRatings = ratings.filter((rating) => rating !== null);
  return validRatings.length ? Math.max(...validRatings) : null;
};

const titleCase = (value) =>
  value
    ? value.replace(/\b\w/g, (character) => character.toUpperCase())
    : "Unrated";

const atCoderRank = (rating) => {
  if (rating === null) return "Unrated";
  if (rating < 400) return "Gray";
  if (rating < 800) return "Brown";
  if (rating < 1200) return "Green";
  if (rating < 1600) return "Cyan";
  if (rating < 2000) return "Blue";
  if (rating < 2400) return "Yellow";
  if (rating < 2800) return "Orange";
  return "Red";
};

const codeChefStars = (rating) => {
  if (rating === null) return "Unrated";
  if (rating < 1400) return "★";
  if (rating < 1600) return "★★";
  if (rating < 1800) return "★★★";
  if (rating < 2000) return "★★★★";
  if (rating < 2200) return "★★★★★";
  if (rating < 2500) return "★★★★★★";
  return "★★★★★★★";
};

async function fetchWithTimeout(url, options = {}) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } finally {
    clearTimeout(timeout);
  }
}

async function fetchJson(url, options) {
  const response = await fetchWithTimeout(url, options);

  if (!response.ok) {
    throw new Error(`Upstream request failed with ${response.status}`);
  }

  return response.json();
}

async function getCodeforcesProfile() {
  const payload = await fetchJson(
    `https://codeforces.com/api/user.info?handles=${HANDLES.codeforces}`,
  );
  const user = payload?.status === "OK" ? payload.result?.[0] : null;

  if (!user) throw new Error("Codeforces profile was not found");

  const currentRating = toRating(user.rating);
  return {
    currentRating,
    maxRating: toRating(user.maxRating) ?? currentRating,
    rank: titleCase(user.rank),
  };
}

async function getLeetCodeProfile() {
  const payload = await fetchJson("https://leetcode.com/graphql", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      origin: "https://leetcode.com",
    },
    body: JSON.stringify({
      query: `query contestStats($username: String!) {
        userContestRanking(username: $username) { rating }
        userContestRankingHistory(username: $username) { attended rating }
        matchedUser(username: $username) { contestBadge { name } }
      }`,
      variables: { username: HANDLES.leetcode },
    }),
  });

  if (payload.errors?.length || !payload.data?.matchedUser) {
    throw new Error("LeetCode profile was not found");
  }

  const currentRating = toRating(payload.data.userContestRanking?.rating);
  const historyRatings = (payload.data.userContestRankingHistory ?? [])
    .filter((contest) => contest.attended)
    .map((contest) => toRating(contest.rating));

  return {
    currentRating,
    maxRating: highestRating([currentRating, ...historyRatings]),
    rank: payload.data.matchedUser.contestBadge?.name ?? "Contest participant",
  };
}

async function getAtCoderProfile() {
  const history = await fetchJson(
    `https://atcoder.jp/users/${HANDLES.atcoder}/history/json`,
  );
  const ratings = Array.isArray(history)
    ? history
        .filter((contest) => contest.IsRated)
        .map((contest) => toRating(contest.NewRating))
        .filter((rating) => rating !== null)
    : [];
  const currentRating = ratings.at(-1) ?? null;

  return {
    currentRating,
    maxRating: highestRating(ratings),
    rank: atCoderRank(currentRating),
  };
}

function getCodeChefRatings(profileHtml) {
  const match = profileHtml.match(
    /"date_versus_rating"\s*:\s*(\{[\s\S]*?\})\s*,\s*"user_initial_ratings"/,
  );

  if (!match) throw new Error("CodeChef rating history was not found");

  const ratingHistory = JSON.parse(match[1]).all;
  if (!Array.isArray(ratingHistory)) {
    throw new Error("CodeChef rating history is invalid");
  }

  return ratingHistory.map((contest) => toRating(contest.rating));
}

async function getCodeChefProfile() {
  const response = await fetchWithTimeout(
    `https://www.codechef.com/users/${HANDLES.codechef}`,
  );

  if (!response.ok) {
    throw new Error(`CodeChef request failed with ${response.status}`);
  }

  const ratings = getCodeChefRatings(await response.text());
  const currentRating = ratings.at(-1) ?? null;

  return {
    currentRating,
    maxRating: highestRating(ratings),
    rank: codeChefStars(currentRating),
  };
}

async function getProfile(fetchProfile) {
  try {
    return { available: true, ...(await fetchProfile()) };
  } catch (error) {
    console.error("Unable to refresh a competitive-programming profile", error);
    return { available: false };
  }
}

export default async function handler(request, response) {
  if (request.method !== "GET") {
    response.setHeader("Allow", "GET");
    response.statusCode = 405;
    response.end(JSON.stringify({ error: "Method not allowed" }));
    return;
  }

  const [leetcode, codeforces, atcoder, codechef] = await Promise.all([
    getProfile(getLeetCodeProfile),
    getProfile(getCodeforcesProfile),
    getProfile(getAtCoderProfile),
    getProfile(getCodeChefProfile),
  ]);

  response.setHeader("Content-Type", "application/json; charset=utf-8");
  // The browser checks on every visit; Vercel serves a short-lived shared cache
  // so public profile sites are not hit once for every portfolio visitor.
  response.setHeader(
    "Cache-Control",
    "public, max-age=0, s-maxage=900, stale-while-revalidate=3600",
  );
  response.statusCode = 200;
  response.end(
    JSON.stringify({
      profiles: { leetcode, codeforces, atcoder, codechef },
      updatedAt: new Date().toISOString(),
    }),
  );
}
