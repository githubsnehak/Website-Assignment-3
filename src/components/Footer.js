import React from "react"
import { CDBFooter } from 'cdbreact';
import { Link } from 'react-router-dom';


export default function Footer() {
    return <div>
        
        <footer id="footer" className="top-space">
            <div className="footer1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 widget">
                            <h3 className="widget-title">Contact</h3>
                            <div className="widget-body">
                                <p>
                                    8878012887
                                    <br />
                                    <a href="mailto:#">snehakhandelwal@gmail.com</a>
                                    <br />
                                    <br />
                                    999 M.G ROAD, INDORE INDIA, PIN 452001
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3 widget">
                        
                            <div className="widget-body">
                                <p className="follow-me-icons">
                                
                                    <a href="">
                                   
                                        <i className="fa fa-twitter fa-2" />
                                    </a>
                                    <a href="">
                                        <i className="fa fa-dribbble fa-2" />
                                    </a>
                                    <a href="">
                                        <i className="fa fa-github fa-2" />
                                    </a>
                                    <a href="">
                                        <i className="fa fa-facebook fa-2" />
                                    </a>
                                </p>
                                
                            </div>
                        </div>
                        <div className="col-md-6 widget">
                            <h3 className="widget-title">Ecotech</h3>
                            <div className="widget-body">
                                <p>
                                Make a Step Towards a Greener, Cleaner Future!
                                </p>
                               <p> We offer a whole range of energy efficiency technologies, provided both for small businesses and larger operations.At the end of the day, this will help your company cut on expenses and will help reduce the environmental impact of your business, converting it to an eco-friendly one.
                                </p>
                                
                            </div>
                        </div>
                    </div>{" "}
                    {/* /row of widgets */}
                </div>
            </div>
            <div className="footer2">
                <div className="container">
                    <div className="row">
                        
                        <div className="col-md-6 widget">
                            <div className="widget-body">
                                <p className="text-right">
                                    Copyright © 2023, Designed by Sneha Khandelwal{" "}
                                   
                                </p>
                            </div>
                        </div>
                    </div>{" "}
                    {/* /row of widgets */}
                </div>
            </div>
        </footer>

    </div>
}