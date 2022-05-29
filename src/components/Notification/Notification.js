import PropTypes from 'prop-types';
import s from '../Notification/Notification.module.css';
const Notification = ({ message }) => {
  return <p className={s.notification}>{message}</p>;
};

Notification.prototype = {
  message: PropTypes.string.isRequired,
};
export default Notification;
