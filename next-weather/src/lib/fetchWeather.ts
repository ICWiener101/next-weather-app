import { NewWeatherType, WeatherSchema } from '@/models/Weather';

export async function fetchWeather(
      lat: number,
      lon: number
): Promise<NewWeatherType | undefined> {
      try {
            const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relativehumidity_2m,apparent_temperature,is_day,precipitation,rain,weathercode,cloudcover,pressure_msl,windspeed_10m,winddirection_10m&hourly=temperature_2m,apparent_temperature,precipitation_probability,rain,weathercode,surface_pressure,windspeed_10m,winddirection_10m,uv_index,is_day&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,precipitation_probability_max,windspeed_10m_max,winddirection_10m_dominant&windspeed_unit=ms&timezone=auto`;
            const response = await fetch(url);
            if (!response.ok) {
                  throw new Error('Failure fetching weather data');
            }

            const result = await response.json();
            const weatherData = WeatherSchema.parse(result);

            return weatherData;
      } catch (error) {
            console.log(error);
      }
}
