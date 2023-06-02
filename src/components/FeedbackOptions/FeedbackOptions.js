import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(opt => {
    return (
      <button
        key={opt}
        className={s.btn}
        type="button"
        onClick={() => {
          onLeaveFeedback(opt);
        }}
      >
        {opt}
      </button>
    );
  });
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
