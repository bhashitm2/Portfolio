import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix for default marker icon not working
let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const ZoomHandler = () => {
    const map = useMapEvents({
        dblclick: () => {
            map.zoomIn();
        },
    });
    return null;
};

const MapComponent = () => {
    const position = [24.562139, 73.725132]; // Udaipur Coordinates

    return (
        <div style={{ 
            height: "400px", 
            width: "100%", 
            borderRadius: "var(--radius-md)", 
            overflow: "hidden", 
            border: "1px solid var(--border-light)",
            boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5)",
             // Removing grayscale to make it look cleaner in the new layout
        }}>
            <MapContainer 
                center={position} 
                zoom={13} 
                scrollWheelZoom={false} 
                style={{ height: "100%", width: "100%" }}
                doubleClickZoom={true}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                />
                <Marker position={position}>
                    <Popup>
                        My Location <br /> Udaipur, Rajasthan.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default MapComponent;
