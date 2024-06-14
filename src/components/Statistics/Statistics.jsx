
import PropTypes from 'prop-types';

import css from 'components/Statistics/Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      <div className={css.container}>
        <div className={css.wrap}>
          {title && <h2 className={css.title}>{title}</h2>}
          <ul className={css.stat__list}>
            {stats.map(({ id, label, percentage }) => (
              <li
                key={id}
                className={css.item}
                style={{
                  backgroundColor: getRandomHexColor(),
                }}
              >
                <span className={css.label}>{label}</span>
                <span className={css.percentage}>{percentage}%</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
