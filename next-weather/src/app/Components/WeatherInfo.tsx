import CurrentWeather from '@/app/Components/CurrentWeather';
import WeatherForecast from '@/app/Components/WeatherForecast';
import Map from '@/app/Components/map/mapIndex';
import { NewWeatherSchemaWithCity, HourlyData } from '@/models/Weather';
import { CurrentWeatherProps } from '@/app/Components/CurrentWeather';
import HourlyForecast from '@/app/Components/HourlyForecast';

function WeatherInfo({ weatherData }: CurrentWeatherProps) {
      return (
            <>
                  <div
                        className="w-12/12 my-5 mx-auto"
                        key={weatherData.latitude + weatherData.longitude}
                  >
                        <CurrentWeather
                              weatherData={
                                    weatherData as NewWeatherSchemaWithCity
                              }
                        />
                        <HourlyForecast
                              weatherData={weatherData.hourly as HourlyData}
                        />

                        <WeatherForecast
                              weatherData={
                                    weatherData as NewWeatherSchemaWithCity
                              }
                        />

                        <Map
                              weatherData={
                                    weatherData as NewWeatherSchemaWithCity
                              }
                        />
                  </div>
            </>
      );
}

export default WeatherInfo;
