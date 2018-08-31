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
    debugger;
    this.props.fetchCommenterInfo(this.props.review.user_id).then(userInfo => {
      debugger;
      this.setState({
        firstName: userInfo.userInfo.fname,
        imageUrl: userInfo.userInfo.image_url
      });
    });
  }

  render() {
    const userId = this.props.review.user_id;
    const body = this.props.review.body;
    const creationDate = this.props.review.created_at;
    const firstName = this.state.firstName;
    const imageUrl = this.state.imageUrl;
    debugger;

    return (
      <div>
        <div>
          <img className="commenter-avatar" src={imageUrl} />
          <ul>
            <li className="commenter-name">{firstName}</li>
            <li className="comment-creation-date">{creationDate}</li>
          </ul>
        </div>
        <div>
          <p className="comment-body">{body}</p>
        </div>
      </div>
    );
  }
}

export default SingleComment;
