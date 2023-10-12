import React from 'react';
import { WeatherWithCity, NewWeatherSchemaWithCity } from '@/models/Weather';
export type CurrentWeatherProps = {
      weatherData: NewWeatherSchemaWithCity;
};
import { degreesToWindDirection, weatherDescIcon } from '@/lib/util';

function CurrentWeather({ weatherData }: CurrentWeatherProps) {
      const desc = weatherDescIcon(
            weatherData.current.weathercode,
            weatherData.current.is_day
      );
      console.log(desc);

      return (
            // <div>{weatherData.current.temperature_2m}</div>
            <div className="my-5 max-w-md rounded-xl p-2 flex flex-col justify-center mx-auto  bg-gradient-to-b from-sky-200 to-sky-300 shadow-xl hover:shadow-2xl">
                  <div className="flex items-end justify-end w-full flex-col">
                        <span className="pr-1 font-medium text-xs">
                              updated
                              {}
                        </span>
                        <span> {weatherData.current.time.split('T')[1]}</span>
                  </div>
                  <div className="mx-auto my-1 flex flex-col items-center">
                        <div className="flex mx-auto items-center">
                              <div>
                                    <img src={`${desc?.iconUrl}`} alt="" />
                              </div>
                        </div>
                        <div className="flex flex-col items-center mx-auto mb-4">
                              <div className="text-4xl font-bold text-slate-800">
                                    {Math.ceil(
                                          weatherData.current.temperature_2m
                                    )}{' '}
                                    &#8451;
                              </div>
                              <div>{desc?.description}</div>
                              <h3 className="font-semibold text-xl">
                                    {weatherData.city}
                              </h3>
                        </div>
                  </div>
                  <hr />
                  <div className="w-1/2 mx-auto my-2">
                        <div className="flex justify-between">
                              <span> Feels Like</span>
                              <span>
                                    {Math.ceil(
                                          weatherData.current
                                                .apparent_temperature
                                    )}
                                    &#8451;
                              </span>
                        </div>
                        <div className="flex justify-between">
                              <span>Wind</span>
                              <span>
                                    {Math.ceil(
                                          weatherData.current.windspeed_10m
                                    )}
                                    m/s
                                    {degreesToWindDirection(
                                          weatherData.current.winddirection_10m
                                    )}
                              </span>
                        </div>
                        <div className="flex justify-between">
                              <span>Humidity</span>{' '}
                              <span>
                                    {weatherData.current.relativehumidity_2m}%
                              </span>
                        </div>
                        <div className="flex justify-between">
                              <span>Pressure</span>{' '}
                              <span>
                                    {Math.ceil(
                                          weatherData.current.pressure_msl
                                    )}
                                    hPa
                              </span>
                        </div>
                  </div>
            </div>
      );
}

export default CurrentWeather;
