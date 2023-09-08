import type { FieldValues } from 'react-hook-form';
import { useForm } from 'react-hook-form';

export const BookingForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset,
		getValues,
	} = useForm();

	const onSubmit = (data: FieldValues) => {
		reset();
	};

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					{...register('firstname', {
						required: 'Firstname is required',
						minLength: {
							value: 2,
							message: 'Firstname has to be 2 characters long',
						},
					})}
					type='text'
					placeholder='Firstname'
				/>
				<input
					{...register('lastname', {
						required: 'Lastname is required',
						minLength: {
							value: 2,
							message: 'Lastname has to be 2 characters long',
						},
					})}
					type='text'
					placeholder='Lastname'
				/>
				<input
					{...register('email', { required: 'Email is required' })}
					type='email'
					placeholder='Email'
				/>
				<input
					{...register('phone', {
						required: 'You need to provide a phone number',
					})}
					type='tel'
					placeholder='Phone number'
				/>
				<button type='submit' disabled={isSubmitting}>
					Book table
				</button>
			</form>
		</>
	);
};
