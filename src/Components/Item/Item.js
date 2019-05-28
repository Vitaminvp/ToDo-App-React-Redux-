import React from "react";
import PropTypes from "prop-types";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const Item = ({
  text,
  isCompleted,
  id,
  removeTask,
  completeTask,
  selectTask,
  currentTaskId,
  commentsAmount
}) => (

<>
    <ListItem button>
        <i className="material-icons" onClick={() => completeTask(id)}>
            {isCompleted ? "check_circle" : "brightness_1"}
        </i>
        <ListItemText  className={isCompleted ? "completed text" : "text"} onClick={() => selectTask(id)} >
            {text}
        </ListItemText>

        <i className="material-icons" onClick={() => removeTask(id)}>
            clear
        </i>

    </ListItem>
    <Divider light />
</>
  // <li className={currentTaskId === id ? "current" : ""}>
  //   <i className="material-icons" onClick={() => completeTask(id)}>
  //     {isCompleted ? "check_circle" : "brightness_1"}
  //   </i>
  //   <span
  //     className={isCompleted ? "completed text" : "text"}
  //     onClick={() => selectTask(id)}
  //   >
  //       {text} <sup>{commentsAmount ? commentsAmount : null}</sup>
  //   </span>
  //   <i className="material-icons" onClick={() => removeTask(id)}>
  //     clear
  //   </i>
  // </li>
);

Item.propTypes = {
  text: PropTypes.string,
  isCompleted: PropTypes.bool,
  removeTask: PropTypes.func,
  completeTask: PropTypes.func,
  id: PropTypes.number,
  currentTaskId: PropTypes.number
};

Item.defaultProps = {
  text: "",
  isCompleted: false,
  removeTask: () => {},
  completeTask: () => {},
  id: null,
  currentTaskId: null
};

export default Item;
