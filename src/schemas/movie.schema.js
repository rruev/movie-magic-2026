import * as z from "zod";

export const createMovieSchema = z.object({
    title: z.string()
        .min(5, { message: "Title must be at least 5 characters long" })
        .regex(/^[a-zA-Z0-9\s]+$/, { message: "Title can only contain letters, numbers, and spaces" }),
    category: z.enum(['Tv-show', 'Animation', 'Movie', 'Documentary', 'Short-film'],
        { message: "Category must be one of the following: Tv-show, Animation, Movie, Documentary, Short-film" }),
    genre: z.string()
        .min(5, { message: "Genre must be at least 5 characters long" })
        .regex(/^[a-zA-Z\s]+$/, { message: "Genre can only contain letters and spaces" }),
    director: z.string()
        .min(5, { message: "Director must be at least 5 characters long" })
        .regex(/^[a-zA-Z\s]+$/, { message: "Director can only contain letters and spaces" }),
    year: z.coerce.number()
        .min(1900, { message: "Year must be greater than or equal to 1900" })
        .max(new Date().getFullYear(), { message: `Year must be less than or equal to ${new Date().getFullYear()}` }),
    imgUrl: z.string()
        .regex(/^https?:\/\//, { message: "Image URL must be a valid URL" }),
    rating: z.coerce.number()
        .min(0, { message: "Rating must be greater than or equal to 0" })
        .max(10, { message: "Rating must be less than or equal to 10" }),
    description: z.string()
        .min(20, { message: "Description must be at least 20 characters long" })
        .regex(/^[a-zA-Z\s]+$/, { message: "Description can only contain letters, numbers, spaces, and basic punctuation" }),
})