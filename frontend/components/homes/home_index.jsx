import React from "react";
import { withRouter } from "react-router-dom";

import HomeIndexItem from "./home_index_item";

const HomeIndex = props => {
  debugger;
  const homes = props.homes;
  const bookings = props.bookings;
  const upcomingTrip = props.upcomingTrip;

  if (props.location.pathname === "/homes") {
    return (
      <div>
        <div className="home-index">
          {homes.map(home => {
            const reviewData = props.reviewData(home.reviews);
            debugger;
            return (
              <HomeIndexItem
                home={home}
                bookings={bookings}
                reviewData={reviewData}
                key={home.id}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="trip-index">
          {homes.map(home => {
            return (
              <HomeIndexItem
                home={home}
                bookings={bookings}
                upcomingTrip={upcomingTrip}
                key={home.id}
              />
            );
          })}
        </div>
      </div>
    );
  }
};

export default withRouter(HomeIndex);
