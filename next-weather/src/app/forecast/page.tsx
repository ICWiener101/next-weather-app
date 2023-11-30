'use client';
import React from 'react';
import WeatherForecast from '@/app/Components/WeatherForecast';
import { CurrentWeatherProps } from '@/app/Components/CurrentWeather';
import { NewWeatherSchemaWithCity } from '@/models/Weather';

function Forecast({ weatherData }: CurrentWeatherProps) {
      return (
            <>
                  {weatherData && (
                        <WeatherForecast
                              weatherData={
                                    weatherData as NewWeatherSchemaWithCity
                              }
                        />
                  )}
            </>
      );
}
export default Forecast;
