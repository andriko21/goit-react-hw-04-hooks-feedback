import React from "react";
import PropTypes from "prop-types";
import style from "../statistics/Statistics.module.css";


const Statistics = ({ title, good, neutral, bad, total, positivePercent }) => {
  return (
    <>
      <h2>{title}</h2>
      <ul className={style.List}>
        <li className={style.Item}>Good: {good}</li>
        <li className={style.Item}>Neutral: {neutral}</li>
        <li className={style.Item}>Bad: {bad}</li>
        <li className={style.Item}>Total: {total}</li>
        <li className={style.Item}>Positive feedback: {positivePercent}%</li>
      </ul>
    </>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercent: PropTypes.string,
};

export default Statistics;
