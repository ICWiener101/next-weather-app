import { CurrentWeatherType, CurrentWeatherSimplified } from '@/models/Weather';

export async function fetchCurrentWeather(
      lat: number,
      lon: number
): Promise<CurrentWeatherType | undefined> {
      try {
            const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,apparent_temperature,is_day,weather_code&wind_speed_unit=ms&forecast_days=1`;
            const response = await fetch(url);
            if (!response.ok) {
                  throw new Error('Failure fetching weather data');
            }

            const result = await response.json();
            console.log(result.current);

            const currentWeather = CurrentWeatherSimplified.parse(
                  result.current
            );

            return currentWeather;
      } catch (error) {
            console.log(error);
      }
}
