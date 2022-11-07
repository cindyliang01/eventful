import React, { Component } from "react";
import CommentForm from "./commentForm";
import EachComment from "./eachComment";
import FeedBackForm from "./feedBackForm";

class Post extends Component {
  render() {
    const {
      onePost,
      createComment,
      addLikeForComment,
      deleteForComment,
      pageState,
      createFeedBack,
    } = this.props;
    return (
      <React.Fragment>
        <div>
          <div className="flex flex-col bg-blue-300 ">
            <div className="flex flex-row justify-between px-2 py-1">
              <div className=" text-1xl font-bold text-white">NAME:</div>
              <div className="text-1xl  text-white px-2">
                {this.displayPosts()}
              </div>
            </div>

            <div className="flex flex-row justify-between border-gray-400 px-2 pb-2">
              <div className=" text-1xl font-bold text-white">EMAIL:</div>
              <div className="text-1xl text-white px-2">
                {this.displayEmail()}
              </div>
            </div>
          </div>

          <div className=" flex flex-col rounded pt-1">
            {pageState === "flashcard" ? (
              <div>
                <FeedBackForm
                  createFeedBack={createFeedBack}
                  onePost={onePost}
                ></FeedBackForm>
              </div>
            ) : (
              <div>
                {" "}
                <CommentForm createComment={createComment} onePost={onePost} />
              </div>
            )}

            {onePost.comments.length > 0 && onePost.comments[0].text !== "" ? (
              <div className="text-gray-400">
                {" "}
                {
                  <EachComment
                    onePost={onePost}
                    addLikeForComment={addLikeForComment}
                    deleteForComment={deleteForComment}
                    pageState={pageState}
                  />
                }
              </div>
            ) : (
              <span className="text-gray-400 p-2 text-center">No comments</span>
            )}
          </div>
        </div>
      </React.Fragment>
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
