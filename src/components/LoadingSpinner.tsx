import './styles/LoadingSpinner.css';

export const LoadingSpinner = () => {
	return (
		<>
			<label htmlFor='loading-spinner' className='visually-hidden'>
				spinner, waiting for response
			</label>
			<div id='loading-spinner'>
				<div className='spinner-object-one spinner-object'></div>
				<div className='spinner-object-two spinner-object'></div>
				<div className='spinner-object-three spinner-object'></div>
			</div>
		</>
	);
};
