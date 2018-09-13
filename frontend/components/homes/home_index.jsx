import React from "react";
import { withRouter } from "react-router-dom";

import HomeIndexItem from "./home_index_item";

const HomeIndex = props => {
  const homes = props.homes;
  const bookings = props.bookings;
  const upcomingTrip = props.upcomingTrip;

  if (props.location.pathname === "/homes") {
    return (
      <div>
        <div className="home-index">
          {homes.map(home => {
            const reviewStats = props.reviewStats(home.reviews);
            return (
              <HomeIndexItem
                home={home}
                bookings={bookings}
                reviewStats={reviewStats}
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
