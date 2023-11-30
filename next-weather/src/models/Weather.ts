import { z } from 'zod';

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

export const CurrentWeatherSimplified = z.object({
      time: z.string(),
      temperature_2m: z.number(),
      apparent_temperature: z.number(),
      is_day: z.number(),
      weather_code: z.number(),
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
      weathercode: z.array(z.number()),
      is_day: z.array(z.number()),
});

const DailyData = z.object({
      weathercode: z.array(z.number()),
      time: z.array(z.string()),
      temperature_2m_max: z.array(z.number()),
      temperature_2m_min: z.array(z.number()),
      sunrise: z.array(z.string()),
      sunset: z.array(z.string()),
      uv_index_max: z.array(z.number()),
      precipitation_probability_max: z.array(z.number()),
      windspeed_10m_max: z.array(z.number()),
      winddirection_10m_dominant: z.array(z.number()),
});

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
      currentTime: z.date(),
      city: z.string(),
});

export type HourlyData = z.infer<typeof HourlyData>;
export type DailyData = z.infer<typeof DailyData>;
export type NewWeatherSchemaWithCity = z.infer<typeof NewWeatherWithCity>;
export type NewWeatherType = z.infer<typeof WeatherSchema>;
export type CurrentWeatherType = z.infer<typeof CurrentWeatherSimplified>;
