import React, { Component } from "react";
import PostForm from "../components/postForm";

class Home extends Component {
  render() {
    const { createPost, pageState } = this.props;
    return (
      <div className="flex flex-row justify-between">
        <div className=" mt-4 container">
          <div className=" m-3 border-2 border-blue-500 rounded-xl p-3">
            <h2 className="underline underline-offset-8 mb-3">Reminders</h2>
            <h5>November 4</h5>
            <p>
              Ling na's bday! Make sure to come! If you don't I wont't give you
              any cake So pls come
            </p>
            <h5>January 4</h5>
            <p>
              Today is the fourth day of January so if you want to come
              celebrate the fourth of January
            </p>
            <h5>April 4</h5>
            <p>
              On this day it is 3 days after April Fools day, what a great day
              to celebrate!
            </p>
            <h5>December 4</h5>
            <p>
              Why are these all on the 4th? Oh it's because I copied and pasted
              the dates and changed the months so I can see how it'll look like
              on the website
            </p>
          </div>
        </div>
        <div className=" border-r-2 border-pink-500 mt-4 mx-4"></div>
        <div className=" mt-4 container">
          <h1 className="text-center font-bold text-2xl mt-4 text-pink-300 pb-2">
            Fill out the form!
          </h1>

          <PostForm createPost={createPost} pageState={pageState}></PostForm>
        </div>
      </div>
    );
  }
}
export default Home;
