import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import "leaflet/dist/leaflet.css"
import "../styles/Map.css"

function Map() {
  const position = [51.505, -0.09];
  return(
    <MapContainer center={position} zoom={13} scrollWheelZoom={false} id="map">
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      
    </Marker>
  </MapContainer>
  )
}

export default Map