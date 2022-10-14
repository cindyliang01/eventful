import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className="flex flex-row justify-between">
        <div className=" container border-2 border-red-600">
          <div className="m-3 border-2 border-blue-500 rounded-xl p-3">
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
        <div className="container border-2 border-blue-600">bye</div>
      </div>
    );
  }
}
export default Home;
