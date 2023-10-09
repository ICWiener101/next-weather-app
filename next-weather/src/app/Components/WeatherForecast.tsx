import React from 'react';
import { ForecastWithCity } from '@/models/Weather';
type ForecastProps = {
      forecastData: ForecastWithCity;
};
import { degreesToWindDirection } from '@/lib/util';

function WeatherForecast({ forecastData }: ForecastProps) {
      const forecastList = forecastData.list.filter((date) => {
            return date.dt_txt.split(' ')[1] === '12:00:00';
      });
      console.log('forecast component', forecastList);

      return (
            <div className="flex justify-between my-5 w-12/12">
                  {forecastList.map((item) => (
                        <div className="w-1/6 flex rounded-mds p-2 flex-row flex-wrap bg-sky-100 shadow-xl">
                              <div className="mx-auto flex justify-between items-center p-4">
                                    <div className="w-6/12">
                                          <img
                                                src={`icons/${item.weather[0].icon}.png`}
                                                alt=""
                                          />
                                    </div>
                                    <div>
                                          <div>
                                                {Math.ceil(item.main.temp_max)}
                                                &#8451;/
                                                {Math.ceil(item.main.temp_min)}
                                                &#8451;
                                          </div>{' '}
                                    </div>
                              </div>
                              <hr />
                              <div className="mx-auto my-2 flex-wrap py-4">
                                    <div className="flex justify-between flex-nowrap items-center align-middle">
                                          <div>Feels Like</div>

                                          <div>
                                                {Math.ceil(
                                                      item.main.feels_like
                                                )}
                                                &#8451;
                                          </div>
                                    </div>
                                    <div className="flex justify-between flex-nowrap items-center align-middle">
                                          <div>Wind</div>

                                          <div>
                                                {Math.ceil(item.wind.speed)} m/s
                                                <span className="pl-1 font-semibold  text-cyan-900">
                                                      {degreesToWindDirection(
                                                            item.wind.deg
                                                      )}
                                                </span>
                                          </div>
                                    </div>
                                    <div className="flex justify-between flex-nowrap items-center align-middle">
                                          <div>Humidity</div>
                                          <div>{item.main.humidity}&#37;</div>
                                    </div>
                                    <div className="flex justify-between flex-nowrap items-center align-middle">
                                          <div>Pressure</div>
                                          <div>{item.main.pressure} hPa</div>
                                    </div>
                              </div>
                        </div>
                  ))}
            </div>
      );
}
export default WeatherForecast;