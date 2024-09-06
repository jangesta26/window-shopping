import * as z from 'zod';
// SignIn validation
export const CategorySchema = z.object({
    id: z.number(),
    name: z.string(),
    imageSrc: z.string(),
    imageAlt: z.string()
  });
  
const getCategory= CategorySchema.brand<'GetCategory'>()
  
export type GetCategory = z.infer<typeof getCategory>;