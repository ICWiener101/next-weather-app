import { CurrentWeatherProps } from '@/app/Components/CurrentWeather';
import DailyForecastTile from '@/app/Components/DailyForecastTile';

function WeatherForecast({ weatherData }: CurrentWeatherProps) {
      return (
            <div className="grid grid-cols-4 gap-16 justify-between my-10 max-w-7xl mx-auto ">
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
            </div>
      );
}
export default WeatherForecast;
