'use client';
import { useEffect, useState } from 'react';
import { CurrentTimeProps } from './CurrentWeather';

function LocalTime({ currentTime }: CurrentTimeProps) {
      return (
            <div>
                  <span>Local Time: </span>
                  <span>{currentTime.toLocaleTimeString()}</span>
            </div>
      );
}

export default LocalTime;
