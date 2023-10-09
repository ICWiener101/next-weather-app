'use client';
import { useState } from 'react';
import Search from '@/app/Components/Search';
import CurrentWeather from '@/app/Components/CurrentWeather';

export type Option = {
      value: string;
      label: string;
};
export type Location = {
      latitude: number;
      longitude: number;
};

function WeatherInfo() {
      const [location, setLocation] = useState<Location | null>(null);
      const handleOnSearchChange = async (selectedCity: Option) => {
            const [latitude, longitude] = selectedCity?.value.split(' ');
            setLocation({
                  latitude: parseFloat(latitude),
                  longitude: parseFloat(longitude),
            });
      };
      console.log('location', location);
      return (
            <>
                  <div className="max-w-6xl my-5 mx-auto">
                        <Search onSearchChange={handleOnSearchChange} />
                        <CurrentWeather />
                  </div>
            </>
      );
}

export default WeatherInfo;
