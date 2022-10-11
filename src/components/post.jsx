import React, { Component } from "react";
import CommentForm from "./commentForm";
import EachComment from "./eachComment";

class Post extends Component {
  render() {
    const {
      onePost,
      createComment,
      addLikeForComment,
      deleteForComment,
      pageState,
    } = this.props;
    return (
      <div>
        <div>
          <p className="text-1xl font-bold text-gray-400 px-2 ">
            Name: {this.displayPosts()}
          </p>
          <p className="text-1xl font-bold text-gray-400 border-b border-gray-600 px-2 pb-2 ">
            Email: {this.displayEmail()}
          </p>

          <div className=" flex flex-column rounded">
            <div className=" flex flex-row">
              <div className="flex flex-grow"></div>
            </div>

            {pageState === "flashcard" ? (
              <div></div>
            ) : (
              <div>
                {" "}
                <CommentForm createComment={createComment} onePost={onePost} />
              </div>
            )}

            {onePost.comments.length > 0 && onePost.comments[0].text !== "" ? (
              <div className="text-purple-700">
                {" "}
                {
                  <EachComment
                    onePost={onePost}
                    addLikeForComment={addLikeForComment}
                    deleteForComment={deleteForComment}
                  />
                }
              </div>
            ) : (
              <span className="text-gray-400">No comments</span>
            )}
          </div>
        </div>
      </div>
    );
  }

  displayPosts() {
    const { post } = this.props.onePost;
    return post;
  }

  displayEmail() {
    const { email } = this.props.onePost;
    return email;
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
