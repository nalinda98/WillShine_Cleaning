import Banner from "@/Component/Banner";
import ContactForm from "@/Component/ContactForm";
import FAQ from "@/Component/FAQ";
import PricingTable from "@/Component/PricingTable";
import RelatedBlogs from "@/Component/RelatedBlogs";
import React from "react";

const SingleService = () => {
  return (
    <div>
      <Banner
        title={"Office Cleaning Service"}
        path={"/service"}
        pathName={"Services"}
        path2={"/service/office-cleaning"}
        path2Name={"Office Cleaning"}
      />
      <section className="section-padding-12">
        <div className="container">
          <div className="row">
           
            <div className="col-lg-8 order-lg-1">
              <div className="single-service-box-layout1">
                <h2 className="service-title">Office Cleaning Service</h2>
                <p>
                  A clean and organized workspace can boost productivity, reduce
                  stress, and create a professional environment. But who has the
                  time for deep cleaning every day? The good news is, with a few
                  simple hacks, you can keep your office spotless without
                  breaking a sweat. Here are ten office cleaning hacks that will
                  transform your workspace overnight!
                </p>
                <div className="main-img">
                  <img
                    src="/img/service/officeClean.jpg"
                    alt="Kitchen Cleaning"
                  />
                </div>
                <div className="service-content">
                  <p>
                    1. <b>Declutter First, Clean Later:</b> Use a “three-box
                    method” (Keep, Recycle, Trash) and invest in desk
                    organizers.
                    <br />
                    2. <b>Use Microfiber Cloths for Dusting:</b> Lightly dampen
                    the cloth to capture more dust.
                    <br />
                    3. <b>Disinfect Your Keyboard and Mouse:</b> Cotton swabs
                    dipped in isopropyl alcohol work wonders.
                    <br />
                    4. <b>Freshen Up Office Air Naturally:</b> Add small plants
                    or place baking soda to absorb odors.
                    <br />
                    5. <b>Use Coffee Filters for Screen Cleaning:</b> Gently
                    wipe your monitor with a dry coffee filter.
                    <br />
                    6. <b>Keep Your Office Chair Clean:</b> Use a lint roller
                    and mild soap solution for fabric chairs.
                    <br />
                    7. <b>Organize Cables with Binder Clips:</b> Attach binder
                    clips to your desk to manage cables easily.
                    <br />
                    8. <b>Use Lemon for a Fresh-Smelling Office:</b> Lemon juice
                    mixed with water works as a natural surface cleaner.
                    <br />
                    9. <b>Clean Office Windows with Vinegar:</b> Mix vinegar and
                    water for a streak-free shine.
                    <br />
                    10. <b>Keep a Desk Cleaning Kit:</b> Include wipes,
                    microfiber cloths, mini brush, and hand sanitizer.
                  </p>
                  <div className="why-choose">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="media">
                          <div className="item-icon">
                            <i className="far fa-check-circle" />
                          </div>
                          <div className="media-body space-md">
                            <h3 className="item-title">
                              Customized Cleaning Plans
                            </h3>
                            <p>
                              Blossom Property Services tailors cleaning
                              schedules and tasks to your office's specific
                              needs, ensuring optimal results without
                              disruption.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="media">
                          <div className="item-icon">
                            <i className="far fa-check-circle" />
                          </div>
                          <div className="media-body space-md">
                            <h3 className="item-title">
                              Eco-Friendly Products
                            </h3>
                            <p>
                              We use safe, non-toxic, and eco-friendly cleaning
                              supplies, protecting both employees and the
                              environment while delivering excellent
                              cleanliness.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p>
                    While these office cleaning hacks can help maintain your
                    workspace daily, nothing beats a professional touch. Blossom
                    Property Services specializes in delivering expert office
                    cleaning solutions, offering a healthier, more productive
                    working environment with trained cleaning professionals.
                  </p>
                  <div className="service-more-content">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="item-img">
                          <img src="/img/service/service10.jpg" alt="thumb" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="item-content">
                          <h3 className="item-title">
                            Why Choose Blossom Property Services?
                          </h3>
                          <p>
                            Blossom Property Services stands out because we
                            specialize only in office cleaning. Our vision:
                            "Office Cleaning – It’s All We Do, and We Do It
                            Best!" Our dedication ensures your workspace shines.
                          </p>
                          <ul className="item-feature">
                            <li>Trained Cleaning Professionals</li>
                            <li>Affordable & Reliable Service</li>
                            <li>Flexible Scheduling</li>
                            <li>Eco-Friendly Cleaning Solutions</li>
                            <li>Guaranteed Customer Satisfaction</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <PricingTable
                    details={{
                      pack01: {
                        title: "Basic",
                        price: "$99",
                        unit: "+ GST Per Hour",
                        features: [
                          "Single-story building",
                          "Small warehouse or factory",
                          "Less than 20 employees",
                          "1–3 hours Estimated Time Required",
                        ],
                      },
                      pack02: {
                        title: "Standard",
                        price: "$199",
                        unit: "+ GST Per Hour",
                        features: [
                          "One or two-story building",
                          "warehouse and/or factory",
                          "Fewer than 200 employees",
                          "3–6 hours Estimated Time Required",
                        ],
                      },
                      pack03: {
                        title: "Premium",
                        price: "$299",
                        unit: "+ GST Per Hour",
                        features: [
                          "Multi-story building",
                          "with or without a warehouse and/or factory",
                          "Over 200 employees",
                          "6+ hours Estimated Time Required",
                        ],
                      },
                    }}
                  />
                  <FAQ />
                </div>
              </div>
            </div>
            <div className="col-lg-4 order-lg-2 sidebar-break-md sidebar-widget-area">
              <RelatedBlogs />
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleService;
