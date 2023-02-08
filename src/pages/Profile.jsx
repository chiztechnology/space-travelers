import { Container, ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function ProfilePage() {
  const { rockets } = useSelector((state) => state.rockets);

  return (
    <Container fluid="xl" className="mt-3">
      <div className="w-50">
        <h3>My Rockets</h3>
        <ListGroup>
          {rockets
            .filter((rocket) => rocket.reserved)
            .map(({ id, name }) => (
              <ListGroup.Item className="p-4" key={id}>
                {name}
              </ListGroup.Item>
            ))}
        </ListGroup>
      </div>
    </Container>
  );
}

export default ProfilePage;
