import React from "react";
// import PropTypes from 'prop-types'
import style from "../FeedbackOptions/FeedbackOptions.module.css";

export const FeedbackOptions = ({ options, leaveFeedback }) => {
  return (
    <>
      {options.map((option) => {
        return (
          <button
            className={style.button}
            key={option}
            type="button"
            onClick={() => leaveFeedback(option)}
          >
            {option}
          </button>
        );
      })}
    </>
  );
};

// export default FeedbackOptions;

// export class FeedbackOptions extends Component {
//    options = this.props.options;
//     leaveFeedback = this.props.leaveFeedback;
//      render() {
//     return (
//       <>
//             {this.options.map(option => {
//           return (
//             <button
//               className={style.button}
//               key={option}
//               type="button"
//               onClick={() => this.leaveFeedback(option)}
//             >
//               {option}
//             </button>
//           );
//         })}
//       </>
//     )
//   }
// }
