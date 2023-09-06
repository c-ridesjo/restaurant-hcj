import React from 'react';
import AcceptCookies from '../AcceptCookies';

export const StartPage: React.FC = () => {
	return (
		<>
			<p>Welcome to our exclusive restaurant with specialties from the sea!</p>
			<AcceptCookies></AcceptCookies>
		</>
	);
};

export default StartPage;
