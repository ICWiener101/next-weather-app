import { NewWeatherSchemaWithCity } from '@/models/Weather';
import Image from 'next/image';
export type CurrentWeatherProps = {
      weatherData: NewWeatherSchemaWithCity;
};
export type CurrentTimeProps = {
      currentTime: Date;
};
import { degreesToWindDirection, weatherDescIcon } from '@/lib/util';
import { motion } from 'framer-motion';
import LocalTime from './LocalTime';
import { useEffect, useState } from 'react';

function CurrentWeather({ weatherData }: CurrentWeatherProps) {
      const desc = weatherDescIcon(
            weatherData.current.weathercode,
            weatherData.current.is_day
      );

      const windArrow = degreesToWindDirection(
            weatherData.current.winddirection_10m
      );
      const [localTime, setLocalTime] = useState(
            new Date(weatherData.currentTime)
      );

      useEffect(() => {
            const intervalId = setInterval(() => {
                  setLocalTime(
                        (prevTime) => new Date(prevTime.getTime() + 1000)
                  );
            }, 1000);

            return () => {
                  clearInterval(intervalId);
            };
      }, []);

      return (
            <>
                  <motion.div
                        key={weatherData.city}
                        animate={{ x: '-0%' }}
                        transition={{ duration: 0.4 }}
                        initial={{ x: '100%' }}
                        className="my-5 max-w-md rounded-xl p-2 flex flex-col justify-start mx-auto  bg-gradient-to-b from-sky-100 to-sky-200 shadow-xl hover:shadow-2xl "
                  >
                        <div className="mx-auto my-1 flex flex-col items-center">
                              <div className="flex mx-auto items-center">
                                    <div>
                                          <img
                                                src={`${desc?.iconUrl}`}
                                                alt=""
                                          />
                                    </div>
                              </div>
                              <div className="flex flex-col items-center mx-auto mb-4">
                                    <div className="text-4xl font-bold text-slate-800">
                                          {Math.ceil(
                                                weatherData.current
                                                      .temperature_2m
                                          )}{' '}
                                          &#8451;
                                    </div>
                                    <div>{desc?.description}</div>
                                    <h3 className="font-semibold text-xl">
                                          {weatherData.city}
                                    </h3>
                                    <div className="flex items-center justify-center w-full flex-wrap">
                                          <span className="pr-1 font-medium text-xs">
                                                updated
                                          </span>
                                          <span>
                                                {
                                                      weatherData.current.time.split(
                                                            'T'
                                                      )[1]
                                                }
                                          </span>
                                    </div>
                                    <div>
                                          <LocalTime currentTime={localTime} />
                                    </div>
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
                                    <span className="flex justify-between w-1/3 items-center">
                                          <span>
                                                {' '}
                                                {Math.ceil(
                                                      weatherData.current
                                                            .windspeed_10m
                                                )}
                                                m/s
                                          </span>
                                          <span>
                                                <Image
                                                      src={windArrow}
                                                      alt="wind direction arrow"
                                                      width={18}
                                                      height={18}
                                                />
                                          </span>
                                    </span>
                              </div>
                              <div className="flex justify-between">
                                    <span>Humidity</span>{' '}
                                    <span>
                                          {
                                                weatherData.current
                                                      .relativehumidity_2m
                                          }
                                          %
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
                  </motion.div>
            </>
      );
}

export default CurrentWeather;
