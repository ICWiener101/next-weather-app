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
