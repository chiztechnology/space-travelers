import { Badge, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { rocketReserved } from '../redux/rockets/rocketSlice';
import RocketType from '../types/rockets';

const RocketItem = ({ rocket }) => {
  const {
    id, name, flickrImage, description, reserved,
  } = rocket;

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(rocketReserved(id));
  };

  return (
    <li className="d-flex py-3">
      <img src={flickrImage} alt={name} width="250" height="200" />
      <div className="ms-3">
        <h5>{name}</h5>
        <p>
          {reserved && (
            <Badge className="me-2" bg="info">
              Reserved
            </Badge>
          )}
          {description}
        </p>
        <Button
          onClick={handleClick}
          variant={reserved ? 'outline-secondary' : 'primary'}
          style={{ borderRadius: '.25rem' }}
        >
          {reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
        </Button>
      </div>
    </li>
  );
};

RocketItem.propTypes = {
  rocket: RocketType.isRequired,
};

export default RocketItem;
