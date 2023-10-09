import {
      Forecast,
      Weather,
      WeatherModel,
      ForecastData,
} from '@/models/Weather';

export async function fetchWeather(
      lat: number,
      lon: number
): Promise<Weather | undefined> {
      try {
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`;
            const response = await fetch(url);
            if (!response.ok) {
                  throw new Error('Failure fetching weather data');
            }

            const result = await response.json();
            const weatherData = WeatherModel.parse(result);
            console.log(weatherData);

            return weatherData;
      } catch (error) {
            console.log(error);
      }
}

export async function fetchForecast(
      lat: number,
      lon: number
): Promise<Forecast | undefined> {
      try {
            const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`;
            const response = await fetch(url);
            if (!response.ok) {
                  throw new Error('Failure fetching weather data');
            }

            const result = await response.json();
            const weatherData = ForecastData.parse(result);

            return weatherData;
      } catch (error) {
            console.log(error);
      }
}
