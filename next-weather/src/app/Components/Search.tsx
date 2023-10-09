'use client';
import { CityList } from '@/models/City';
import fetchCities from '@/lib/fetchCities';
import { AsyncPaginate } from 'react-select-async-paginate';
import { useState } from 'react';
import { Option } from './WeatherInfo';

function Search({ onSearchChange }: any) {
      const [searchValue, setSearchValue] = useState<Option | null>(null);

      const loadOptions = async (inputValue: string) => {
            const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=100000&namePrefix=${inputValue}`;
            const cities: CityList | undefined = await fetchCities(url);
            console.log('input value', inputValue);

            console.log('cities', cities);

            if (!cities) {
                  return { options: [] };
            }

            const options =
                  cities?.map((city) => ({
                        value: `${city.latitude} ${city.longitude}`,
                        label: `${city.city}, ${city.country}`,
                  })) || [];
            console.log(options);

            return { options };
      };
      const handleOnChange = (selectedCity: Option | null) => {
            setSearchValue(selectedCity);
            onSearchChange(selectedCity);
            console.log(selectedCity);
      };
      return (
            <>
                  <AsyncPaginate
                        debounceTimeout={600}
                        value={searchValue}
                        onChange={handleOnChange}
                        loadOptions={loadOptions}
                  />
            </>
      );
}

export default Search;