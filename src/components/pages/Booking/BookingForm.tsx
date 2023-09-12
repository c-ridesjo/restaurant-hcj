import { zodResolver } from '@hookform/resolvers/zod';
import type { FieldValues } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { BookingSchema, bookingSchema } from '../../../schemas/bookingSchema';
import {
	ICreateBooking,
	createBooking,
	restaurantId,
} from '../../../services/RestaurantService';
import { FormInput } from '../../styled/Inputs';
import { CenteredWrapper, FormWrapper } from '../../styled/Wrappers';
import { UserTabelChoices } from './UsersTabelChoices';
import { ActionType, BookingsReducer } from '../../../reducers/BookingsReducer';
import { useReducer } from 'react';
import { BookTableBtn } from '../../styled/Buttons';

interface IBookingFormProps {
	bookingInfo: {
		numberOfGuests: number;
		dayOfService: string;
		serviceTime: string;
		showBookingForm: boolean;
	};
}

export const BookingForm = ({
	bookingInfo: { numberOfGuests, dayOfService, serviceTime },
}: IBookingFormProps) => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset,
	} = useForm<BookingSchema>({
		resolver: zodResolver(bookingSchema),
	});

	const [, dispatch] = useReducer(BookingsReducer, []);

	const userChoices = {
		guests: numberOfGuests,
		day: dayOfService,
		time: serviceTime,
	};

	const onSubmit = (data: FieldValues) => {
		const postMsg: ICreateBooking = {
			restaurantId: restaurantId,
			date: dayOfService,
			time: serviceTime,
			numberOfGuests: numberOfGuests,
			customer: {
				name: data.firstName,
				lastname: data.lastName,
				email: data.email,
				phone: data.phone,
			},
		};

		createBooking(postMsg);

		dispatch({
			type: ActionType.ADDED,
			payload: JSON.stringify(postMsg)
		});
		reset();
	};

	//console.log(numberOfGuests, dayOfService, serviceTime);

	return (
		<>
			<CenteredWrapper>
				<UserTabelChoices userChoices={userChoices} />
				<FormWrapper onSubmit={handleSubmit(onSubmit)}>
					<FormInput
						{...register('firstName')}
						type='text'
						placeholder='Firstname'
					/>
					{errors.firstName && <p>{`${errors.firstName.message}`}</p>}
					<FormInput
						{...register('lastName')}
						type='text'
						placeholder='Lastname'
					/>
					{errors.lastName && <p>{`${errors.lastName.message}`}</p>}
					<FormInput {...register('email')} type='email' placeholder='Email' />
					{errors.email && <p>{`${errors.email.message}`}</p>}
					<FormInput
						{...register('phone')}
						type='tel'
						placeholder='Phone number'
					/>
					{errors.phone && <p>{`${errors.phone.message}`}</p>}
					<BookTableBtn type='submit' disabled={isSubmitting}>
						Book table
					</BookTableBtn>
				</FormWrapper>
			</CenteredWrapper>
		</>
	);
};
