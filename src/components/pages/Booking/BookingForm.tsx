import { zodResolver } from '@hookform/resolvers/zod';
import type { FieldValues } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { BookingSchema, bookingSchema } from '../../../schemas/bookingSchema';

export const BookingForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset,
	} = useForm<BookingSchema>({
		resolver: zodResolver(bookingSchema),
	});

	const onSubmit = (data: FieldValues) => {
		reset();
	};

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input {...register('firstName')} type='text' placeholder='Firstname' />
				{errors.firstName && <p>{`${errors.firstName.message}`}</p>}
				<input {...register('lastName')} type='text' placeholder='Lastname' />
				{errors.lastName && <p>{`${errors.lastName.message}`}</p>}
				<input {...register('email')} type='email' placeholder='Email' />
				{errors.email && <p>{`${errors.email.message}`}</p>}
				<input {...register('phone')} type='tel' placeholder='Phone number' />
				{errors.phone && <p>{`${errors.phone.message}`}</p>}
				<button type='submit' disabled={isSubmitting}>
					Book table
				</button>
			</form>
		</>
	);
};
