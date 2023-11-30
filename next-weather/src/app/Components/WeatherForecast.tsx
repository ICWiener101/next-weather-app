import { CurrentWeatherProps } from '@/app/Components/CurrentWeather';
import DailyForecastTile from '@/app/Components/DailyForecastTile';
import { motion } from 'framer-motion';

function WeatherForecast({ weatherData }: CurrentWeatherProps) {
      return (
            <motion.div
                  key={weatherData.city}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="w-full sm:w-5/6 sm:mx-auto gap-y-4 md:w-5/6 grid md:grid-cols-3 md:grid-rows-2 md:gap-16"
            >
                  {weatherData.daily.time.slice(1).map((dateStr, index) => {
                        return (
                              <DailyForecastTile
                                    key={index}
                                    dateStr={dateStr}
                                    maxTemperature={
                                          weatherData.daily.temperature_2m_max[
                                                index
                                          ]
                                    }
                                    minTemperature={
                                          weatherData.daily.temperature_2m_min[
                                                index
                                          ]
                                    }
                                    sunrise={weatherData.daily.sunrise[index]}
                                    sunset={weatherData.daily.sunset[index]}
                                    weathercode={
                                          weatherData.daily.weathercode[index]
                                    }
                                    precipitation={
                                          weatherData.daily
                                                .precipitation_probability_max[
                                                index
                                          ]
                                    }
                                    windSpeed={
                                          weatherData.daily.windspeed_10m_max[
                                                index
                                          ]
                                    }
                                    windDirection={
                                          weatherData.daily
                                                .winddirection_10m_dominant[
                                                index
                                          ]
                                    }
                                    uvIndex={
                                          weatherData.daily.uv_index_max[index]
                                    }
                              />
                        );
                  })}
            </motion.div>
      );
}
export default WeatherForecast;

// grid place-items-center justify-around justify-self-center justify-items-center items-center self-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10
