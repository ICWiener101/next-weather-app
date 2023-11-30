import HourlyForecast, { HourlyProps } from '@/app/Components/HourlyForecast';

import { HourlyData } from '@/models/Weather';
// import { useEffect, useState } from 'react';

function Today({ weatherData }: HourlyProps) {
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
