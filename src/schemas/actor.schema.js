import * as z from 'zod';

export const createActorSchema = z.object({
    name: z.string().min(5, { message: 'Name must be at least 5 characters long' }).regex(/^[A-Za-z\s]+$/, { message: 'Name must contain only letters and spaces' }),
    age: z.coerce.number().min(1, { message: 'Age must be a positive number' }).max(120, { message: 'Age must be less than or equal to 120' }),
    born: z.string().min(10, { message: 'Born date must be at least 10 characters long' }).regex(/^[A-Za-z\s]+$/, { message: 'Born date must contain only letters and spaces' }),
    imgUrl: z.string().url({ message: 'Image URL must be a valid URL' }),
});