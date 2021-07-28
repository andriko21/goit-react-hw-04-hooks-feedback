import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import style from '../FeedbackOptions/FeedbackOptions.module.css'

export class FeedbackOptions extends Component {
   options = this.props.options;
    leaveFeedback = this.props.leaveFeedback;
     render() {
    return (
      <>
            {this.options.map(option => {
          return (
            <button
              className={style.button}
              key={option}
              type="button"
              onClick={() => this.leaveFeedback(option)}
            >
              {option}
            </button>
          );
        })}
      </>
    )
  }
}
