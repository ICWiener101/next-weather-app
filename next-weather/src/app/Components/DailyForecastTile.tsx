import { motion } from 'framer-motion';
import { useState } from 'react';
import {
      degreesToWindDirection,
      weekdayConverter,
      weatherDescIcon,
} from '@/lib/util';
import Image from 'next/image';
function DailyForecastTile({
      dateStr,
      maxTemperature,
      minTemperature,
      sunrise,
      sunset,
      weathercode,
      precipitation,
      windSpeed,
      windDirection,
      uvIndex,
}: {
      dateStr: string;
      maxTemperature: number;
      minTemperature: number;
      sunrise: string;
      sunset: string;
      weathercode: number;
      precipitation: number;
      windSpeed: number;
      windDirection: number;
      uvIndex: number;
}) {
      const dayOfWeek = weekdayConverter(dateStr);
      return (
            <>
                  <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        variants={{
                              visible: { opacity: 1, scale: 1 },
                              hidden: { opacity: 0, scale: 0 },
                        }}
                        className="flex flex-col gap-y-10 w-2/3 justify-between rounded-lg p-4 text-gray-700 bg-gradient-to-b from-sky-100 to-sky-200 shadow-xl hover:shadow-2xl items-center md:w-[14%]"
                        key={`${dayOfWeek}-${dateStr}`}
                  >
                        <div className="flex w-5/6 flex-wrap items-center justify-center">
                              <h3 className="text-center font-semibold text-xl">
                                    {dayOfWeek}
                              </h3>

                              <div className="w-1/3 h-full relative">
                                    <Image
                                          src={
                                                weatherDescIcon(weathercode, 1)
                                                      ? weatherDescIcon(
                                                              weathercode,
                                                              1
                                                        )!.iconUrl
                                                      : '/icons/unknown.png'
                                          }
                                          alt={
                                                weatherDescIcon(weathercode, 1)
                                                      ? weatherDescIcon(
                                                              weathercode,
                                                              1
                                                        )!.description
                                                      : 'weather description'
                                          }
                                          width={80}
                                          height={80}
                                    />
                              </div>

                              <div>
                                    <div className="text-gray-700 text-lg">
                                          {Math.ceil(maxTemperature)}&#8451;/
                                          {Math.ceil(minTemperature)}&#8451;
                                    </div>
                              </div>
                        </div>
                        <div
                              key={dateStr}
                              className="flex w-2/3 flex-wrap justify-between gap-y-1"
                        >
                              <div className="flex justify-between w-full items-center">
                                    <span className="flex items-center">
                                          <Image
                                                src={'/icons/precipitation.png'}
                                                alt="rain icon"
                                                width={30}
                                                height={30}
                                          />{' '}
                                    </span>
                                    <span>{precipitation}%</span>
                              </div>
                              <div className="flex justify-between w-full items-center">
                                    <span className="flex items-center">
                                          <Image
                                                src={'/icons/sunrise.png'}
                                                alt="sunrise"
                                                width={30}
                                                height={30}
                                          />{' '}
                                    </span>
                                    <span>{sunrise.split('T')[1]}</span>
                              </div>
                              <div className="flex justify-between w-full">
                                    <span className="flex items-center">
                                          <Image
                                                src={'/icons/sunset.png'}
                                                alt="sunset"
                                                width={30}
                                                height={30}
                                          />{' '}
                                    </span>
                                    <span>{sunset.split('T')[1]}</span>
                              </div>
                              <div className="flex justify-between w-full items-center">
                                    <span className="flex items-center">
                                          <Image
                                                src={'/icons/wind.png'}
                                                alt="wind icon"
                                                width={30}
                                                height={30}
                                          />{' '}
                                    </span>
                                    <span className="bg-transparent pl-1 flex items-center">
                                          <span className="pr-1">
                                                {Math.ceil(windSpeed)}m/s
                                          </span>
                                          <span>
                                                <Image
                                                      src={degreesToWindDirection(
                                                            windDirection
                                                      )}
                                                      alt="wind direction"
                                                      width={20}
                                                      height={20}
                                                />
                                          </span>
                                    </span>
                              </div>
                              <div className="flex justify-between w-full items-center">
                                    <span className="flex items-center">
                                          <Image
                                                src={'/icons/uv.png'}
                                                alt="uv icon"
                                                width={30}
                                                height={30}
                                          />{' '}
                                    </span>{' '}
                                    <span>{Math.ceil(uvIndex)}</span>
                              </div>
                        </div>
                  </motion.div>
            </>
      );
}

export default DailyForecastTile;
