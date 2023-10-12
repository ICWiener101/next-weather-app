export function degreesToWindDirection(degrees: number) {
      const directions = [
            '↓', // North
            '↙', // North-Northeast
            '←', // Northeast
            '↖', // East-Northeast
            '←', // East
            '↖', // East-Southeast
            '↑', // Southeast
            '↗', // South-Southeast
            '↑', // South
            '↗', // South-Southwest
            '→', // Southwest
            '↘', // West-Southwest
            '→', // West
            '↘', // West-Northwest
            '↓', // Northwest
            '↙', // North-Northwest
      ];

      const index = Math.round((degrees % 360) / 22.5);
      return directions[index % 16];
}

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

export function unixTimestampToTime(unixTimestamp: number) {
      const date = new Date(unixTimestamp * 1000); // Convert to milliseconds
      const hours = date.getHours();
      const minutes = date.getMinutes();
      //   const seconds = date.getSeconds();

      const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes
            .toString()
            .padStart(2, '0')}`;

      return formattedTime;
}

export function weatherDescIcon(weatherCode: number, isDay: number) {
      if (isDay) {
            const weatherDescriptionAndIcon: {
                  [key: number]: { description: string; iconUrl: string };
            } = {
                  0: {
                        description: 'Clear Sky',
                        iconUrl: 'icons/01d.png',
                  },
                  1: {
                        description: 'Mainly Clear',
                        iconUrl: 'icons/02d.png',
                  },

                  2: {
                        description: 'Partly Cloudy',
                        iconUrl: 'icons/03d.png',
                  },

                  3: {
                        description: 'Overcast',
                        iconUrl: 'icons/04d.png',
                  },
                  45: {
                        description: 'Fog',
                        iconUrl: 'icons/50d.png',
                  },
                  48: {
                        description: 'Fog',
                        iconUrl: 'icons/50d.png',
                  },

                  51: {
                        description: 'Light Drizzle',
                        iconUrl: 'icons/09d.png',
                  },

                  53: {
                        description: 'Moderate Drizzle',
                        iconUrl: 'icons/09d.png',
                  },
                  55: {
                        description: 'Moderate Drizzle',
                        iconUrl: 'icons/09d.png',
                  },
                  56: {
                        description: 'Freezing Drizzle',
                        iconUrl: 'icons/freezing-rain.png',
                  },
                  57: {
                        description: 'Freezing Drizzle',
                        iconUrl: 'icons/freezing-rain.png',
                  },
                  61: {
                        description: 'Light Rain',
                        iconUrl: 'icons/09d.png',
                  },
                  63: {
                        description: 'Moderate Rain',
                        iconUrl: 'icons/10d.png',
                  },
                  65: {
                        description: 'Heavy Rain',
                        iconUrl: 'icons/10d.png',
                  },
                  66: {
                        description: 'Freezing Rain',
                        iconUrl: 'icons/freezing-rain.png',
                  },
                  67: {
                        description: 'Freezing Rain',
                        iconUrl: 'icons/freezing-rain.png',
                  },
                  71: {
                        description: 'Light Snow',
                        iconUrl: 'icons/13d.png',
                  },
                  73: {
                        description: 'Moderate Snow',
                        iconUrl: 'icons/13d.png',
                  },
                  75: {
                        description: 'Heavy Snow',
                        iconUrl: 'icons/13d.png',
                  },
                  77: {
                        description: 'Snow Grains',
                        iconUrl: 'icons/13d.png',
                  },
                  80: {
                        description: 'Rain Showers',
                        iconUrl: 'icons/09d.png',
                  },
                  81: {
                        description: 'Rain Showers',
                        iconUrl: 'icons/09d.png',
                  },
                  82: {
                        description: 'Rain Showers',
                        iconUrl: 'icons/09d.png',
                  },
                  85: {
                        description: 'Snow Showers',
                        iconUrl: 'icons/13d.png',
                  },
                  86: {
                        description: 'Snow Showers',
                        iconUrl: 'icons/13d.png',
                  },
                  95: {
                        description: 'Thunderstorm',
                        iconUrl: 'icons/11d.png',
                  },
                  96: {
                        description: 'Light Hail Thunderstorm',
                        iconUrl: 'icons/11d.png',
                  },
                  99: {
                        description: 'Heavy Hail Thunderstorm',
                        iconUrl: 'icons/11d.png',
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
                        iconUrl: 'icons/01n.png',
                  },
                  1: {
                        description: 'Mainly Clear',
                        iconUrl: 'icons/02n.png',
                  },

                  2: {
                        description: 'Partly Cloudy',
                        iconUrl: 'icons/03n.png',
                  },

                  3: {
                        description: 'Overcast',
                        iconUrl: 'icons/04d.png',
                  },
                  45: {
                        description: 'Fog',
                        iconUrl: 'icons/50d.png',
                  },
                  48: {
                        description: 'Fog',
                        iconUrl: 'icons/50d.png',
                  },

                  51: {
                        description: 'Light Drizzle',
                        iconUrl: 'icons/09d.png',
                  },

                  53: {
                        description: 'Moderate Drizzle',
                        iconUrl: 'icons/09d.png',
                  },
                  55: {
                        description: 'Moderate Drizzle',
                        iconUrl: 'icons/09d.png',
                  },
                  56: {
                        description: 'Freezing Drizzle',
                        iconUrl: 'icons/freezing-rain.png',
                  },
                  57: {
                        description: 'Freezing Drizzle',
                        iconUrl: 'icons/freezing-rain.png',
                  },
                  61: {
                        description: 'Light Rain',
                        iconUrl: 'icons/09d.png',
                  },
                  63: {
                        description: 'Moderate Rain',
                        iconUrl: 'icons/10d.png',
                  },
                  65: {
                        description: 'Heavy Rain',
                        iconUrl: 'icons/10d.png',
                  },
                  66: {
                        description: 'Freezing Rain',
                        iconUrl: 'icons/freezing-rain.png',
                  },
                  67: {
                        description: 'Freezing Rain',
                        iconUrl: 'icons/freezing-rain.png',
                  },
                  71: {
                        description: 'Light Snow',
                        iconUrl: 'icons/13d.png',
                  },
                  73: {
                        description: 'Moderate Snow',
                        iconUrl: 'icons/13d.png',
                  },
                  75: {
                        description: 'Heavy Snow',
                        iconUrl: 'icons/13d.png',
                  },
                  77: {
                        description: 'Snow Grains',
                        iconUrl: 'icons/13d.png',
                  },
                  80: {
                        description: 'Rain Showers',
                        iconUrl: 'icons/09d.png',
                  },
                  81: {
                        description: 'Rain Showers',
                        iconUrl: 'icons/09d.png',
                  },
                  82: {
                        description: 'Rain Showers',
                        iconUrl: 'icons/09d.png',
                  },
                  85: {
                        description: 'Snow Showers',
                        iconUrl: 'icons/13d.png',
                  },
                  86: {
                        description: 'Snow Showers',
                        iconUrl: 'icons/13d.png',
                  },
                  95: {
                        description: 'Thunderstorm',
                        iconUrl: 'icons/11d.png',
                  },
                  96: {
                        description: 'Light Hail Thunderstorm',
                        iconUrl: 'icons/11d.png',
                  },
                  99: {
                        description: 'Heavy Hail Thunderstorm',
                        iconUrl: 'icons/11d.png',
                  },
            };
            const data = weatherDescriptionAndIcon[weatherCode];
            return { description: data.description, iconUrl: data.iconUrl };
      }
}
