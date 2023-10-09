import React from 'react';
import { WeatherWithCity } from '@/models/Weather';
type CurrentWeatherProps = {
      weatherData: WeatherWithCity;
};
import { degreesToWindDirection } from '@/lib/util';
function CurrentWeather({ weatherData }: CurrentWeatherProps) {
      return (
            <div className="my-5 max-w-md rounded-md p-2 flex flex-col justify-center mx-auto  bg-sky-200 shadow-xl">
                  <div className="mx-auto my-1 flex items-center">
                        <div>
                              <img
                                    src={`icons/${weatherData.weather[0].icon}.png`}
                                    alt=""
                              />
                        </div>
                        <div>
                              <div>
                                    {Math.ceil(weatherData.main.temp)}&#8451;
                              </div>
                              <div>{weatherData.city}</div>
                        </div>
                  </div>
                  <hr />
                  <div className="bottomPart mx-auto my-2">
                        <div className="feelslike">
                              Feels Like{' '}
                              {Math.ceil(weatherData.main.feels_like)}&#8451;
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
                        <div className="humidity">
                              Humidity {weatherData.main.humidity} %
                        </div>
                        <div className="pressure">
                              Pressure {weatherData.main.pressure} hPa
                        </div>
                  </div>
            </div>
      );
}

export default CurrentWeather;
