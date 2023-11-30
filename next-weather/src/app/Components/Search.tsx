'use client';
import { CityList } from '@/models/City';
import fetchCities from '@/lib/fetchCities';
import { AsyncPaginate } from 'react-select-async-paginate';
import { useState } from 'react';
export type Option = {
      value: string;
      label: string;
      wikiDataId: string;
};
export type Location = {
      latitude: number;
      longitude: number;
};
function Search({ onSearchChange }: any) {
      const [searchValue, setSearchValue] = useState<Option | null>(null);
      const loadOptions = async (inputValue: string) => {
            const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=10000&namePrefix=${inputValue}`;
            const cities: CityList | undefined = await fetchCities(url);

            if (!cities) {
                  return { options: [] };
            }

            const options =
                  cities?.map((city) => ({
                        value: `${city.latitude} ${city.longitude}`,
                        label: `${city.city}, ${city.country}`,
                        wikiDataId: `${city.wikiDataId}`,
                  })) || [];

            return { options };
      };
      const customStyles = {
            control: (provided: any, state: any) => ({
                  ...provided,
                  borderRadius: '10px',
                  padding: '10px',
                  backgroundColor: '#7fd4fc',
                  border: 'none',
                  boxShadow: state.isFocused ? '0 0 0 2px #3699FF' : null,
                  color: '#fffff',
            }),
            option: (provided: any, state: any) => ({
                  ...provided,
                  backgroundColor: state.isFocused ? '#7FD4FC' : null,
                  color: '#4B5563',
            }),
            placeholder: (provided: any) => ({
                  ...provided,
                  color: '#ffffff',
                  fontWeight: 'bold',
            }),
      };
      const handleOnChange = (selectedCity: Option | null) => {
            setSearchValue(selectedCity);
            onSearchChange(selectedCity);
      };
      return (
            <>
                  <div className="w-2/3 mx-auto py-20">
                        {' '}
                        <AsyncPaginate
                              components={{
                                    DropdownIndicator: () => null,
                                    IndicatorSeparator: () => null,
                              }}
                              placeholder="Search Your City"
                              debounceTimeout={600}
                              value={searchValue}
                              onChange={handleOnChange}
                              loadOptions={loadOptions}
                              styles={customStyles}
                        />
                  </div>
            </>
      );
}

export default Search;
