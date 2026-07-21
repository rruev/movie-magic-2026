import * as z from 'zod';

export const createUserSchema = z.object({
    email: z.string().email({ message: 'Email must be a valid email address' }).min(10, { error: 'Email must be at least 10 characters long' }),
    password: z.string()
        .min(6, { message: 'Password must be at least 6 characters long' })
        .regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/, { error: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character' }),
    rePassword: z.string(),
}).refine((data) => data.password === data.rePassword, {
    message: 'Passwords do not match',
    path: ['rePassword'],
}).transform(({ rePassword, ...rest }) => rest);