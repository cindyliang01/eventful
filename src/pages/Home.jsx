import React, { Component } from "react";
import PostForm from "../components/postForm";

class Home extends Component {
  render() {
    const { createPost, pageState, createComment } = this.props;
    return (
      <div className="flex flex-row justify-between">
        <div className=" mt-4 container">
          <h1 className="text-center font-bold text-2xl mt-4 text-blue-300 pb-2">
            Fill out the form!
          </h1>
          <div className="content justify-center">
            <PostForm
              createPost={createPost}
              pageState={pageState}
              createComment={createComment}
            ></PostForm>
          </div>
        </div>

        {/* <div className=" border-r-2 border-pink-500 mt-4 mx-4"></div> */}

        <div className="mt-4 container">
          <div className="flex flex-col">
            <div>
              <h4>Agenda</h4>
            </div>

            <div className=" flex flex-row justify-between">
              <div className="flex flex-row">
                <div className="flex flex-col">
                  <div className="pb-4">7:00 pm</div>
                  <div className="pb-4">7:30 pm</div>
                  <div className="pb-4">8:30 pm</div>
                  <div className="pb-4">9:30 pm</div>
                </div>
                <div className=" border-r-2 border-pink-500 mt-4 mx-4"></div>
                <div className="flex flex-col">
                  <div className="pb-4">Bring out the cookies</div>
                  <div className="pb-4">Open the karaoke </div>
                  <div className="pb-4">Speech</div>
                  <div className="pb-4">Closing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
