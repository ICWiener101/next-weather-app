'use client';
import { useState } from 'react';
import { NewWeatherSchemaWithCity } from '@/models/Weather';
import { fetchWeather } from '@/lib/fetchWeather';

export type Option = {
      value: string;
      label: string;
};
export type Location = {
      latitude: number;
      longitude: number;
};

import WeatherInfo from '@/app/Components/WeatherInfo';

import Search from '@/app/Components/Search';

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
            try {
                  const weatherData = await fetchWeather(
                        parseFloat(latitude),
                        parseFloat(longitude)
                  );

                  if (weatherData) {
                        setCurrentWeather({
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
