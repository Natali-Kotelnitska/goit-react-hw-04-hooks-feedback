import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function Statistic({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <div className={s.statisticsWrapper}>
      <p className={s.statisticItem}>Good: {good}</p>
      <p className={s.statisticItem}>Neutral: {neutral}</p>
      <p className={s.statisticItem}>Bad: {bad}</p>
      <p className={s.statisticItem}>Total: {total}</p>
      <p className={s.statisticItem}>Positive feedback: {positivePercentage}</p>
    </div>
  );
}

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
