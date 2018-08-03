import React from 'react';
import { withRouter } from 'react-router-dom';
import HomeShowContainer from '../home_show/home_show_container';

class HomeIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {

  }

  handleClick() {
    const homeId = this.props.home.id;
    this.props.history.push(`/homes/${homeId}`);
  }

  homeIndex() {
    const { title, price, home_url } = this.props.home;

    return (
      <div className="home-index-item" onClick={this.handleClick}>

        <img className="home-index-image" src={home_url}/>
        <div className='index-item-info'>
          <div className="index-item-info-title">{title}</div>
          <p>From ${price} per night · Free cancellation</p>
        </div>
      </div>
    );
  }

  ///
  ///
  ///
  ///
  ///
  ///

  translateBookingDates() {

    const bookings = this.props.bookings;
    const homeId = this.props.home.id;
    let releventBookingsArray = [];

    Object.keys(bookings).forEach(key => {
      if(homeId === bookings[key]["home_id"]) {
        releventBookingsArray.push([
          bookings[key]["start_date"],
          bookings[key]["end_date"]
        ]);
      };
    });

    let orderedBookingsArray = releventBookingsArray.sort();
    let startDateOptions = { weekday: 'short', month: 'long', day: 'numeric' };
    let endDateOptions = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };

    orderedBookingsArray.forEach(bookings => {
      let date = orderedBookingsArray.shift();
      let startDate = new Date(date[0]);
      let endDate = new Date(date[1]);
      orderedBookingsArray.push([
        startDate.toLocaleDateString('en-US', startDateOptions),
        endDate.toLocaleDateString('en-US', endDateOptions)
      ]);
    })

    return orderedBookingsArray;
  }



  filterUpcomingTrips() {
    const englishDateRanges = this.translateBookingDates();

    const filteredDateRanges =
                               englishDateRanges.filter(dateRange =>
                                 new Date() < new Date(dateRange[1])
                               )

    return filteredDateRanges;
  }


  filterPastTrips() {
    const englishDateRanges = this.translateBookingDates();

    const filteredDateRanges =
                              englishDateRanges.filter(dateRange =>
                                new Date() >= new Date(dateRange[1])
                              )

    return filteredDateRanges;
  }


  renderUpcomingBookingRanges() {
    const englishDateRanges = this.filterUpcomingTrips();

    return(
      <ul>
      {englishDateRanges.map((dateRange, i) => (
        <li className='booking-range' key={`dateRange-${i}`}>
          • {dateRange[0]} - {dateRange[1]}
        </li>
      ))}
      </ul>
    )
  }


  renderPastBookingRanges() {
    const englishDateRanges = this.filterPastTrips();

    return(
      <ul>
      {englishDateRanges.map((dateRange, i) => (
        <li className='booking-range' key={`dateRange-${i}`}>
          • {dateRange[0]} - {dateRange[1]}
        </li>
      ))}
      </ul>
    )
  }

  TripIndex() {
    const { title, home_url } = this.props.home;

    let renderBookingRanges;
    if(this.props.upcomingTrip) {
      renderBookingRanges = this.renderUpcomingBookingRanges();
    }
    else renderBookingRanges = this.renderPastBookingRanges();

    if(this.props.upcomingTrip && this.renderUpcomingBookingRanges().props.children.length === 0 ||
       !this.props.upcomingTrip && this.renderPastBookingRanges().props.children.length === 0) {
         return null;
    }
    else {
         return (
           <div className="home-index-item" onClick={this.handleClick}>

           <img className="home-index-image" src={home_url}/>
           <div className='index-item-info'>
           <div className="index-item-info-title">{title}</div>
           <br/>
           <ul className="booked-dates">
           <strong>Booked Dates:</strong>
           {renderBookingRanges}
           </ul>
           </div>
           </div>
         );
    }
  }

  render() {
    if(this.props.history.location.pathname === "/homes") return this.homeIndex()
    else return this.TripIndex();
  }
}

export default withRouter(HomeIndexItem);
