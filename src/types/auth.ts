import * as z from 'zod';
// SignIn validation
export const AuthLoginSchema = z.object({
    username: z.string().min(1, { message: "Invalid username" }),
    password: z.string().min(6, { message: "Password must be at least 5 characters long" }),
  });
  
  const getAuthLogin= AuthLoginSchema.brand<'GetAuthLogin'>()
  
  export type GetAuthLogin = z.infer<typeof getAuthLogin>;