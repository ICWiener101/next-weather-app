import React from 'react';
import { WeatherWithCity } from '@/models/Weather';
export type CurrentWeatherProps = {
      weatherData: WeatherWithCity;
};
import { degreesToWindDirection, unixTimestampToTime } from '@/lib/util';

function CurrentWeather({ weatherData }: CurrentWeatherProps) {
      return (
            <div className="my-5 max-w-md rounded-xl p-2 flex flex-col justify-center mx-auto  bg-gradient-to-b from-sky-200 to-sky-300 shadow-xl">
                  <div className="flex items-end justify-end w-full flex-col">
                        <span className="pr-1 font-medium text-xs">
                              updated
                        </span>
                        <span>
                              {' '}
                              {new Date(weatherData.dt * 1000).getHours()}:
                              {new Date(weatherData.dt * 1000).getMinutes()}
                        </span>
                  </div>
                  <div className="mx-auto my-1 flex items-center">
                        <div>
                              <img
                                    src={`icons/${weatherData.weather[0].icon}.png`}
                                    alt=""
                              />
                        </div>
                        <div className="flex flex-col items-center mx-auto">
                              <div className="text-4xl font-bold text-slate-800">
                                    {Math.ceil(weatherData.main.temp)} &#8451;
                              </div>
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
                                    {Math.ceil(weatherData.main.feels_like)}
                                    &#8451;
                              </span>
                        </div>
                        <div className="flex justify-between">
                              <span>Wind</span>
                              <span>
                                    {Math.ceil(weatherData.wind.speed)}m/s
                                    {degreesToWindDirection(
                                          weatherData.wind.deg
                                    )}
                              </span>
                        </div>
                        <div className="flex justify-between">
                              <span>Humidity</span>{' '}
                              <span>{weatherData.main.humidity}%</span>
                        </div>
                        <div className="flex justify-between">
                              <span>Pressure</span>{' '}
                              <span>{weatherData.main.pressure}hPa</span>
                        </div>
                        <div className="flex justify-between">
                              <span>Sunrise</span>{' '}
                              <span>
                                    {unixTimestampToTime(
                                          weatherData.sys.sunrise
                                    )}
                              </span>
                        </div>
                        <div className="flex justify-between">
                              <span>Sunset</span>{' '}
                              <span>
                                    {unixTimestampToTime(
                                          weatherData.sys.sunset
                                    )}
                              </span>
                        </div>
                  </div>
            </div>
      );
}

export default CurrentWeather;
