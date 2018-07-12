import React from 'react';
import { Link } from 'react-router-dom';

import HomeDetail from './home_detail';
import HomeMap from '../home_map/home_map';
import { NavBar } from '../nav/nav_bar';

//remember to add fetchBookings={fetchBookings} back into the render
// for homeDetail once you comment back in fetchBookings below
const HomeShow = ({ home,
                    homeId,
                    currentLoadingState,
                    fetchHome,
                    bookings,
                    createBooking,
                    // fetchBookings,
                    eraseHome }) => {
                                      return(
                                        <div>
                                          <NavBar />
                                          <div className="single-home-show">
                                            <div>

                                              <HomeDetail
                                                home={home}
                                                homeId={homeId}
                                                bookings={bookings}
                                                createBooking={createBooking}
                                                currentLoadingState={currentLoadingState}
                                                fetchHome={fetchHome}
                                                eraseHome={eraseHome}
                                              />

                                            </div>
                                          </div>
                                        </div>
                                      );
                                    };

export default HomeShow;
