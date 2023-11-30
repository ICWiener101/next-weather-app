import { HourlyData } from '@/models/Weather';

export function degreesToWindDirection(degrees: number) {
      const directions = [
            '/icons/Wind Directions/Down.png', // North
            '/icons/Wind Directions/Down-left.png', // Northeast
            '/icons/Wind Directions/Left.png', // East
            '/icons/Wind Directions/Up-left.png', // Southeast
            '/icons/Wind Directions/Up.png', // South
            '/icons/Wind Directions/Up-right.png', // Southwest
            '/icons/Wind Directions/Right.png', // West
            '/icons/Wind Directions/Down-right.png', // Northwest
      ];

      const index = Math.round((degrees % 360) / 45);

      return directions[index % 8];
}
degreesToWindDirection(36);

export function weekdayConverter(dateString: string) {
      const date = new Date(dateString);
      const day = date.getDay();

      const daysOfWeek = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
      ];
      const weekday = daysOfWeek[day];

      return weekday;
}

export function weatherDescIcon(weatherCode: number, isDay: number) {
      if (isDay) {
            const weatherDescriptionAndIcon: {
                  [key: number]: { description: string; iconUrl: string };
            } = {
                  0: {
                        description: 'Clear Sky',
                        iconUrl: '/icons/01d.png',
                  },
                  1: {
                        description: 'Mainly Clear',
                        iconUrl: '/icons/02d.png',
                  },

                  2: {
                        description: 'Partly Cloudy',
                        iconUrl: '/icons/03d.png',
                  },

                  3: {
                        description: 'Overcast',
                        iconUrl: '/icons/04d.png',
                  },
                  45: {
                        description: 'Fog',
                        iconUrl: '/icons/50d.png',
                  },
                  48: {
                        description: 'Fog',
                        iconUrl: '/icons/50d.png',
                  },

                  51: {
                        description: 'Light Drizzle',
                        iconUrl: '/icons/09d.png',
                  },

                  53: {
                        description: 'Moderate Drizzle',
                        iconUrl: '/icons/09d.png',
                  },
                  55: {
                        description: 'Moderate Drizzle',
                        iconUrl: '/icons/09d.png',
                  },
                  56: {
                        description: 'Freezing Drizzle',
                        iconUrl: '/icons/freezing-rain.png',
                  },
                  57: {
                        description: 'Freezing Drizzle',
                        iconUrl: '/icons/freezing-rain.png',
                  },
                  61: {
                        description: 'Light Rain',
                        iconUrl: '/icons/09d.png',
                  },
                  63: {
                        description: 'Moderate Rain',
                        iconUrl: '/icons/10d.png',
                  },
                  65: {
                        description: 'Heavy Rain',
                        iconUrl: '/icons/10d.png',
                  },
                  66: {
                        description: 'Freezing Rain',
                        iconUrl: '/icons/freezing-rain.png',
                  },
                  67: {
                        description: 'Freezing Rain',
                        iconUrl: '/icons/freezing-rain.png',
                  },
                  71: {
                        description: 'Light Snow',
                        iconUrl: '/icons/13d.png',
                  },
                  73: {
                        description: 'Moderate Snow',
                        iconUrl: '/icons/13d.png',
                  },
                  75: {
                        description: 'Heavy Snow',
                        iconUrl: '/icons/13d.png',
                  },
                  77: {
                        description: 'Snow Grains',
                        iconUrl: '/icons/13d.png',
                  },
                  80: {
                        description: 'Rain Showers',
                        iconUrl: '/icons/09d.png',
                  },
                  81: {
                        description: 'Rain Showers',
                        iconUrl: '/icons/09d.png',
                  },
                  82: {
                        description: 'Rain Showers',
                        iconUrl: '/icons/09d.png',
                  },
                  85: {
                        description: 'Snow Showers',
                        iconUrl: '/icons/13d.png',
                  },
                  86: {
                        description: 'Snow Showers',
                        iconUrl: '/icons/13d.png',
                  },
                  95: {
                        description: 'Thunderstorm',
                        iconUrl: '/icons/11d.png',
                  },
                  96: {
                        description: 'Light Hail Thunderstorm',
                        iconUrl: '/icons/11d.png',
                  },
                  99: {
                        description: 'Heavy Hail Thunderstorm',
                        iconUrl: '/icons/11d.png',
                  },
            };
            const data = weatherDescriptionAndIcon[weatherCode];
            return { description: data.description, iconUrl: data.iconUrl };
      } else if (!isDay) {
            const weatherDescriptionAndIcon: {
                  [key: number]: { description: string; iconUrl: string };
            } = {
                  0: {
                        description: 'Clear Sky',
                        iconUrl: '/icons/01n.png',
                  },
                  1: {
                        description: 'Mainly Clear',
                        iconUrl: '/icons/02n.png',
                  },

                  2: {
                        description: 'Partly Cloudy',
                        iconUrl: '/icons/03n.png',
                  },

                  3: {
                        description: 'Overcast',
                        iconUrl: '/icons/04d.png',
                  },
                  45: {
                        description: 'Fog',
                        iconUrl: '/icons/50d.png',
                  },
                  48: {
                        description: 'Fog',
                        iconUrl: '/icons/50d.png',
                  },

                  51: {
                        description: 'Light Drizzle',
                        iconUrl: '/icons/09d.png',
                  },

                  53: {
                        description: 'Moderate Drizzle',
                        iconUrl: '/icons/09d.png',
                  },
                  55: {
                        description: 'Moderate Drizzle',
                        iconUrl: '/icons/09d.png',
                  },
                  56: {
                        description: 'Freezing Drizzle',
                        iconUrl: '/icons/freezing-rain.png',
                  },
                  57: {
                        description: 'Freezing Drizzle',
                        iconUrl: '/icons/freezing-rain.png',
                  },
                  61: {
                        description: 'Light Rain',
                        iconUrl: '/icons/09d.png',
                  },
                  63: {
                        description: 'Moderate Rain',
                        iconUrl: '/icons/10d.png',
                  },
                  65: {
                        description: 'Heavy Rain',
                        iconUrl: '/icons/10d.png',
                  },
                  66: {
                        description: 'Freezing Rain',
                        iconUrl: '/icons/freezing-rain.png',
                  },
                  67: {
                        description: 'Freezing Rain',
                        iconUrl: '/icons/freezing-rain.png',
                  },
                  71: {
                        description: 'Light Snow',
                        iconUrl: '/icons/13d.png',
                  },
                  73: {
                        description: 'Moderate Snow',
                        iconUrl: '/icons/13d.png',
                  },
                  75: {
                        description: 'Heavy Snow',
                        iconUrl: '/icons/13d.png',
                  },
                  77: {
                        description: 'Snow Grains',
                        iconUrl: '/icons/13d.png',
                  },
                  80: {
                        description: 'Rain Showers',
                        iconUrl: '/icons/09d.png',
                  },
                  81: {
                        description: 'Rain Showers',
                        iconUrl: '/icons/09d.png',
                  },
                  82: {
                        description: 'Rain Showers',
                        iconUrl: '/icons/09d.png',
                  },
                  85: {
                        description: 'Snow Showers',
                        iconUrl: '/icons/13d.png',
                  },
                  86: {
                        description: 'Snow Showers',
                        iconUrl: '/icons/13d.png',
                  },
                  95: {
                        description: 'Thunderstorm',
                        iconUrl: '/icons/11d.png',
                  },
                  96: {
                        description: 'Light Hail Thunderstorm',
                        iconUrl: '/icons/11d.png',
                  },
                  99: {
                        description: 'Heavy Hail Thunderstorm',
                        iconUrl: '/icons/11d.png',
                  },
            };
            const data = weatherDescriptionAndIcon[weatherCode];
            return { description: data.description, iconUrl: data.iconUrl };
      }
}

