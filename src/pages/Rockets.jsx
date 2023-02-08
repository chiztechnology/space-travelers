import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import RocketItem from '../components/RocketItem';
import { getRockets } from '../redux/rockets/rocketSlice';

function RocketsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

  const { rockets } = useSelector((state) => state.rockets);
  return (
    <Container>
      <ul>
        {rockets.map(({ id, ...rocket }) => (
          <RocketItem key={id} rocket={rocket} />
        ))}
      </ul>
    </Container>
  );
}

export default RocketsPage;
