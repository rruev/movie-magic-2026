import z from "zod";

export const getErrorMessage = (error) => {
    let errorMessage = null;

    if (error.name === 'ZodError') {
        const errors = z.flattenError(error).fieldErrors;
        errorMessage = Object.values(errors).flat().join(', ');
    } else if (error.name === 'PrismaClientKnownRequestError') {
        switch (error.code) {
            case 'P2002':
                errorMessage = 'A record with this unique field already exists.';
                break;
            default:
                errorMessage = 'An unexpected error occurred. Please try again later.';
        }
    } else {
        errorMessage = 'An unexpected error occurred. Please try again later.';
    }
    
    console.error('Error:', error);
    return errorMessage;
}