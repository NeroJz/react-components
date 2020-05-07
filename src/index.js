import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        timeAgo="Today at 4:45pm"
        content="Nice blog"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Sophia"
        timeAgo="Today at 2:00am"
        content="Great! The insight is valuable!"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Joe"
        timeAgo="Yesterday at 5:45pm"
        content="Awesome!"
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
