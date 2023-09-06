import { useEffect, useState } from "react";
import { getRestaurant } from "../../services/RestaurantService";
import { IRestaurant } from "../../models/IRestaurant";
import { CenteredWrapper, ContactWrapper } from "../styled/Wrappers";

export const Contact = () => {
	const [restaurant, setRestaurant] = useState<IRestaurant>({
		id: '',
		name: '',
		address: '',
		zip: '',
		city: ''
	});
	
	useEffect(() => {
		const getData = async () => {
			setRestaurant(await getRestaurant());
		}
		getData();
	}, []);

	return (
		<CenteredWrapper>
			<p><strong>In the mood for some seafood?</strong></p>
			<p>Come visit us at:</p>
			<ContactWrapper>
			<p>{restaurant.address}</p>
			<p>{restaurant.zip} {restaurant.city}</p>
			</ContactWrapper>
		</CenteredWrapper>
	);
};
