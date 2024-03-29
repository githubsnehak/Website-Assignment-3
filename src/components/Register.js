import React from "react"
import { Link } from 'react-router-dom';

export default function Register() {
    return <>
        <div className="container">
            
            <div className="row">
                {/* Article main content */}
                <article className="col-xs-12 maincontent">
                    <header className="page-header">
                        <h1 className="page-title">Registration</h1>
                    </header>
                    <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 custom-margin-left">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <h3 className="thin text-center">Register a new account</h3>
                               
                                <hr />
                                <form>
                                    <div className="top-margin">
                                        <label>First Name</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="top-margin">
                                        <label>Last Name</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="top-margin">
                                        <label>
                                            Email Address <span className="text-danger">*</span>
                                        </label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="top-margin">
                                        <label>
                                            Phone No <span className="text-danger">*</span>
                                        </label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="row top-margin">
                                        <div className="col-sm-6">
                                            <label>
                                                Password <span className="text-danger">*</span>
                                            </label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="col-sm-6">
                                            <label>
                                                Confirm Password <span className="text-danger">*</span>
                                            </label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-lg-8">
                                            <label className="checkbox">
                                                <input type="checkbox" />
                                                I've read the{" "}
                                                <a href="">Terms and Conditions</a>
                                            </label>
                                        </div>
                                        <div className="col-lg-4 text-right">
                                            <button className="btn btn-action" type="submit">
                                                Register
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </article>
                {/* /Article */}
            </div>
        </div>{" "}
        {/* /container */}
    </>

}