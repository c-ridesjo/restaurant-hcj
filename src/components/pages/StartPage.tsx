import React, { useEffect, useState } from 'react';
import AcceptCookies from '../AcceptCookies';
import { H2 } from '../styled/Headings';
import { CenteredWrapper, SmallWrapper } from '../styled/Wrappers';

const specials = [
	'Gravlax with mustard sauce and lemon crème',
	'Temperated sallad with lobster, scallops and sherry vinaigrettee',
	'Witch sole with browned butter, beetroot and capers',
	'Halibut with clarfied butter, shrimps, egg and horseradish',
	'Salmon carpaccio with lime, chili and ginger dressing',
	'Vendace roe with garnish',
	'Smoked salmon with sour cream and horseradish'
];

export const StartPage: React.FC = () => {
	const [todaysSpecials, setTodaysSpecials] = useState<string>('');

	useEffect(() => {
		const dayToday = new Date().getUTCDay();

		setTodaysSpecials(specials[dayToday]);
	}, []);

	return (
		<>
			<p>Welcome to our exclusive restaurant with specialties from the sea!</p>

			<CenteredWrapper>
				<SmallWrapper>
					<H2>Todays specials:</H2>
					<p>{todaysSpecials}</p>
				</SmallWrapper>
			</CenteredWrapper>


			<AcceptCookies></AcceptCookies>
		</>
	);
};

export default StartPage;
