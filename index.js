import React from 'react'
import { render } from 'react-dom'
import CommentBox from './components/CommentBox.js'

var data = [
  {author: 'Pete Hunt', text: 'This is one comment'},
  {author: 'Jordan Walke', text: 'This is *another* comment'}
];

render(
  <CommentBox data={data} />,
  document.getElementById('container')
);
