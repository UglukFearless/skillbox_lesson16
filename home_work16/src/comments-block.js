import React from 'react';

const CommentsBlock = (props) => {
  return (<div
          id={props.divId}
          className={"comment-block"}
          onMouseOver={props.focusComment}
          onMouseLeave={props.unfocusComment}>
          <span className={"user-name"}>{props.user}</span>
          <span  className={"time-stamp"}>{props.timestamp}</span>
          <p className={"comment text-justify"}>{props.text}</p>
          <img className={props.treshClass} onClick={props.removeComment} src="images/trash.png" />
          </div>);
}

export default CommentsBlock;
