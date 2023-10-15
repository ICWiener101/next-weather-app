import { motion } from 'framer-motion';
import { useState } from 'react';
import {
      degreesToWindDirection,
      weekdayConverter,
      weatherDescIcon,
} from '@/lib/util';

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
      console.log(`${dayOfWeek}-${dateStr}`);
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
                        className="flex flex-wrap justify-between h-52 rounded-lg p-7 text-gray-700 bg-gradient-to-b from-sky-100 to-sky-200 shadow-xl hover:shadow-2xl items-center"
                        key={`${dayOfWeek}-${dateStr}`}
                  >
                        <div className="flex w-1/4 flex-wrap items-center justify-center">
                              <h3 className="text-center font-semibold text-xl">
                                    {dayOfWeek}
                              </h3>

                              <div className="w-1/3">
                                    <img
                                          className="w-full"
                                          src={`${
                                                weatherDescIcon(weathercode, 1)
                                                      ?.iconUrl
                                          }`}
                                          alt=""
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
                              className="flex w-1/3 flex-wrap justify-between"
                        >
                              <div className="flex justify-between w-full">
                                    <span className="flex items-center">
                                          Rain chances{' '}
                                          <img
                                                className="h-full w-5"
                                                src="icons/precipitation.png"
                                                alt="uv icon"
                                          />{' '}
                                    </span>
                                    <span>{precipitation}%</span>
                              </div>
                              <div className="flex justify-between w-full">
                                    <span className="flex items-center">
                                          Sunrise{' '}
                                          <img
                                                className="h-full w-5"
                                                src="icons/sunrise.png"
                                                alt="sunrise"
                                          />{' '}
                                    </span>
                                    <span>{sunrise.split('T')[1]}</span>
                              </div>
                              <div className="flex justify-between w-full">
                                    <span className="flex items-center">
                                          Sunset{' '}
                                          <img
                                                className="h-full w-6"
                                                src="icons/sunset.png"
                                                alt="sunset"
                                          />{' '}
                                    </span>
                                    <span>{sunset.split('T')[1]}</span>
                              </div>
                              <div className="flex justify-between w-full">
                                    <span className="flex items-center">
                                          Wind{' '}
                                          <img
                                                className="h-full w-5"
                                                src="icons/wind.png"
                                                alt="wind icon"
                                          />{' '}
                                    </span>
                                    <span className="bg-transparent pl-1">
                                          <span>{Math.ceil(windSpeed)}m/s</span>
                                          <span>
                                                {' '}
                                                {degreesToWindDirection(
                                                      windDirection
                                                )}
                                          </span>
                                    </span>
                              </div>
                              <div className="flex justify-between w-full">
                                    <span className="flex items-center">
                                          UV Index
                                          <img
                                                className="h-full w-5"
                                                src="icons/uv.png"
                                                alt="uv icon"
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
