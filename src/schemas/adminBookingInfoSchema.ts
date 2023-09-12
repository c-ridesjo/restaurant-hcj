import { z } from "zod";

export const adminBookingInfoSchema = z.object({
    date: z.string().min(2, { message: "Too old" }),
    time: z.string(),
    numberOfGuests: z.string().min(1, 'Please add at least 1 guest.').max(90, 'Max available seats 90'), 
})

export type AdminBookingInfoSchema = z.infer<typeof adminBookingInfoSchema>