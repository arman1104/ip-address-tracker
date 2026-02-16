import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import type { LatLngExpression } from "leaflet";
import locationIcon from "../assets/images/icon-location.svg";

interface Props {
  lat: number;
  lng: number;
}

const customIcon = new L.Icon({
  iconUrl: locationIcon,
  iconSize: [40, 50],
  iconAnchor: [20, 50],
});

const MapView = ({ lat, lng }: Props) => {
  const position: LatLngExpression = [lat, lng];

  return (
    <MapContainer
      key={`${lat}-${lng}`}
      center={position}
      zoom={13}
      className="h-[calc(100vh-280px)] w-full"
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={customIcon} />
    </MapContainer>
  );
};

export default MapView;
