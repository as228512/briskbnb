import React from "react";

class SingleComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      imageUrl: ""
    };
  }

  componentDidMount() {
    this.props.fetchCommenterInfo(this.props.review.user_id).then(userInfo => {
      this.setState({
        firstName: userInfo.userInfo.fname,
        imageUrl: userInfo.userInfo.image_url
      });
    });
  }

  convertDateToEnglish() {
    const commentCreationDate = new Date(this.props.review.created_at);
    const dateOptions = { month: "long", year: "numeric" };

    return commentCreationDate.toLocaleDateString("en-US", dateOptions);
  }

  render() {
    const userId = this.props.review.user_id;
    const body = this.props.review.body;
    const creationDate = this.convertDateToEnglish();
    const firstName = this.state.firstName;
    const imageUrl = this.state.imageUrl;

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
