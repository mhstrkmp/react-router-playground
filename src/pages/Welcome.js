import styled from 'styled-components/macro';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import WishListItem from '../components/WishListItem';
import Button from '../components/Button';

const Container = styled.div`
  /* Add styling here */
`;

export default function Welcome() {
  return (
    <>
      <Container>Add welcome page content here</Container>
      <WishListItem title="Matthias" />
      <Link to="/add">
        <Button>+</Button>
      </Link>
    </>
  );
}
