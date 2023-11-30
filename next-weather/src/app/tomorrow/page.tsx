import HourlyForecast, { HourlyProps } from '@/app/Components/HourlyForecast';
import { HourlyData } from '@/models/Weather';
import React from 'react';

function Tomorrow({ weatherData }: HourlyProps) {
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

export default Tomorrow;
