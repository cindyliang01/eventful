import React, { Component } from "react";
import Post from "./post";

class Posts extends Component {
  render() {
    const {
      listOfPosts,
      addLike,
      createComment,
      addLikeForComment,
      deleteForComment,
      pageState,
    } = this.props;

    //     const reversedPosts = listOfPosts.map((item) => item).reverse();
    //     return (
    //       <React.Fragment>
    //         {/* <div className="w-auto min-w-[25%] max-w-min mt-20 mx-auto space-y-6 flex flex-col items-stretch"> */}
    //         {/* <div className="col-span-2 row-span-2"> */}
    //         <div className="grid grid-cols-3 gap-4 ">
    //           <ul>
    //             {reversedPosts.map((specificPost) => (
    //               <React.Fragment>
    //                 <li className="border-2 rounded-lg border-pink-200 mb-4 p-2">
    //                   <Post
    //                     onePost={specificPost}
    //                     key={specificPost.id}
    //                     addLike={addLike}
    //                     createComment={createComment}
    //                     addLikeForComment={addLikeForComment}
    //                     deleteForComment={deleteForComment}
    //                     pageState={pageState}
    //                   />
    //                 </li>
    //               </React.Fragment>
    //             ))}
    //           </ul>
    //         </div>
    //       </React.Fragment>
    //     );
    //   }
    // }

    const reversedPosts = listOfPosts.map((item) => item).reverse();
    return (
      <React.Fragment>
        <div
          className={
            pageState === "allForms"
              ? "grid grid-cols-3 gap-8 pt-9 "
              : "w-auto min-w-[25%] max-w-min mt-20 mx-auto space-y-6 flex flex-col items-stretch"
          }
        >
          {reversedPosts.map((specificPost) => (
            <React.Fragment>
              <div className="border-2 rounded-lg border-pink-200 mb-4 p-2">
                <Post
                  onePost={specificPost}
                  key={specificPost.id}
                  addLike={addLike}
                  createComment={createComment}
                  addLikeForComment={addLikeForComment}
                  deleteForComment={deleteForComment}
                  pageState={pageState}
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Posts;
