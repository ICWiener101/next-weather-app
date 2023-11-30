'use client';
import type { CurrentWeatherProps } from '@/app/Components/CurrentWeather';
import { NewWeatherSchemaWithCity } from '@/models/Weather';
import Map from '@/app/Components/map/mapIndex';

function WeatherMap({ weatherData }: CurrentWeatherProps) {
      return (
            <>
                  <div className="w-full md:w-5/6">
                        {weatherData && (
                              <Map
                                    weatherData={
                                          weatherData as NewWeatherSchemaWithCity
                                    }
                              />
                        )}
                  </div>
            </>
      );
}

export default WeatherMap;
