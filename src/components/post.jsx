import React, { Component } from "react";
import CommentForm from "./commentForm";
import EachComment from "./eachComment";

class Post extends Component {
  render() {
    const {
      onePost,
      addLike,
      createComment,
      addLikeForComment,
      deleteForComment,
    } = this.props;
    return (
      <div>
        {onePost.post === "" ? (
          // alert("You can't have an empty post")
          <div>You can't have an empty post</div>
        ) : (
          <div>
            <h4>Post :</h4>
            <p>{this.displayPosts()}</p>

            <CommentForm createComment={createComment} onePost={onePost} />

            <span>Likes: {this.likeCounts()}</span>
            <button
              className="btn btn-secondary btn-sm m-2"
              onClick={() => addLike(onePost)}
            >
              {this.likeUnlike()}
            </button>

            {onePost.comments.length > 0 && onePost.comments[0].text !== "" ? (
              <span>
                Comments:{" "}
                {
                  <EachComment
                    onePost={onePost}
                    addLikeForComment={addLikeForComment}
                    deleteForComment={deleteForComment}
                  />
                }
              </span>
            ) : (
              <span>No comments</span>
            )}
          </div>
        )}
      </div>
    );
  }

  displayPosts() {
    const { post } = this.props.onePost;
    return post;
  }

  likeCounts() {
    const { like } = this.props.onePost;
    return like;
  }

  likeUnlike() {
    const { like } = this.props.onePost;
    return like === 0 ? "Like" : "Unlike";
  }
}

export default Post;
