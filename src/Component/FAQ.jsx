"use client";
import React, { useEffect, useRef } from "react";

const FAQ = ({
  faqs,
}) => {
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
