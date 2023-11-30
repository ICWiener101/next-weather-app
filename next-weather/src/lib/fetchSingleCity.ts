import { City, CitySchema } from '@/models/City';

export async function fetchSingleCity(
      latitude: number,
      longitude: number
): Promise<City | undefined> {
      const url =
            'https://wft-geo-db.p.rapidapi.com/v1/geo/locations/43.5670822+27.8366802/nearbyCities?radius=100&types=CITY&minPopulation=10000&limit=1';
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
                  throw new Error('Failed to fetch data');
            }
            const result = await response.json();
            console.log(result);

            const parsedCity = CitySchema.parse(result.data[0]);
            console.log(parsedCity);
            return parsedCity;
      } catch (error) {
            console.error(error);
      }
}
