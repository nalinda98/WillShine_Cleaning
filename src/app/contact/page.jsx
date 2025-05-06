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
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
