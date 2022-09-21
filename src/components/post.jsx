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
        <div>
          <h4 className="text-pink-500 text-center">Post :</h4>
          <p className="text-1xl font-bold text-blue-400 border-b border-gray-600 p-2 ">
            {this.displayPosts()}
          </p>

          <CommentForm createComment={createComment} onePost={onePost} />
          <div className=" flex flex-column border-2 border-gray-300 rounded">
            <div className=" flex flex-row">
              <span className="text-purple-500 m-3">
                Likes: {this.likeCounts()}
              </span>
              <div className="flex flex-grow"></div>
              <button
                className="bg-pink-300 text-white rounded p-1 font-bold m-3 hover:bg-pink-200"
                onClick={() => addLike(onePost)}
              >
                {this.likeUnlike()}
              </button>
            </div>
            <div className="border-2 border-gray-200 m-2 p-2">
              {onePost.comments.length > 0 &&
              onePost.comments[0].text !== "" ? (
                <span className="text-pink-700">
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
          </div>
        </div>
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
