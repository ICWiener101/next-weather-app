'use client';
import { useEffect, useState } from 'react';
import {
      NewWeatherSchemaWithCity,
      CurrentWeatherType,
      HourlyData,
} from '@/models/Weather';
import { fetchWeather } from '@/lib/fetchWeather';
import { fetchCurrentWeather } from '@/lib/fetchCurrentWeather';
import WeatherInfo from '@/app/Components/WeatherInfo';
import Search, { Option } from '@/app/Components/Search';
import GeoWeather from '@/app/Components/GeoWeather';
import CurrentWeather from '@/app/Components/CurrentWeather';
import fetchLocalTime from '@/lib/fetchLocalTime';
import { parseDate } from '@/lib/util';
import Today from '@/app/today/page';
import Navbar from '@/app/Components/Navbar';
import Tomorrow from '../tomorrow/page';
import Forecast from '../forecast/page';
import Map from '@/app/Components/map/mapIndex';
import WeatherMap from '../weatherMap/page';

export type Location = {
      latitude: number;
      longitude: number;
};

const Sidebar = () => {
      const [location, setLocation] = useState<Location | null>(null);
      const [currentWeather, setCurrentWeather] =
            useState<NewWeatherSchemaWithCity | null>(null);
      const [localWeather, setLocalWeather] =
            useState<CurrentWeatherType | null>(null);
      const [loading, setLoading] = useState(false);
      const [selectedNavItem, setSelectedNavItem] = useState('today');
      useEffect(() => {
            if ('geolocation' in navigator) {
                  navigator.geolocation.getCurrentPosition(({ coords }) => {
                        const { latitude, longitude } = coords;
                        setLocation({ latitude, longitude });
                  });
            }
      }, []);
      useEffect(() => {
            if (location) {
                  const fetchData = async () => {
                        try {
                              const localWeather = await fetchCurrentWeather(
                                    location.latitude,
                                    location.longitude
                              );

                              if (localWeather) {
                                    setLocalWeather({
                                          ...localWeather,
                                    });
                              }
                        } catch (err) {
                              console.log(err);
                        }
                  };

                  fetchData();
            }
      }, [location]);

      const handleOnSearchChange = async (selectedCity: Option) => {
            const [latitude, longitude] = selectedCity?.value.split(' ');
            setLocation({
                  latitude: parseFloat(latitude),
                  longitude: parseFloat(longitude),
            });

            try {
                  setLoading(true);
                  const [weatherData, currentLocalTime] = await Promise.all([
                        fetchWeather(
                              parseFloat(latitude),
                              parseFloat(longitude)
                        ),
                        fetchLocalTime(selectedCity.wikiDataId),
                  ]);
                  if (weatherData && currentLocalTime) {
                        setCurrentWeather({
                              currentTime: parseDate(currentLocalTime),
                              city: selectedCity.label,
                              ...weatherData,
                        });
                  }
            } catch (error) {
                  console.log(error);
            } finally {
                  setLoading(false);
            }
      };

      return (
            <>
                  {' '}
                  <main className="flex flex-row w-full h-full flex-wrap md:grid md:grid-cols-4 md:grid-rows-[0.1fr,1.4fr,1.4fr] gap-0 md:min-h-screen">
                        <aside className="w-full md:col-span-1 md:row-span-3 bg-gradient-to-r from-sky-100 to-sky-200 shadow-xl">
                              <div>
                                    {' '}
                                    <Search
                                          onSearchChange={handleOnSearchChange}
                                    />
                              </div>
                              <div>
                                    {loading && (
                                          <p className="w-full text-center text-2xl text-gray-600 font-bold">
                                                Loading...
                                          </p>
                                    )}
                                    {currentWeather && (
                                          <CurrentWeather
                                                weatherData={
                                                      currentWeather as NewWeatherSchemaWithCity
                                                }
                                          />
                                    )}
                              </div>
                        </aside>
                        <div className="w-full md:col-span-3 md:row-span-1">
                              {currentWeather && (
                                    <Navbar
                                          setSelectedNavItem={
                                                setSelectedNavItem
                                          }
                                    />
                              )}
                        </div>
                        <div className="w-full md:flex md:justify-center md:items-center md:col-span-3 md:row-span-2">
                              {selectedNavItem === 'today' && (
                                    <Today
                                          weatherData={
                                                currentWeather?.hourly as HourlyData
                                          }
                                    />
                              )}
                              {/* {selectedNavItem === 'tomorrow' && (
            <Tomorrow weatherData={currentWeather as NewWeatherSchemaWithCity} />
          )} */}

                              {selectedNavItem === 'forecast' && (
                                    <Forecast
                                          weatherData={
                                                currentWeather as NewWeatherSchemaWithCity
                                          }
                                    />
                              )}

                              {selectedNavItem === 'weatherMap' && (
                                    <WeatherMap
                                          weatherData={
                                                currentWeather as NewWeatherSchemaWithCity
                                          }
                                    />
                              )}
                        </div>
                  </main>
            </>
      );
};

export default Sidebar;
