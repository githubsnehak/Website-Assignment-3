import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/bootstrap-theme.css';
import '../css/main.css'




import { useNavigate } from "react-router-dom"

export default function Login() {
    const navigate = useNavigate();

    function onSubmit() {
        //code for checking user credentials 
        //if credentials is valid, login success
        navigate('/dashboard')
    }

    return <>
        <>
            <div className="container " >
                
                <div className="row">
                    {/* Article main content */}
                    <article className="col-xs-12 maincontent">
                        <header className="page-header">
                            <h1 className="page-title">Sign in</h1>
                        </header>
                        <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2  custom-margin-left">
                            <div className="panel panel-default">
                                <div className="panel-body">
                                    <h3 className="thin text-center">Sign in to your account</h3>
                                   
                                    <hr />
                                    <form>
                                        <div className="top-margin">
                                            <label>
                                                Username/Email <span className="text-danger">*</span>
                                            </label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="top-margin">
                                            <label>
                                                Password <span className="text-danger">*</span>
                                            </label>
                                            <input type="password" className="form-control" />
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-lg-8">
                                                <b>
                                                    <a href="">Forgot password?</a>
                                                </b>
                                            </div>
                                            <div className="col-lg-4 text-right">
                                                <button className="btn btn-action" type="submit">
                                                    Sign in
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

    </>

}