import { nanoid } from '@reduxjs/toolkit';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import RocketItem from '../components/RocketItem';

function RocketsPage() {
  const { rockets } = useSelector((state) => state.rockets);

  return (
    <Container fluid="xl" className="mt-3">
      <ul>
        {rockets.map((rocket) => (
          <RocketItem key={nanoid()} rocket={rocket} />
        ))}
      </ul>
    </Container>
  );
}

export default RocketsPage;
