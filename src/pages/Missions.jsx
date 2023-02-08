import { useEffect } from 'react';
import {
  Badge, Button, Container, Table,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from '../redux/missions/missionsSlice';

function MissionsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  const { missions } = useSelector((state) => state.missions);
  return (
    <Container fluid="xl">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {missions.map(({ id, ...mission }) => (
            <tr key={id}>
              <td>{mission.name}</td>
              <td>{mission.description}</td>
              <td><Badge bg="secondary">NOT A MEMBER</Badge></td>
              <td><Button variant="light">Join Mission</Button></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default MissionsPage;
