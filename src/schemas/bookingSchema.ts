import { z } from 'zod';

export const bookingSchema = z.object({
	firstName: z.string().min(2, 'First name must be at least 2 characters long'),
	lastName: z.string().min(2, 'Last name must be at least 2 characters long'),
	email: z.string().email('Please enter a valid email address'),
	phone: z.string().min(8, 'Phone number must be at least 8 characters long'),
});

export type BookingSchema = z.infer<typeof bookingSchema>;
