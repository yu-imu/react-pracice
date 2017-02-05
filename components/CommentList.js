import React from 'react'
import { render } from 'react-dom'
import Comment from './Comment.js'

export default class CommentList extends React.Component {
  render() {
    var commentNodes = this.props.data.map((comment)=> {
      return (<Comment author={comment.author}>{comment.text}</Comment>);
    });
    return(<div className ='commentList'>{commentNodes}</div>);
  }
}
