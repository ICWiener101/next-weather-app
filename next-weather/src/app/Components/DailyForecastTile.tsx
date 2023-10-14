import { CurrentWeatherProps } from '@/app/Components/CurrentWeather';

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
      return (
            <>
                  <div
                        className="flex rounded-lg p-7 text-gray-700 flex-row flex-wrap bg-gradient-to-b from-sky-100 to-sky-200 shadow-xl hover:shadow-2xl items-center"
                        key={dayOfWeek}
                  >
                        <h3 className="text-center w-full font-semibold text-xl">
                              {dayOfWeek}
                        </h3>
                        <div className="mx-auto flex justify-between items-center p-4 w-6/6">
                              <div className="w-6/12">
                                    <img
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
                        <div className="mx-auto my-2 flex-wrap  w-full ">
                              <div key={dateStr}>
                                    <div className="flex justify-between text-gray-500 items-center">
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
                                    <div className="flex justify-between text-gray-500 items-center">
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
                                    <div className="flex justify-between  text-gray-500 items-center">
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
                                    <div className="flex justify-between text-gray-500 items-center">
                                          <span className="flex items-center">
                                                Wind{' '}
                                                <img
                                                      className="h-full w-5"
                                                      src="icons/wind.png"
                                                      alt="wind icon"
                                                />{' '}
                                          </span>
                                          <span>
                                                {Math.ceil(windSpeed)}m/s
                                                {degreesToWindDirection(
                                                      windDirection
                                                )}
                                          </span>
                                    </div>
                                    <div className="flex justify-between text-gray-500 items-center">
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
                        </div>
                  </div>
            </>
      );
}

export default DailyForecastTile;
