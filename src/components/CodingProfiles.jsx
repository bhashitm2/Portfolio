import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SiLeetcode, SiCodechef, SiCodeforces } from "react-icons/si";
import { useTheme } from "../context/ThemeContext";

const PROFILES = [
  {
    id: "leetcode",
    name: "LeetCode",
    handle: "@Kakarotto007",
    icon: SiLeetcode,
    iconColor: "#FFA116",
    ratingColor: "#FFA116",
    rankColor: "#FFA116",
    borderColor: "#FFA116",
    rankColors: {
      "Contest participant": "#808080",
      Knight: "#FFA116",
      Guardian: "#FFB800",
      Unrated: "#808080",
    },
    primaryField: "maxRating",
    primaryLabel: "Max Rating",
    profileUrl: "https://leetcode.com/Kakarotto007/",
  },
  {
    id: "codeforces",
    name: "Codeforces",
    handle: "@Kakarotto007",
    icon: SiCodeforces,
    iconColor: "#1F8ACB",
    ratingColor: "#11cb3d",
    rankColor: "#03A89E",
    borderColor: "var(--accent-cyan)",
    rankColors: {
      Newbie: "#808080",
      Pupil: "#008000",
      Specialist: "#03A89E",
      Expert: "#0000FF",
      "Candidate Master": "#AA00AA",
      Master: "#FF8C00",
      "International Master": "#FF8C00",
      Grandmaster: "#FF0000",
      "International Grandmaster": "#FF0000",
      "Legendary Grandmaster": "#FF0000",
      Unrated: "#808080",
    },
    primaryField: "currentRating",
    primaryLabel: "Current Rating",
    profileUrl: "https://codeforces.com/profile/Kakarotto007",
  },
  {
    id: "atcoder",
    name: "AtCoder",
    handle: "@Kakarotto007",
    iconLabel: "⌨️",
    iconColor: "#fff",
    ratingColor: "#804000",
    rankColor: "#804000",
    borderColor: "#804000",
    rankColors: {
      Gray: "#808080",
      Brown: "#804000",
      Green: "#008000",
      Cyan: "#00C0C0",
      Blue: "#0000FF",
      Yellow: "#C0C000",
      Orange: "#FF8000",
      Red: "#FF0000",
      Unrated: "#808080",
    },
    primaryField: "currentRating",
    primaryLabel: "Current Rating",
    profileUrl: "https://atcoder.jp/users/Kakarotto007",
  },
  {
    id: "codechef",
    name: "CodeChef",
    handle: "@kakarotto007",
    icon: SiCodechef,
    iconColor: "#5B4638",
    ratingColor: "#18b6bb",
    rankColor: "#1E7D22",
    borderColor: "#1E7D22",
    rankColors: {
      "★": "#666666",
      "★★": "#1E7D22",
      "★★★": "#3366CC",
      "★★★★": "#684273",
      "★★★★★": "#FFBF00",
      "★★★★★★": "#FF0000",
      "★★★★★★★": "#000000",
      Unrated: "#808080",
    },
    primaryField: "currentRating",
    primaryLabel: "Current Rating",
    profileUrl: "https://www.codechef.com/users/kakarotto007",
  },
];

const formatRating = (rating) => {
  const numericRating = Number(rating);
  return Number.isFinite(numericRating)
    ? Math.round(numericRating).toLocaleString("en-IN")
    : "—";
};

const cardFaceStyle = {
  position: "absolute",
  width: "100%",
  height: "100%",
  backfaceVisibility: "hidden",
  background: "var(--bg-card)",
  borderRadius: "var(--radius-lg)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "1rem",
  boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
};

const MotionDiv = motion.div;

