"use client";

import Banner from "../../Component/Banner";
import ContactForm from "@/Component/ContactForm";

const Contact = () => {
  return (
    <>
      <Banner
        title={"Contact Us"}
        path={"/contact"}
        pathName={"Contact"}
        path2={""}
        path2Name={""}
      />
      <section className="section-padding-12-10">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {/* Map and Contact Info */}
              <div className="contact-box-layout1">
                <div className="google-map-area">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.7876773206926!2d79.84965516585271!3d6.915969728264701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2590063a37d6f%3A0x58a1ca8eafe50533!2sBuildZone%20IT!5e0!3m2!1sen!2slk!4v1702493493184!5m2!1sen!2slk"
                    style={{ border: 0, width: "100%", height: "420px" }}
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="contact-info">
                  <div className="media media-none-lg media-none--sm">
                    <div className="item-icon">
                      <i className="flaticon-call-answer" />
                    </div>
                    <div className="media-body space-md">
                      <h4>Phone:</h4>
                      <ul>
                        <li>0433 691 812</li>
                      </ul>
                    </div>
                  </div>
                  <div className="media media-none-lg media-none--sm">
                    <div className="item-icon">
                      <i className="flaticon-message" />
                    </div>
                    <div className="media-body space-md">
                      <h4>E-mail:</h4>
                      <ul>
                        <li>info@blossom.com</li>
                      </ul>
                    </div>
                  </div>
                  <div className="media media-none-lg media-none--sm">
                    <div className="item-icon">
                      <i className="flaticon-maps-and-flags" />
                    </div>
                    <div className="media-body space-md">
                      <h4>Location:</h4>
                      <ul>
                        <li>51 Street, Newyork City, NYPD</li>
                        <li>18 Street, Newyork City, NYPD</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
