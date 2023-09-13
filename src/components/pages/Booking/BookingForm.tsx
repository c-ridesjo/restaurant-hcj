import { zodResolver } from '@hookform/resolvers/zod';
import { useReducer, useState } from 'react';
import type { FieldValues } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { IResponse } from '../../../models/IResponse';
import { ActionType, BookingsReducer } from '../../../reducers/BookingsReducer';
import { BookingSchema, bookingSchema } from '../../../schemas/bookingSchema';
import {
	ICreateBooking,
	createBooking,
	restaurantId,
} from '../../../services/RestaurantService';
import { LoadingSpinner } from '../../LoadingSpinner';
import { BookTableBtn } from '../../styled/Buttons';
import { FormInput } from '../../styled/Inputs';
import {
	CenteredWrapper,
	FormWrapper,
	GreenWrapper,
} from '../../styled/Wrappers';
import { UserTabelChoices } from './UsersTabelChoices';

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

	const [isShowingGDPRMsg, setIsShowingGDPRMsg] = useState(true);
	const [, dispatch] = useReducer(BookingsReducer, []);

	const [bookingConfirmation, setBookingConfirmation] =
		useState<JSX.Element | null>(null);

	const [isWaitingForResponse, setIsWaitingForResponse] = useState(false);

	const userChoices = {
		guests: numberOfGuests,
		day: dayOfService,
		time: serviceTime,
	};

	const onSubmit = async (data: FieldValues) => {
		setIsWaitingForResponse(true);
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

		const sendBooking = await createBooking(postMsg).then((res: IResponse) => {
			setIsWaitingForResponse(false);
			if (res.acknowledged === true) {
				console.log(res.acknowledged);
				return (
					<CenteredWrapper>
						<h2>Booking confirmed!</h2>
					</CenteredWrapper>
				);
			} else {
				return (
					<CenteredWrapper>
						<h2>Unable to book table</h2>
						<p>
							Something went wrong, please try again or contact our support.
						</p>
					</CenteredWrapper>
				);
			}
		});

		dispatch({
			type: ActionType.ADDED,
			payload: JSON.stringify(postMsg),
		});

		reset();
		console.log(sendBooking);
		setBookingConfirmation(sendBooking);
	};

	const handleDeclineGDPR = () => {
		setIsShowingGDPRMsg(false);
		location.href = '/';
	};

	return (
		<>
			<CenteredWrapper>
				<UserTabelChoices userChoices={userChoices} />
				{isWaitingForResponse ? (
					<LoadingSpinner />
				) : bookingConfirmation === null ? (
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
						<FormInput
							{...register('email')}
							type='email'
							placeholder='Email'
						/>
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
				) : (
					bookingConfirmation
				)}

				{isShowingGDPRMsg ? (
					<GreenWrapper>
						We store personal data to be able to contact customers. All data is
						deleted when no longer needed, or three years at the longest.
						<button onClick={() => setIsShowingGDPRMsg(false)}>Accept</button>
						<button onClick={handleDeclineGDPR}>Decline</button>
					</GreenWrapper>
				) : (
					''
				)}
			</CenteredWrapper>
		</>
	);
};
