import PropTypes from 'prop-types';
import s from './Button.module.css';

export default function FeedbackOptions({ options, onButtonClick }) {
  return (
    <div className={s.container}>
      {Object.keys(options).map(option => {
        return (
          <button
            key={option}
            type="button"
            name={option}
            className={s.button}
            onClick={e => {
              onButtonClick(e.currentTarget.name);
            }}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.object,
  onButtonClick: PropTypes.func.isRequired,
};
