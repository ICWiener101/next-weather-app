import HourlyForecast, { HourlyProps } from '@/app/Components/HourlyForecast';

import { HourlyData } from '@/models/Weather';
// import { useEffect, useState } from 'react';

function Today({ weatherData }: HourlyProps) {
      const tenHourForecast = Object.values(weatherData).map(
            (array) => array.slice
      );
      console.log(weatherData?.apparent_temperature);

      return (
            <>
                  {weatherData && (
                        <HourlyForecast
                              weatherData={weatherData as HourlyData}
                        />
                  )}
            </>
      );
}

export default Today;
