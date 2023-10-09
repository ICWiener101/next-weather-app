import { CityList, CityListSchema } from '@/models/City';

export default async function fetchCities(
      url: string
): Promise<CityList | undefined> {
      const options = {
            method: 'GET',
            headers: {
                  'X-RapidAPI-Key': `${process.env.NEXT_PUBLIC_CITY_API_KEY}`,
                  'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
            },
      };

      try {
            const response = await fetch(url, options);
            if (!response.ok) {
                  throw new Error('Failed to fetch data');
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
