"use client";

import Banner from "@/Component/Banner";
import RecentPost from "@/Component/RecentPost";
import React from "react";
import BlogPost from "../../../utils/BlogPost";

const SingleBlog = () => {
  const [currentPath, setCurrentPath] = React.useState("");
  const [item, setItem] = React.useState({});

  React.useEffect(() => {
    const path = window.location.pathname;
    setCurrentPath(path);
    BlogPost.map((item) => {
      if (item.path === path) {
        setItem(item);
        return item;
      }
    });
  }, []);
  return (
    <div>
      <Banner
        title={item.shortName}
        pathName={"Blog"}
        path={"/blog"}
        path2={item.path}
        path2Name={item.shortName}
      />
      <section className="section-padding-12">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="single-blog-box-layout1">
                <div className="main-img">
                  <img src={item.img} alt="blog" />
                </div>
                <div className="item-details">
                  <div className="item-date">
                    <i className="fas fa-calendar-alt" />
                    {item.date}
                  </div>
                  <h2>{item.title}</h2>
                  <div className="entry-meta">
                    <ul>
                      <li className="item-author">
                        <img src="/img/figure/author.png" alt="author" />
                        {item.author}
                      </li>
                    </ul>
                  </div>
                  <section id="office-cleaning-section" className="space-y-6">
                    {/* Intro */}
                    <h3 className="text-2xl font-bold">
                      Professional Carpet Cleaning: An Investment That Pays Off
                    </h3>
                    <p>
                      Many homeowners see carpet cleaning as just another
                      household expense. In reality, regular professional
                      cleaning protects your floors, your health, and your
                      wallet—delivering long‑term value well beyond the upfront
                      cost.
                    </p>

                    {/* Benefits List */}
                    <h4 className="text-xl font-semibold">
                      How Professional Cleaning Saves You Money
                    </h4>
                    <ul className="list-disc ml-5 space-y-2">
                      <li>
                        <strong>🧼 Extends Carpet Life:</strong> Abrasive dirt
                        acts like sandpaper on carpet fibres. Annual
                        professional cleans remove these particles, helping
                        carpets last <em>2–3× longer</em>.
                      </li>
                      <li>
                        <strong>
                          🚫 Prevents Permanent Stains &amp; Damage:
                        </strong>{" "}
                        Trained technicians treat spills correctly the{" "}
                        <em>first</em> time, saving you from costly patch
                        repairs or early replacement.
                      </li>
                      <li>
                        <strong>🌬️ Improves Indoor Air Quality:</strong> Deep
                        extraction eliminates allergens, pet dander, and dust
                        mites—potentially lowering medical bills for allergy and
                        asthma sufferers.
                      </li>
                      <li>
                        <strong>🌿 Reduces Risk of Mold &amp; Mildew:</strong>{" "}
                        Industrial‑grade suction leaves carpets dry in hours,
                        not days, preventing hidden mold growth and expensive
                        remediation.
                      </li>
                      <li>
                        <strong>⏱️ Saves You Time &amp; Effort:</strong> Skip
                        the rental unit, cleaning solutions, and steep learning
                        curve—Wilshine handles the job efficiently while you
                        focus on what matters most.
                      </li>
                      <li>
                        <strong>🏠 Boosts Property Value &amp; Appeal:</strong>{" "}
                        Fresh, clean carpets impress buyers and tenants, helping
                        your home sell or rent faster and for more.
                      </li>
                    </ul>

                    {/* Cost Comparison Table */}
                    <h4 className="text-xl font-semibold">
                      Cost & Lifespan Overview
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="min-w-full border border-gray-300 text-left text-sm">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="p-2 border">Carpet Maintenance</th>
                            <th className="p-2 border">Approx. Cost</th>
                            <th className="p-2 border">Lifespan Impact</th>
                            <th className="p-2 border">Long‑Term Savings</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="p-2 border">
                              Professional Cleaning (Annual)
                            </td>
                            <td className="p-2 border">$150–$500</td>
                            <td className="p-2 border">Adds 5–10 years</td>
                            <td className="p-2 border font-medium">High</td>
                          </tr>
                          <tr>
                            <td className="p-2 border">Carpet Replacement</td>
                            <td className="p-2 border">$1,500–$5,000</td>
                            <td className="p-2 border">Every 7–10 years*</td>
                            <td className="p-2 border">Costly</td>
                          </tr>
                          <tr>
                            <td className="p-2 border">
                              DIY Cleaning (Frequent)
                            </td>
                            <td className="p-2 border">$50–$100 per rental</td>
                            <td className="p-2 border">Minimal</td>
                            <td className="p-2 border">Risk of damage</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="text-xs italic">
                      *Without regular professional care
                    </p>

                    {/* DIY vs Professional Comparison */}
                    <h4 className="text-xl font-semibold">
                      DIY vs. Professional Deep Clean
                    </h4>
                    <p>
                      Rental machines work for quick spills, but they can’t
                      match the power, speed, and safety of a Wilshine deep
                      clean.
                    </p>
                    <div className="overflow-x-auto">
                      <table className="min-w-full border border-gray-300 text-left text-sm">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="p-2 border">Feature</th>
                            <th className="p-2 border">DIY</th>
                            <th className="p-2 border">Professional</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="p-2 border">Cleaning Power</td>
                            <td className="p-2 border">Low–Moderate</td>
                            <td className="p-2 border">High</td>
                          </tr>
                          <tr>
                            <td className="p-2 border">Dry Time</td>
                            <td className="p-2 border">6–24 h+</td>
                            <td className="p-2 border">2–6 h</td>
                          </tr>
                          <tr>
                            <td className="p-2 border">Stain Removal</td>
                            <td className="p-2 border">Inconsistent</td>
                            <td className="p-2 border">Effective</td>
                          </tr>
                          <tr>
                            <td className="p-2 border">Risk of Mold</td>
                            <td className="p-2 border">Higher</td>
                            <td className="p-2 border">Very Low</td>
                          </tr>
                          <tr>
                            <td className="p-2 border">Cost</td>
                            <td className="p-2 border">Lower up‑front</td>
                            <td className="p-2 border">
                              Better value long‑term
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    {/* Call to Action */}
                    <h4 className="text-xl font-semibold">
                      Ready to Protect Your Carpets—and Your Wallet?
                    </h4>
                    <p>
                      Skip the hassle of DIY and experience the Wilshine
                      difference. Contact us today to schedule your next deep
                      carpet clean and enjoy fresher carpets that last.
                    </p>
                    <p>
                      <strong>
                        For a quote, visit Wilshine Cleaning Services or call
                        0433 691 812.
                      </strong>
                    </p>
                  </section>
                </div>

                <div className="blog-social-area">
                  <div className="row">
                    <div className="d-flex">
                      <div className="single-post-social">
                        <h5 className="item-title">Share :</h5>
                        <ul>
                          <li>
                            <a
                              href={`https://www.facebook.com/sharer/sharer.php?u=https://wilshinecleaning.com.au${item.path}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="fab fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a
                              href={`https://www.facebook.com/sharer/sharer.php?u=https://wilshinecleaning.com.au${item.path}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a
                              href={`https://www.linkedin.com/shareArticle?mini=true&url=https://wilshinecleaning.com.au${item.path}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="fab fa-linkedin-in" />
                            </a>
                          </li>
                          <li>
                            <a
                              href={`https://pinterest.com/pin/create/button/?url=https://wilshinecleaning.com.au${item.path}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="fab fa-pinterest" />
                            </a>
                          </li>
                          <li>
                            <a
                              href={`https://vimeo.com/share?url=https://wilshinecleaning.com.au${item.path}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="fab fa-vimeo-v" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 sidebar-break-md sidebar-widget-area">
              <RecentPost />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleBlog;
