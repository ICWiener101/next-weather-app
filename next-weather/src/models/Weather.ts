import { z } from 'zod';

const WeatherDescription = z.object({
      id: z.number(),
      main: z.string(),
      description: z.string(),
      icon: z.string(),
});

const WeatherMain = z.object({
      temp: z.number(),
      feels_like: z.number(),
      temp_min: z.number(),
      temp_max: z.number(),
      pressure: z.number(),
      humidity: z.number(),
});
const WeatherWind = z.object({
      speed: z.number(),
      deg: z.number(),
});

export const WeatherModel = z.object({
      coord: z.object({
            lon: z.number(),
            lat: z.number(),
      }),
      weather: z.array(WeatherDescription),
      main: WeatherMain,
      visibility: z.number(),
      wind: WeatherWind,
      dt: z.number(),
      sys: z.object({
            sunrise: z.number(),
            sunset: z.number(),
      }),
      name: z.string(),
});

const SunModel = z.object({
      sunrise: z.number(),
      sunset: z.number(),
});
const WeatherListItem = z.object({
      dt: z.number(),
      main: WeatherMain,
      weather: z.array(WeatherDescription),
      wind: WeatherWind,
      visibility: z.number(),
      pop: z.number(),
      dt_txt: z.string(),
});

export const ForecastData = z.object({
      cod: z.string(),
      message: z.number(),
      cnt: z.number(),
      list: z.array(WeatherListItem),
});
const WeatherWithCity = WeatherModel.extend({
      city: z.string(),
});

const ForecastWithCity = ForecastData.extend({
      city: z.string(),
});

export type WeatherWithCity = z.infer<typeof WeatherWithCity>;
export type Weather = z.infer<typeof WeatherModel>;
export type Forecast = z.infer<typeof ForecastData>;
export type ForecastWithCity = z.infer<typeof ForecastWithCity>;

// Define the schema for the "current" and "hourly" data
const CurrentData = z.object({
      time: z.string(),
      temperature_2m: z.number(),
      relativehumidity_2m: z.number(),
      apparent_temperature: z.number(),
      is_day: z.number(),
      precipitation: z.number(),
      rain: z.number(),
      weathercode: z.number(),
      cloudcover: z.number(),
      pressure_msl: z.number(),
      windspeed_10m: z.number(),
      winddirection_10m: z.number(),
});

const HourlyData = z.object({
      time: z.array(z.string()),
      temperature_2m: z.array(z.number()),
      apparent_temperature: z.array(z.number()),
      precipitation_probability: z.array(z.number()),
      rain: z.array(z.number()),
      surface_pressure: z.array(z.number()),
      windspeed_10m: z.array(z.number()),
      winddirection_10m: z.array(z.number()),
      uv_index: z.array(z.number()),
});

// Define the schema for the "daily" data
const DailyData = z.object({
      time: z.array(z.string()),
      temperature_2m_max: z.array(z.number()),
      temperature_2m_min: z.array(z.number()),
      sunrise: z.array(z.string()),
      sunset: z.array(z.string()),
      uv_index_max: z.array(z.number()),
      precipitation_probability_max: z.array(z.number()),
});

// Define the top-level schema for the entire JSON data
export const WeatherSchema = z.object({
      latitude: z.number(),
      longitude: z.number(),
      generationtime_ms: z.number(),
      utc_offset_seconds: z.number(),
      timezone: z.string(),
      timezone_abbreviation: z.string(),
      elevation: z.number(),
      current_units: z.record(z.string()),
      current: CurrentData,
      hourly_units: z.record(z.string()),
      hourly: HourlyData,
      daily_units: z.record(z.string()),
      daily: DailyData,
});

const NewWeatherWithCity = WeatherSchema.extend({
      city: z.string(),
});
export type NewWeatherSchemaWithCity = z.infer<typeof NewWeatherWithCity>;
export type NewWeatherType = z.infer<typeof WeatherSchema>;
