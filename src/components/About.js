import React from "react"

export default function About() {
    return <div>
        <div className="container">
        
        <div className="row">
            {/* Article main content */}
            <article className="col-sm-8 maincontent about-margin-left" >
                <header className="page-header">
                    <h1 className="page-title">About us</h1>
                </header>
                <p>We’ve always been eager to provide the Indian people with best possible solutions when it comes to switching from a conventional energy grid to an eco-friendly one!</p>
                <h3>Range of Energy Sources</h3>
                <p>
                    <img
                        src="assets/images/mac.jpg"
                        alt=""
                        className="img-rounded pull-right"
                        width={300}
                    />{" "}
                  All the way from the solar-powered energy, the wind turbines, biofuel-powered energy generators and to geothermal alliterate energy, we are able to help you transfer from conventional energy supply to a green one!
                </p>
               
                <h3>Promoting the Green Energy</h3>
                <p>
                It does not take much of an effort to convince one of the pros the green energy has, with just so many eco-friendly, cost-efficient and energy-powerful alternate green energy sources available these days and so many scientific proofs as well.
                </p>
                <h3>Experience & Team</h3>
                <p>
                Our global platform is our strength! With all members of our crew having a combined experience of more than a few decades, as we talk about the industry, you can be sure that your project is handled well!
                </p>
                <h3>Affordable Fees</h3>
                <p>
                We combine the power of the systems and technologies designed by our team of scientists and engineers. All the while using the most advanced technologies available, so that we can deliver more stable and efficient energy projects.
                </p>
                
            </article>
            {/* /Article */}
          
        </div>
    </div>
    </div>
}