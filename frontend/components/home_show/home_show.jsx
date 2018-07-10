import React from 'react';
import { Link } from 'react-router-dom';

import HomeDetail from './home_detail';
import HomeMap from '../home_map/home_map';
import { NavBar } from '../nav/nav_bar';


const HomeShow = ({ home,
                    homeId,
                    currentLoadingState,
                    fetchHome,
                    fetchBookings,
                    eraseHome }) => {
                                      return(
                                        <div>
                                          <NavBar />
                                          <div className="single-home-show">
                                            <div>

                                              <HomeDetail
                                                home={home}
                                                homeId={homeId}
                                                currentLoadingState={currentLoadingState}
                                                fetchHome={fetchHome}
                                                fetchBookings={fetchBookings}
                                                eraseHome={eraseHome}
                                              />

                                            </div>
                                          </div>
                                        </div>
                                      );
                                    };

export default HomeShow;
