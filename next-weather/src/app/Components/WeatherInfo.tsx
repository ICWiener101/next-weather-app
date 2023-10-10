'use client';
import { useState, useEffect } from 'react';
import Search from '@/app/Components/Search';
import CurrentWeather from '@/app/Components/CurrentWeather';
import WeatherForecast from '@/app/Components/WeatherForecast';
import Map from '@/app/Components/mapIndex';

import {
      Weather,
      WeatherWithCity,
      Forecast,
      ForecastWithCity,
} from '@/models/Weather';
import { fetchForecast, fetchWeather } from '@/lib/fetchWeather';

export type Option = {
      value: string;
      label: string;
};
export type Location = {
      latitude: number;
      longitude: number;
};

function WeatherInfo() {
      const [location, setLocation] = useState<Location | null>(null);
      const [currentWeather, setCurrentWeather] =
            useState<WeatherWithCity | null>(null);
      const [currentForecast, setCurrentForecast] =
            useState<ForecastWithCity | null>(null);

      const handleOnSearchChange = async (selectedCity: Option) => {
            const [latitude, longitude] = selectedCity?.value.split(' ');
            setLocation({
                  latitude: parseFloat(latitude),
                  longitude: parseFloat(longitude),
            });
            try {
                  const [weatherData, forecastData] = await Promise.all([
                        fetchWeather(
                              parseFloat(latitude),
                              parseFloat(longitude)
                        ),
                        fetchForecast(
                              parseFloat(latitude),
                              parseFloat(longitude)
                        ),
                  ]);
                  if (forecastData && weatherData) {
                        setCurrentForecast({
                              city: selectedCity.label,
                              ...forecastData,
                        });
                        console.log('forecastData', forecastData);

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
                  <div className="max-w-7xl my-5 mx-auto">
                        <Search onSearchChange={handleOnSearchChange} />
                        {currentWeather && (
                              <CurrentWeather
                                    weatherData={
                                          currentWeather as WeatherWithCity
                                    }
                              />
                        )}
                        {currentForecast && (
                              <WeatherForecast
                                    forecastData={
                                          currentForecast as ForecastWithCity
                                    }
                              />
                        )}
                        {currentWeather && (
                              <Map
                                    weatherData={
                                          currentWeather as WeatherWithCity
                                    }
                              />
                        )}
                  </div>
            </>
      );
}

export default WeatherInfo;
