import React from 'react';
import { Link } from 'react-router-dom';

import HomeDetail from './home_detail';
import HomeMap from '../home_map/home_map';
import { NavBar } from '../nav/nav_bar';

const HomeShow = ({ home,
                    homeId,
                    currentLoadingState,
                    fetchHome,
                    bookedDates,
                    eraseHome }) => {
                      debugger
                                      return(
                                        <div>
                                          <NavBar />
                                          <div className="single-home-show">
                                            <div>

                                              <HomeDetail
                                                home={home}
                                                homeId={homeId}
                                                bookedDates={bookedDates}
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
