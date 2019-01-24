import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = ()=> {
  return (
    <div className="ui container comments">
      <ApprovalCard />
      <CommentDetail 
        avatar={faker.image.avatar()}
        author="Sam"
        timeAgo="Today at 6:00pm"
        content="Nice blog post!"
      />
      <CommentDetail 
        avatar={faker.image.avatar()}
        author="Alex"
        timeAgo="Today at 5:30pm"
        content="I like the subject!"
      />
      <CommentDetail 
        avatar={faker.image.avatar()}
        author="Jane"
        timeAgo="Yesterday at 8:00am"
        content="I like the writing"/>
    </div>
  );
}


ReactDOM.render(<App />, document.getElementById('root'));