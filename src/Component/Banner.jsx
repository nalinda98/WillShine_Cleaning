"use client";
import React, { useEffect, useState } from "react";
import Threads from "./Threads";

const Banner = ({ title, path, pathName, path2, path2Name }) => {
  const [bgImage, setBgImage] = useState("/img/figure/breadcumba.png");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setBgImage("/img/figure/bcmobile.png");
      } else {
        setBgImage("/img/figure/image.jpg");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <section
        className="inner-page-banner bg-common"
        style={{
          width: "100%",
          height: "150px",
          backgroundColor: "#006df0", // light blue
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Threads animation in background */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0, // Behind the content
          }}
        >
          <Threads color={[1,1,1]} amplitude={5} distance={1.5} enableMouseInteraction={false} />
        </div>

        {/* Foreground content */}
        <div
          className="container"
          style={{
            position: "relative",
            zIndex: 1,
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div className="row w-100">
            <div className="col-12">
              <div className="breadcrumbs-area">
                <h1>{title}</h1>
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  {path && (
                    <li>
                      <a href={path}>&nbsp;{pathName}</a>
                    </li>
                  )}
                  {path2 && (
                    <li>
                      <a href={path2}>&nbsp;{path2Name}</a>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
