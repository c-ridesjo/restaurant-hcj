import { SmallWrapper, UlWrapper } from '../../styled/Wrappers';

export interface IUserTabelChoicesProps {
	userChoices: {
		guests: number;
		day: string;
		time: string;
	};
}

export const UserTabelChoices = ({ userChoices }: IUserTabelChoicesProps) => {
	const { guests, day, time } = userChoices;
	return (
		<>
			<SmallWrapper>
				<UlWrapper>
					<li>Day: {day}</li>
					<li>Time: {time}</li>
					<li>Number of guests: {guests}</li>
				</UlWrapper>
			</SmallWrapper>
		</>
	);
};
