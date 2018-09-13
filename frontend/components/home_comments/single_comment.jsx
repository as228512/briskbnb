import React from "react";

class SingleComment extends React.Component {
  constructor(props) {
    super(props);
  }

  convertDateToEnglish() {
    const commentCreationDate = new Date(this.props.review.created_at);
    const dateOptions = { month: "long", year: "numeric" };

    return commentCreationDate.toLocaleDateString("en-US", dateOptions);
  }

  render() {
    const body = this.props.review.body;
    const creationDate = this.convertDateToEnglish();
    const firstName = this.props.commenterInfo.fname || "";
    const imageUrl = this.props.commenterInfo.image_url || "";

    return (
      <div>
        <div className="comment-container">
          <div className="commenter-info-container">
            <img className="commenter-avatar" src={imageUrl} />
            <ul className="commenter-text-info">
              <li className="commenter-name">{firstName}</li>
              <li className="comment-creation-date">{creationDate}</li>
            </ul>
          </div>
          <div>
            <p className="comment-body">{body}</p>
          </div>
        </div>
        <div className="comments-border" />
      </div>
    );
  }
}

export default SingleComment;
