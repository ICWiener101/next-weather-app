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
