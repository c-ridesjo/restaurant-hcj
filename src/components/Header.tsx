import { Link } from "react-router-dom";
import { HeaderWrapper, ListWrapper } from "./styled/Wrappers";

export const Header = () => {
  const areYouAdmin = () => {
    if (confirm('Are you sure you are admin?')) {
      location.href = '/admin';
    } else {
      location.href = 'http://localhost:5173/';
    }
  }

  return (
    <HeaderWrapper>
      <h1>A TASTE OF OCEAN</h1>
      <nav>
        <ListWrapper>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/booking'}>Booking</Link>
          </li>
          <li>
            <Link to={'/contact'}>Contact</Link>
          </li>
        </ListWrapper>
        <button onClick={areYouAdmin}>Admin</button>
      </nav>
    </HeaderWrapper>
  );
};
