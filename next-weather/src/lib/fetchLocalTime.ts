export default async function fetchLocalTime(
      cityId: string
): Promise<string | undefined> {
      const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities/${cityId}/dateTime`;
      const options = {
            method: 'GET',
            headers: {
                  'X-RapidAPI-Key': `${process.env.NEXT_PUBLIC_CITY_API_KEY}`,
                  'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
            },
      };

      try {
            const response = await fetch(url, options);
            const localTime = await response.json();
            return localTime.data;
      } catch (error) {
            console.error(error);
      }
}
