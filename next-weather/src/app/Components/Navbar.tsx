'use client';
import { useState } from 'react';
import { NewWeatherSchemaWithCity } from '@/models/Weather';
import { fetchWeather } from '@/lib/fetchWeather';

export type Location = {
      latitude: number;
      longitude: number;
};

import WeatherInfo from '@/app/Components/WeatherInfo';

import Search, { Option } from '@/app/Components/Search';
import fetchLocalTime from '../../lib/fetchLocalTime';

const Navbar = () => {
      const [location, setLocation] = useState<Location | null>(null);
      const [currentWeather, setCurrentWeather] =
            useState<NewWeatherSchemaWithCity | null>(null);

      const handleOnSearchChange = async (selectedCity: Option) => {
            const [latitude, longitude] = selectedCity?.value.split(' ');
            setLocation({
                  latitude: parseFloat(latitude),
                  longitude: parseFloat(longitude),
            });
            console.log(selectedCity);

            try {
                  const [weatherData, currentLocalTime] = await Promise.all([
                        fetchWeather(
                              parseFloat(latitude),
                              parseFloat(longitude)
                        ),
                        fetchLocalTime(selectedCity.wikiDataId),
                  ]);

                  if (weatherData && currentLocalTime) {
                        const parts = currentLocalTime.split(/[-T:.+]/);
                        const year = parseInt(parts[0]);
                        const month = parseInt(parts[1]) - 1; // Months are 0-based in JavaScript
                        const day = parseInt(parts[2]);
                        const hour = parseInt(parts[3]);
                        const minute = parseInt(parts[4]);
                        const second = parseInt(parts[5]);
                        console.log(
                              new Date(year, month, day, hour, minute, second)
                        );

                        const localTime = new Date(
                              year,
                              month,
                              day,
                              hour,
                              minute,
                              second
                        );
                        console.log(currentLocalTime);

                        console.log(localTime);

                        setCurrentWeather({
                              currentTime: localTime,
                              city: selectedCity.label,
                              ...weatherData,
                        });
                  }
            } catch (error) {
                  console.log(error);
            }
      };

      return (
            <>
                  <header className="bg-gradient-to-r from-sky-200 to-sky-300 shadow-xl sticky top-0 z-10">
                        <nav className="flex justify-center sm:flex-row sm:justify-between p-4 font-bold max-w-6xl items-center mx-auto text-gray-600">
                              {/* <div className="w-1/6 flex justify-evenly">
                                    <Link href="/">Home</Link>
                                    <Link href="/today">Today</Link>
                              </div> */}
                              <div className="mx-auto">
                                    {' '}
                                    <Search
                                          onSearchChange={handleOnSearchChange}
                                    />
                              </div>
                        </nav>
                  </header>
                  <div>
                        {currentWeather && (
                              <WeatherInfo
                                    weatherData={
                                          currentWeather as NewWeatherSchemaWithCity
                                    }
                              />
                        )}
                  </div>
            </>
      );
};

export default Navbar;