export function parseDate(currentLocalTime: string): Date {
      const parts = currentLocalTime.split(/[-T:.+]/);
      const year = parseInt(parts[0]);
      const month = parseInt(parts[1]) - 1;
      const day = parseInt(parts[2]);
      const hour = parseInt(parts[3]);
      const minute = parseInt(parts[4]);
      const second = parseInt(parts[5]);
      console.log(new Date(year, month, day, hour, minute, second));

      const localTime = new Date(year, month, day, hour, minute, second);
      return localTime;
}

export function getFirstTen(data: HourlyData): HourlyData | null {
      if (!data || !data.time || !data.time.length) {
            return null;
      }

      const currentTime = new Date();
      const currentIndex = data.time.findIndex((time) => {
            const dataTime = new Date(time);
            return dataTime > currentTime;
      });

      if (currentIndex === -1) {
            return null;
      }

      const startIndex = currentIndex + 1;
      const endIndex = startIndex + 10;

      const sliceData = <T extends (string | number)[]>(arr: T): T =>
            arr.slice(startIndex, endIndex) as T;

      return {
            time: sliceData(data.time),
            temperature_2m: sliceData(data.temperature_2m),
            apparent_temperature: sliceData(data.apparent_temperature),
            precipitation_probability: sliceData(
                  data.precipitation_probability
            ),
            rain: sliceData(data.rain as number[]), // Note: This assumes rain is a number[]
            surface_pressure: sliceData(data.surface_pressure),
            windspeed_10m: sliceData(data.windspeed_10m),
            winddirection_10m: sliceData(data.winddirection_10m),
            uv_index: sliceData(data.uv_index),
            weathercode: sliceData(data.weathercode),
            is_day: sliceData(data.is_day),
      };
}

export function get24HourForecast(data: HourlyData): HourlyData | null {
      if (!data || !data.time || !data.time.length) {
            return null;
      }

      const currentTime = new Date();

      // Calculate the timestamp for tomorrow
      const tomorrow = new Date(currentTime);
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(0, 0, 0, 0);

      // Find the index for the first hour of tomorrow
      const startIndex = data.time.findIndex((time) => {
            const dataTime = new Date(time);
            return dataTime.getTime() >= tomorrow.getTime();
      });

      if (startIndex === -1 || data.time.length - startIndex < 24) {
            return null;
      }

      const sliceData = <T extends (string | number)[]>(arr: T): T =>
            arr.slice(startIndex, startIndex + 24) as T;

      return {
            time: sliceData(data.time),
            temperature_2m: sliceData(data.temperature_2m),
            apparent_temperature: sliceData(data.apparent_temperature),
            precipitation_probability: sliceData(
                  data.precipitation_probability
            ),
            rain: sliceData(data.rain as number[]),
            surface_pressure: sliceData(data.surface_pressure),
            windspeed_10m: sliceData(data.windspeed_10m),
            winddirection_10m: sliceData(data.winddirection_10m),
            uv_index: sliceData(data.uv_index),
            weathercode: sliceData(data.weathercode),
            is_day: sliceData(data.is_day),
      };
}
