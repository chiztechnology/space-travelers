import { Container, ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function ProfilePage() {
  const { rockets } = useSelector((state) => state.rockets);

  return (
    <Container fluid="xl" style={{ marginTop: '1.5rem' }}>
      <div style={{ width: '50%' }}>
        <h3>My Rockets</h3>
        <ListGroup>
          {rockets
            .filter((rocket) => rocket.reserved)
            .map(({ id, name }) => (
              <ListGroup.Item style={{ padding: '1.2rem' }} key={id}>
                {name}
              </ListGroup.Item>
            ))}
        </ListGroup>
      </div>
    </Container>
  );
}

export default ProfilePage;
