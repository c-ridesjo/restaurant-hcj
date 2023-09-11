import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #f0f4f6;
	min-height: 100vh;
	padding: 1.25rem;
`;

export const CenteredWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 2rem;
`;

export const ContentWrapper = styled.div`
	width: 100%;
	max-width: 75rem;
	background-color: #ffffff;
	padding: 1.25rem;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
	border-radius: 0.6rem;
`;

export const SmallWrapper = styled.div`
	width: 15rem;
	background-color: #f0f4f6;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
	border-radius: 0.6rem;
	padding: 1rem;
	margin: 1rem;
`;

export const ListWrapper = styled.ul`
	display: flex;
	justify-content: center;
	list-style: none;
	font-size: 1.5rem;
	gap: 10px;
	margin-right: 40px;
`;

export const HeaderWrapper = styled.header`
	font-family: 'Roboto Slab', serif;
	background-color: #dbf3ee;
	text-align: center;
	padding: 1.25rem;
`;

export const FooterWrapper = styled.footer`
	font-family: 'Roboto', sans-serif;
	background-color: #dbf3ee;
	text-align: left;
	padding: 0.6rem;
	font-size: 1rem;
	height: 5rem;
`;

export const UlWrapper = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
	text-align: left;
`;

export const FormWrapper = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
`;
