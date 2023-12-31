import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from 'leaflet';
import markerIcon from './markerIcon.png';
import 'leaflet/dist/leaflet.css';
import axios from 'axios'
import {  useQuery } from '@tanstack/react-query';

export default function LeafletMap() {
  const customIcon = L.icon({
    iconUrl: markerIcon,
    iconSize: [32, 32], // Adjust size as needed
    iconAnchor: [16, 32], // Half of the iconSize's width and full height
    popupAnchor: [0, -32], // Position of the popup relative to the icon
  });

      // using react query to make intelligent data fetching 
    // it enables automatic retrying
  const myQueryMap = useQuery({
    queryKey: ['country-data'],
    queryFn: () => axios.get('https://disease.sh/v3/covid-19/countries').then(response => response.data)
  });
  
  if(myQueryMap.isLoading) return <h1>Loading...</h1> //Loading data from server
  if(myQueryMap.error) return <h1>Error</h1>  // if any error is encountered

  // Check if returned data is array or not, return null if not an array
  if (!Array.isArray(myQueryMap.data)) return null;

  return (
    <div className="w-full p-4 box-border">
    <h1 className='text-2xl sm:text-3xl font-bold text-center text-purple-700 py-4'>Country wise cases</h1>

        {/* Map Container to create a map instace and provide to its childrens */}
      <MapContainer
        center={[20, 0]}
        zoom={3}
        style={{ width: "100%", height: "500px" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {myQueryMap.data.map((country) => (
          <Marker  // Placing markers on the map
            key={country.country}
            position={[country.countryInfo.lat, country.countryInfo.long]}
            icon={customIcon} // Providing custom icon for the marker
          >

            {/* To show popup with details */ }
            <Popup>
              <div>
                <h2>{country.country}</h2>
                <p>Cases: {country.cases}</p>
                <p>Deaths: {country.deaths}</p>
                <p>Recovered: {country.recovered}</p>
                <p>Active: {country.active}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
