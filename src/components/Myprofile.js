import React from "react";
import { useParams } from "react-router-dom";

export default function Myprofile() {
    const { id } = useParams();

    return (
        <>
            <div className="profile">
                <h1 className="page-title">My Profile</h1>
                <br />
                <br />
                <div className="col-md-8">
                    <div className="card border-0">
                        <div className="card-body user-margin-left">
                            <div className="row">
                                <div className="col-sm-3">
                                    <h6 className="mb-0">First Name</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">Sneha</div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-3">
                                    <h6 className="mb-0">Last Name</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">Khandelwal</div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-3">
                                    <h6 className="mb-0">Email</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">snehakhandelwal9999@gmail.com</div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-3">
                                    <h6 className="mb-0">Phone No</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">8878012887</div>
                            </div>
                            <hr />
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}