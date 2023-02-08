import PropTypes from 'prop-types';

const RocketType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  flickrImage: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
});

export default RocketType;
