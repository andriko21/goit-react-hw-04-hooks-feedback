import React from "react";
import PropTypes from "prop-types";
import styles from "../Section/Section.module.css";
const Section = ({ title, children }) => (
  <section className={styles.Section}>
    <h1 className={styles.title}>Please leave feedback</h1>
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,

  //  children: PropTypes.object,
};

Section.defaultProps = {
  children: " ",
};

export default Section;
