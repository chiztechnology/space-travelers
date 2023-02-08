import PropTypes from 'prop-types';
import RocketType from '../types/rockets';

const RocketItem = ({ rocket }) => {
  const { name, flickrImage, description } = rocket;

  return (
    <li>
      <img src={flickrImage} alt={name} width="250" height="250" />
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
      <button type="button">Reserve</button>
    </li>
  );
};

RocketItem.propTypes = {
  rocket: PropTypes.objectOf(RocketType).isRequired,
};

export default RocketItem;
