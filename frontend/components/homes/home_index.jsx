import React from "react";
import HomeIndexItem from "./home_index_item";
import HomeMap from "../home_map/home_map";
import { withRouter } from "react-router-dom";

const HomeIndex = props => {
  const bookings = props.bookings;
  const upcomingTrip = props.upcomingTrip;
  debugger;

  if (props.location.pathname === "/homes") {
    return (
      <div>
        <div className="home-index">
          {props.homes.map(home => (
            <HomeIndexItem
              home={home}
              bookings={bookings}
              upcomingTrip={upcomingTrip}
              key={home.id}
            />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="trip-index">
          {props.homes.map(home => (
            <HomeIndexItem
              home={home}
              bookings={bookings}
              upcomingTrip={upcomingTrip}
              key={home.id}
            />
          ))}
        </div>
      </div>
    );
  }
};

export default withRouter(HomeIndex);
