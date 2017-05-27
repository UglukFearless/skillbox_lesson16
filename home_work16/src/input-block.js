import React from 'react';

const InputBlock = (props) => {
  return (<div className={"comment-form"}>

            <input
            className={"form-control"}
            type={"text"} placeholder={"Ваше имя..."}
            value={props.newAuthor}
            onChange={props.changeAuth} />

            <textarea
            className={"form-control text-justify"}
            placeholder={"Текст комментария..."}
            value={props.newCommentText}
            onChange={props.changeText}></textarea>

            <button
            className={"btn"}
            onClick={props.addNewComment}>{"Отправить"}</button>

          </div>);
}

export default InputBlock;