const ProfileCard = ({ profile, stats, isLoading }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const Icon = profile.icon;
  const isAvailable = stats?.available;
  const rankColor = profile.rankColors?.[stats?.rank] ?? profile.rankColor;
  const accentColor = profile.rankColors ? rankColor : profile.ratingColor;
  const borderColor = profile.rankColors ? rankColor : profile.borderColor;
  const primaryRating = stats?.[profile.primaryField];
  const secondaryField =
    profile.primaryField === "maxRating" ? "currentRating" : "maxRating";
  const secondaryLabel =
    profile.primaryField === "maxRating" ? "Current" : "Max";
  const secondaryRating = stats?.[secondaryField];

  return (
    <div className="profile-card" style={{ perspective: "1000px", width: "min(300px, 100%)", height: "350px" }}>
      <MotionDiv
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        whileHover={{ rotateY: 180 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          transformStyle: "preserve-3d",
        }}
      >
        <div
          style={{
            ...cardFaceStyle,
            border: "1px solid var(--border-light)",
            gap: "1.5rem",
          }}
        >
          {Icon ? (
            <Icon color={profile.iconColor} style={{ fontSize: "5rem" }} />
          ) : (
            <div style={{ fontSize: "5rem", color: profile.iconColor }}>
              {profile.iconLabel}
            </div>
          )}
          <div style={{ textAlign: "center" }}>
            <h4
              style={{
                fontSize: "1.8rem",
                margin: "0 0 0.5rem",
                color: "var(--text-primary)",
              }}
            >
              {profile.name}
            </h4>
            <span style={{ color: "var(--text-secondary)", fontSize: "1.1rem" }}>
              {profile.handle}
            </span>
          </div>
          <span className="profile-card-hint" style={{ fontSize: "0.9rem", color: "var(--accent-cyan)", opacity: 0.8 }}>
            Hover to see live stats
          </span>
          <button
            type="button"
            className="profile-card-toggle"
            onClick={() => setIsFlipped(true)}
          >
            Tap to see live stats
          </button>
        </div>

        <div
          style={{
            ...cardFaceStyle,
            transform: "rotateY(180deg)",
            border: `1px solid ${borderColor}`,
          }}
        >
          <h4 style={{ fontSize: "1.5rem", color: "var(--text-primary)" }}>
            {profile.primaryLabel}
          </h4>
          <div
            aria-live="polite"
            style={{ fontSize: "3.5rem", fontWeight: "700", color: accentColor }}
          >
            {isLoading ? "…" : formatRating(primaryRating)}
          </div>
          <div
            style={{
              background: `${rankColor}1A`,
              color: rankColor,
              padding: "0.5rem 1.5rem",
              borderRadius: "50px",
              fontWeight: "600",
              textTransform: "uppercase",
              letterSpacing: "1px",
              minHeight: "2.5rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            {isLoading ? "Refreshing" : isAvailable ? stats.rank : "Unavailable"}
          </div>
          {isAvailable && secondaryRating !== null && secondaryRating !== undefined && (
            <div style={{ marginTop: "1rem", fontSize: "0.9rem", color: "var(--text-secondary)" }}>
              {secondaryLabel}: <span style={{ color: rankColor }}>{formatRating(secondaryRating)}</span>
            </div>
          )}
          {!isLoading && !isAvailable && (
            <div style={{ marginTop: "1rem", fontSize: "0.85rem", color: "var(--text-secondary)" }}>
              Couldn&apos;t refresh right now
            </div>
          )}
          <a
            href={profile.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginTop: isAvailable ? "1rem" : "0.25rem",
              color: "var(--text-primary)",
              textDecoration: "underline",
              fontSize: "0.9rem",
            }}
          >
            View Profile ↗
          </a>
          <button
            type="button"
            className="profile-card-toggle"
            onClick={() => setIsFlipped(false)}
          >
            Back to profile
          </button>
        </div>
      </MotionDiv>
    </div>
  );
};

const CodingProfiles = () => {
  const { theme } = useTheme();
  const [profiles, setProfiles] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [hasLoadError, setHasLoadError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const loadProfiles = async () => {
      try {
        const response = await fetch("/api/ratings", { signal: controller.signal });
        if (!response.ok) throw new Error("Unable to load profile ratings");

        const payload = await response.json();
        if (!controller.signal.aborted) {
          const refreshedProfiles = payload.profiles ?? {};
          setProfiles(refreshedProfiles);
          setHasLoadError(
            Object.values(refreshedProfiles).some((profile) => !profile.available),
          );
        }
      } catch (error) {
        if (error.name !== "AbortError") {
          setHasLoadError(true);
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    };

    loadProfiles();
    return () => controller.abort();
  }, []);

  return (
    <section className="coding-profiles-section mobile-section" style={{ padding: "0rem 2rem 4rem", background: "var(--bg-dark)" }}>
      <h3
        style={{
          textAlign: "center",
          fontSize: "2rem",
          marginBottom: "0.5rem",
          color: "var(--text-primary)",
        }}
      >
        Programming <span style={{ color: "var(--accent-cyan)" }}>Profiles</span>
      </h3>
      <p
        style={{
          textAlign: "center",
          color: "var(--text-secondary)",
          margin: "0 0 3rem",
          fontSize: "0.95rem",
        }}
      >
        {isLoading
          ? "Refreshing live ratings…"
          : hasLoadError
            ? "Live ratings are temporarily unavailable."
            : "Live ratings refresh automatically."}
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "3rem", alignItems: "center" }}>
        <div
          className="profile-cards"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          {PROFILES.map((profile) => (
            <ProfileCard
              key={profile.id}
              profile={profile}
              stats={profiles[profile.id]}
              isLoading={isLoading}
            />
          ))}
        </div>

        <MotionDiv
          className="coding-heatmap"
          whileHover={{ scale: 1.01 }}
          style={{
            background: "var(--bg-card)",
            padding: "2rem",
            borderRadius: "var(--radius-md)",
            border: "1px solid var(--border-light)",
            maxWidth: "750px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "1rem",
          }}
        >
          <h4 style={{ textAlign: "center", marginBottom: "1.5rem", color: "var(--text-secondary)" }}>
            LeetCode Submissions
          </h4>
          <img
            src={`https://leetcard.jacoblin.cool/Kakarotto007?theme=${theme}&font=Inter&ext=heatmap`}
            alt="LeetCode Heatmap"
            style={{ width: "100%", borderRadius: "4px" }}
          />
        </MotionDiv>
      </div>
    </section>
  );
};

export default CodingProfiles;
