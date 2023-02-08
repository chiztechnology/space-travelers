import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import RocketType from '../types/rockets';

const RocketItem = ({ rocket }) => {
  const { name, flickrImage, description } = rocket;

  return (
    <li
      style={{
        display: 'flex',
        padding: '1rem',
      }}
    >
      <img src={flickrImage} alt={name} width="250" height="200" />
      <div
        style={{
          marginLeft: '1rem',
        }}
      >
        <h5>{name}</h5>
        <p>{description}</p>
        <Button variant="primary" style={{ borderRadius: '.25rem' }}>
          Reserve Rocket
        </Button>
      </div>
    </li>
  );
};

RocketItem.propTypes = {
  rocket: PropTypes.objectOf(RocketType).isRequired,
};

export default RocketItem;
