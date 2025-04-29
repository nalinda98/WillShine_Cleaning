"use client";
import React, { useEffect, useRef } from "react";

const faqs = [
  {
    question: "What types of businesses do you clean?",
    answer:
      "We clean all types of offices, including corporate buildings, medical offices, retail spaces, coworking areas, and more.",
  },
  {
    question: "Can you help with hygiene services and office supplies?",
    answer:
      "Of course! We’re not just about cleaning. We’ve teamed up with trusted partners who can look after your office hygiene needs like sanitary bins, mats, and kitchen towels. We can even help with keeping your tea, coffee, and kitchen supplies topped up — making office life a little easier for you.",
  },
  {
    question: "How often can you clean our office?",
    answer:
      "We offer flexible scheduling—daily, weekly, bi-weekly, or custom plans tailored to your needs.",
  },
  {
    question: "Do you bring your own cleaning supplies and equipment?",
    answer:
      "Yes, we come fully equipped with professional-grade tools and eco-friendly cleaning products.",
  },
  {
    question: "Are your cleaners insured and background-checked?",
    answer:
      "Absolutely. All our team members are fully insured, trained, and vetted for your peace of mind.",
  },
  {
    question: "Do you offer green or eco-friendly cleaning options?",
    answer:
      "Yes, we use environmentally friendly products upon request or as part of our standard service.",
  },
  {
    question: "How do I get a quote?",
    answer:
      "You can request a free quote through our website or give us a call for a quick estimate.",
  },
  {
    question: "Can we schedule cleanings after business hours?",
    answer:
      "Yes, we offer flexible hours, including evenings and weekends, to avoid disrupting your workday.",
  },
  {
    question: "What happens if we’re not satisfied with a cleaning?",
    answer:
      "Your satisfaction is our priority. If something’s not right, we’ll fix it—no questions asked.",
  },
  {
    question: "Is there a contract required?",
    answer:
      "We offer both contract and no-contract options depending on what works best for your business.",
  },
];

const FAQ = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const contentRefs = useRef([]);

  useEffect(() => {
    // Log which panel is active (optional debug)
    console.log("Active index:", selectedIndex);
  }, [selectedIndex]);

  const handleToggle = (i) => {
    setSelectedIndex((prevIndex) => (prevIndex === i ? -1 : i));
  };

  return (
    <div className="service-faq">
      <h3 className="item-title">Frequently Asked Questions (FAQs)</h3>
      <div className="faq-box">
        <div id="accordion" className="accordion">
          {faqs.map((faq, index) => (
            <div key={index} className="card">
              <div className="card-header" id={`heading${index}`}>
                <h5
                  className="heading-title"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleToggle(index)}
                >
                  {faq.question}
                </h5>
              </div>
              <div
                id={`collapse${index}`}
                ref={(el) => (contentRefs.current[index] = el)}
                className={`collapse-wrapper ${
                  index === selectedIndex ? "show" : ""
                }`}
                style={{
                  maxHeight:
                    index === selectedIndex
                      ? `${contentRefs.current[index]?.scrollHeight}px`
                      : "0px",
                  overflow: "hidden",
                  transition: "max-height 0.4s ease",
                }}
                aria-labelledby={`heading${index}`}
              >
                <div className="card-body">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
