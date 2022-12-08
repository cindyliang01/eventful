import React, { Component } from "react";
import PostForm from "../components/postForm";

class Home extends Component {
  render() {
    const { createPost, pageState, createComment } = this.props;
    return (
      <React.Fragment>
        <h1 className="text-center pt-12 font-semibold text-gray-500 ">
          Welcome to Eventful!
        </h1>
        <div className="flex flex-row justify-between pt-12">
          <div className=" mt-4 container ">
            <h3 className="text-center font-bold mt-4 text-blue-300 pb-4">
              Fill out the form!
            </h3>
            <div className="content justify-center">
              <PostForm
                createPost={createPost}
                pageState={pageState}
                createComment={createComment}
              ></PostForm>
            </div>
          </div>

          <div className=" border-r-2 border-gray-200 mt-4 mr-20"></div>

          <div className="mt-4 container grid justify-items-center border-gray-300 py-6 rounded-3xl border-2 bg-gray-100">
            <div className="flex flex-col">
              <div>
                <h3 className="text-center font-bold mt-2 text-gray-500 pb-4">
                  Agenda
                </h3>
              </div>

              <div className="flex flex-row pb-6">
                <div className="flex flex-row">
                  <div className="flex flex-col">
                    <p className="pb-4 text-gray-600 font-bold  ">7:00 pm</p>
                    <p className="pb-4 text-gray-600 font-bold">7:30 pm</p>
                    <p className="pb-4 text-gray-600 font-bold">8:30 pm</p>
                    <p className="pb-4 text-gray-600 font-bold">9:30 pm</p>
                  </div>
                  <div className=" border-r-2 border-gray-200 mt-4 mx-4"></div>
                  <div className="flex flex-col">
                    <p className="pb-4 text-gray-500 font-medium">
                      Bring out the cookies
                    </p>
                    <p className="pb-4 text-gray-500 font-medium">
                      Open the karaoke{" "}
                    </p>
                    <p className="pb-4 text-gray-500 font-medium">Speech</p>
                    <p className="pb-4 text-gray-500 font-medium">Closing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Home;
