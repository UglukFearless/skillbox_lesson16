// import $ from "jquery"; Думал, что воспользуюсь, но однако нет ))
import React from 'react';
import ReactDOM from 'react-dom';
import DefaultBlock from './default-block';
import CommentsBlock from './comments-block';
import InputBlock from './input-block';

class CommentApp extends React.Component {
  constructor() {
    super();

    this.storageState = JSON.parse(window.localStorage.getItem('save_state'));
    if (!this.storageState) {
      //Определим исходное состояние приложения
      this.state = {
        comments: [],
        newAuthor: '',
        newCommentText: ''
      };
    } else {
      this.storageState.newAuthor = '';
      this.storageState.newCommentText = '';
      this.state = this.storageState;
    }

  }

  changeAuthor(ev) {
    this.setState({newAuthor: ev.target.value});
  }

  changeText(ev) {
    this.setState({newCommentText: ev.target.value});
  }

  getMonthName(monthNum) {
    switch (monthNum) {
      case 0:
        return ' января ';
        break;
      case 1:
        return ' февраля ';
        break;
      case 2:
        return ' марта ';
        break;
      case 3:
        return ' апреля ';
        break;
      case 4:
        return ' мая ';
        break;
      case 5:
        return ' июня ';
        break;
      case 6:
        return ' июля ';
        break;
      case 7:
        return ' августа ';
        break;
      case 8:
        return ' сентября ';
        break;
      case 9:
        return ' октября ';
        break;
      case 10:
        return ' ноября ';
        break;
      case 11:
        return ' декабря ';
        break;
    }
  }

  removeComment(value) {

    const comments = this.state.comments;
    comments.splice(value,1);

    this.setState({ comments });

    const new_state = JSON.stringify(this.state);
    window.localStorage.setItem('save_state', new_state);
  }

  addNewComment() {
    if (this.state.newAuthor.trim().length>0&&this.state.newCommentText.trim().length>0) {
      const date = new Date();
      const timestamp = date.getDate() + this.getMonthName(date.getMonth()) + date.getFullYear() + " в " + date.getHours() + ":"
                        + ( date.getMinutes()<10 ? ("0" + date.getMinutes()): date.getMinutes());
      const comments = this.state.comments;
      comments.push({
        user: this.state.newAuthor,
        timestamp: timestamp,
        text: this.state.newCommentText,
        focus: false
      });

      this.setState({
        comments,
        newAuthor: '',
        newCommentText: ''
      });

      const new_state = JSON.stringify(this.state);
      window.localStorage.setItem('save_state', new_state);
    }
  }

  focusComment(value) {
    const comments = this.state.comments;
    comments[value].focus = true;
    this.setState({ comments });
  }

  unfocusComment(value) {
    const comments = this.state.comments;
    comments[value].focus = false;
    this.setState({ comments });
  }

  render() {

    let commentBlock;

    if (this.state.comments.length===0) {
      commentBlock = <DefaultBlock />;
    } else {
      commentBlock = (
              this.state.comments.map( (comment, i) => {
                let treshClass = comment.focus ? "trash" : "trash invisible";
                return (<CommentsBlock
                        key={i}
                        divId={("block" + i)}
                        user={comment.user}
                        timestamp={comment.timestamp}
                        text={comment.text}
                        treshClass={treshClass}
                        removeComment={this.removeComment.bind(this,i)}
                        focusComment={this.focusComment.bind(this, i)}
                        unfocusComment={this.unfocusComment.bind(this, i)}
                        />);
                      })
                    );
    }

    return (
      <div>
        <img
        src={"images/banner.png"}
        width={"550px"} />

        <hr className={"half-line"} />

        {commentBlock}

        <hr className={"half-line"} />

        <InputBlock
        newAuthor={this.state.newAuthor}
        newCommentText={this.state.newCommentText}
        changeAuth={this.changeAuthor.bind(this)}
        changeText={this.changeText.bind(this)}
        addNewComment={this.addNewComment.bind(this)}/>

      </div>
    );
  }

}

ReactDOM.render(
  <CommentApp />,
  document.querySelector('#app')
)
