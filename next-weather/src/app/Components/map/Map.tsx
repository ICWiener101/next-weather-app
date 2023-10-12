import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L, { Icon } from 'leaflet';
import type { CurrentWeatherProps } from '@/app/Components/CurrentWeather';
import React, { useEffect, useState } from 'react';

function Map({ weatherData }: CurrentWeatherProps) {
      const [mapPosition, setMapPosition] = useState([
            weatherData.coord.lat,
            weatherData.coord.lon,
      ]);

      useEffect(() => {
            setMapPosition([weatherData.coord.lat, weatherData.coord.lon]);
      }, [weatherData.coord]);
      const markerIcon = new Icon({
            iconUrl: '../../icons/google-maps.png',
            iconSize: [35, 41],
            iconAnchor: [12, 41],
      });
      const mapStyle = {
            height: '100%',
            width: '100%',
            margin: '0 auto',
            borderRadius: '12px',
      };

      return (
            <div className="h-96 w-9/12 mx-auto rounded-xl mb-28">
                  <MapContainer
                        center={mapPosition as [number, number]}
                        style={mapStyle}
                        zoom={9}
                        key={mapPosition.toString()} // forcing the map component to reload when the position is changed
                        scrollWheelZoom={true}
                  >
                        <TileLayer
                              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <TileLayer
                              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                              url={`https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`}
                        />
                        <TileLayer
                              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                              url={`https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`}
                        />
                        {/* <TileLayer
                              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                              url={`https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`}
                        /> */}
                        <Marker
                              position={mapPosition as [number, number]}
                              icon={markerIcon}
                        ></Marker>
                  </MapContainer>
            </div>
      );
}

export default Map;
