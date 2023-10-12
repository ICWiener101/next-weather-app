import {
      Forecast,
      Weather,
      WeatherModel,
      ForecastData,
      NewWeatherType,
      WeatherSchema,
} from '@/models/Weather';

export async function fetchWeather(
      lat: number,
      lon: number
): Promise<NewWeatherType | undefined> {
      //api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation,rain,weathercode,cloudcover,pressure_msl,windspeed_10m,winddirection_10m&hourly=temperature_2m,apparent_temperature,precipitation_probability,rain,surface_pressure,windspeed_10m,winddirection_10m,uv_index&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&windspeed_unit=ms&timezone=auto
      try {
            const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relativehumidity_2m,apparent_temperature,is_day,precipitation,rain,weathercode,cloudcover,pressure_msl,windspeed_10m,winddirection_10m&hourly=temperature_2m,apparent_temperature,precipitation_probability,rain,surface_pressure,windspeed_10m,winddirection_10m,uv_index&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,precipitation_probability_max&windspeed_unit=ms&timezone=auto`;
            // const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`;
            const response = await fetch(url);
            if (!response.ok) {
                  throw new Error('Failure fetching weather data');
            }

            const result = await response.json();
            const weatherData = WeatherSchema.parse(result);
            console.log('result', result);

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
