import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import "leaflet/dist/leaflet.css"
import "../styles/Map.css"
import Icon from "/images/icon-location.svg"

const customIcon = L.icon({
  iconUrl: Icon,
  iconSize: [46, 56],
});

function Map({ info }) {
  const position = [info.location.lat, info.location.lng];
  return(
    <MapContainer key={`${position[0]}-${position[1]}`} center={position} zoom={15} zoomControl={false} scrollWheelZoom={false} touchZoom={false} id="map">
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position} icon={customIcon}>
      
    </Marker>
  </MapContainer>
  )
}

export default Map