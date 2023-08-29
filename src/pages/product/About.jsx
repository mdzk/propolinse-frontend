import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <main className="main">
      <div className="container">{/* End .page-header */}</div>
      {/* End .container */}
      <div className="page-content pb-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-3 mb-lg-0">
              <h2 className="title">Our Vision</h2>
              {/* End .title */}
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In
                nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed
                pretium, ligula sollicitudin laoreet viverra, tortor libero
                sodales leo, eget blandit nunc tortor eu nibh.{" "}
              </p>
            </div>
            {/* End .col-lg-6 */}
            <div className="col-lg-6">
              <h2 className="title">Our Mission</h2>
              {/* End .title */}
              <p>
                Sed egestas, ante et vulputate volutpat, eros pede semper est,
                vitae luctus metus libero eu augue. Morbi purus libero,
                faucibus adipiscing, commodo quis, gravida id, est. Sed
                lectus. <br />
                Praesent elementum hendrerit tortor. Sed semper lorem at
                felis.{" "}
              </p>
            </div>
            {/* End .col-lg-6 */}
          </div>
          {/* End .row */}
          <div className="mb-5" />
          {/* End .mb-4 */}
        </div>
        {/* End .container */}

        <>
          <div className="about-testimonials bg-light-2 pt-6 pb-6">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-sm-6">
                  <div className="icon-box icon-box-sm  text-center">
                    <span className="icon-box-icon">
                      <i className="icon-puzzle-piece" />
                    </span>
                    <div className="icon-box-content">
                      <h3 className="icon-box-title">Design Quality</h3>
                      {/* End .icon-box-title */}
                      <p>
                        Sed egestas, ante et vulputate volutpat, eros pede
                        semper est, vitae luctus metus libero <br />
                        eu augue.
                      </p>
                    </div>
                    {/* End .icon-box-content */}
                  </div>
                  {/* End .icon-box */}
                </div>
                {/* End .col-lg-4 col-sm-6 */}
                <div className="col-lg-3 col-sm-6">
                  <div className="icon-box icon-box-sm  text-center">
                    <span className="icon-box-icon">
                      <i className="icon-puzzle-piece" />
                    </span>
                    <div className="icon-box-content">
                      <h3 className="icon-box-title">Design Quality</h3>
                      {/* End .icon-box-title */}
                      <p>
                        Sed egestas, ante et vulputate volutpat, eros pede
                        semper est, vitae luctus metus libero <br />
                        eu augue.
                      </p>
                    </div>
                    {/* End .icon-box-content */}
                  </div>
                  {/* End .icon-box */}
                </div>
                {/* End .col-lg-4 col-sm-6 */}
                <div className="col-lg-3 col-sm-6">
                  <div className="icon-box icon-box-sm text-center">
                    <span className="icon-box-icon">
                      <i className="icon-life-ring" />
                    </span>
                    <div className="icon-box-content">
                      <h3 className="icon-box-title">Professional Support</h3>
                      {/* End .icon-box-title */}
                      <p>
                        Praesent dapibus, neque id cursus faucibus, <br />
                        tortor neque egestas augue, eu vulputate <br />
                        magna eros eu erat.{" "}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-sm-6">
                  <div className="icon-box icon-box-sm text-center">
                    <span className="icon-box-icon">
                      <i className="icon-heart-o" />
                    </span>
                    <div className="icon-box-content">
                      <h3 className="icon-box-title">Made With Love</h3>
                      {/* End .icon-box-title */}
                      <p>
                        Pellentesque a diam sit amet mi ullamcorper <br />
                        vehicula. Nullam quis massa sit amet <br />
                        nibh viverra malesuada.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>

        <div className="mb-2" />
        <div className="about-testimonials bg-light-2 pt-6 pb-6">
          <div className="container">
            <h2 className="title text-center mb-3">
              What Customer Say About Us
            </h2>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
