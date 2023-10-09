import { CityList, CityListSchema } from '@/models/City';

export default async function fetchCities(
      url: string
): Promise<CityList | undefined> {
      const options = {
            method: 'GET',
            headers: {
                  'X-RapidAPI-Key':
                        'aa404b2e40mshfa8bb8dd8ad6482p176035jsn35d9aeababe3',
                  'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
            },
      };

      try {
            const response = await fetch(url, options);
            if (!response.ok) {
                  throw new Error('Failde to fetch data');
            }
            const result = await response.json();
            const parsedCityList = CityListSchema.parse(result.data);

            if (parsedCityList) {
                  return parsedCityList;
            }
      } catch (error) {
            console.error(error);
      }
}
