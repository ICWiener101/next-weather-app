import { z } from 'zod';

export const CitySchema = z.object({
      id: z.number(),
      wikiDataId: z.string(),
      city: z.string(),
      country: z.string(),
      countryCode: z.string(),
      region: z.string(),
      latitude: z.number(),
      longitude: z.number(),
});

export type City = z.infer<typeof CitySchema>;
export type CityList = z.infer<typeof CitySchema>[];
export const CityListSchema = z.array(CitySchema);
