import React from "react";
import { Select, Input, Button, DatePicker, TimePicker, Form } from "antd";
import { CalendarOutlined, ClockCircleOutlined } from "@ant-design/icons";

const { Option } = Select;
const { TextArea } = Input;

const Estimate = () => {
  return (
    <div id="estimate-section">
      <section className="section-padding-md-2 section-bubble">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-6 col-12">
              <div className="about-box-layout1">
                <h2 className="item-title">
                  Our Commitment is to Deliver Exceptional Cleanliness
                </h2>
                <div className="item-subtitle">
                  We understand the importance of a pristine space, and we aim
                  to exceed your expectations every time.
                </div>
                <p>
                  At our company, we pride ourselves on providing services that
                  not only meet but surpass customer expectations. Whether it's
                  residential or commercial, we believe every cleaning should be
                  thorough and leave a lasting impact. With our team, you can
                  always count on spotless results.
                </p>
                <div className="list-item">
                  <ul>
                    <li>
                      <h3>Customer-Centered Approach</h3>
                      <p>
                        We put our clients first, ensuring satisfaction through
                        customized cleaning solutions tailored to your needs.
                      </p>
                    </li>
                    <li>
                      <h3>Our Promise: Quality and Consistency</h3>
                      <p>
                        We are committed to providing consistent, top-quality
                        cleaning services, with a focus on detail and
                        reliability.
                      </p>
                    </li>
                    <li>
                      <h3>Flexible Cleaning Schedules</h3>
                      <p>
                        Whether it's a one-time service or regular upkeep, we
                        offer flexible cleaning schedules to fit your lifestyle.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 col-12">
              <div className="about-box-layout2">
                <h3 className="item-title">
                  Get a Customized Cleaning Estimate
                </h3>
                <div className="contact-form-box" id="contact-form">
                  <Form layout="vertical">
                    <div className="row gutters-5">
                      <div className="col-12 form-group">
                        <Form.Item
                          name="propertyType"
                          rules={[
                            {
                              required: true,
                              message: "Please select service type",
                            },
                          ]}
                        >
                          <Select placeholder="Select Property Type">
                            <Option value="residential">Office Cleaning</Option>
                            <Option value="commercial">Stripping and Sealing</Option>
                            <Option value="plot">Carpet Cleaning</Option>
                            <Option value="apartment">Pressure Washing</Option>
                          </Select>
                        </Form.Item>
                      </div>
                      <div className="col-md-6 col-12 form-group">
                        <Form.Item
                          name="propertyCategory"
                          rules={[
                            {
                              required: true,
                              message: "Please select property category",
                            },
                          ]}
                        >
                          <Select placeholder="Type of Property">
                            <Option value="residential">Residential</Option>
                            <Option value="commercial">Commercial</Option>
                            <Option value="plot">Plot</Option>
                            <Option value="apartment">Apartment</Option>
                          </Select>
                        </Form.Item>
                      </div>
                      {/* <div className="col-md-6 col-12 form-group">
                        <Form.Item
                          name="size"
                          rules={[
                            { required: true, message: "Please select size" },
                          ]}
                        >
                          <Select placeholder="Approximate Size (Sq. Ft.)">
                            <Option value="400">400</Option>
                            <Option value="200">200</Option>
                            <Option value="600">600</Option>
                            <Option value="300">300</Option>
                          </Select>
                        </Form.Item>
                      </div> */}
                      {/* <div className="col-md-6 col-12 form-group">
                        <Form.Item
                          name="bedrooms"
                          rules={[
                            {
                              required: true,
                              message: "Please select number of bedrooms",
                            },
                          ]}
                        >
                          <Select placeholder="Number of Bedrooms">
                            <Option value="1">1</Option>
                            <Option value="2">2</Option>
                            <Option value="3">3</Option>
                            <Option value="4">4</Option>
                          </Select>
                        </Form.Item>
                      </div> */}
                      {/* <div className="col-md-6 col-12 form-group">
                        <Form.Item
                          name="bathrooms"
                          rules={[
                            {
                              required: true,
                              message: "Please select number of bathrooms",
                            },
                          ]}
                        >
                          <Select placeholder="Number of Bathrooms">
                            <Option value="1">1</Option>
                            <Option value="2">2</Option>
                            <Option value="3">3</Option>
                            <Option value="4">4</Option>
                          </Select>
                        </Form.Item>
                      </div> */}

                      <div className="col-md-6 col-12 form-group">
                        <Form.Item
                          name="frequency"
                          rules={[
                            {
                              required: true,
                              message: "Please select cleaning frequency",
                            },
                          ]}
                        >
                          <Select placeholder="Cleaning Frequency">
                            <Option value="one-time">One-time</Option>
                            <Option value="weekly">Weekly</Option>
                            <Option value="bi-weekly">Bi-weekly</Option>
                            <Option value="monthly">Monthly</Option>
                          </Select>
                        </Form.Item>
                      </div>
                      {/* <div className="col-md-6 col-12 form-group">
                        <Form.Item
                          name="zip"
                          rules={[
                            {
                              required: true,
                              message: "Please enter ZIP code",
                            },
                          ]}
                        >
                          <Input placeholder="ZIP Code" />
                        </Form.Item>
                      </div> */}
                      <div className="col-md-6 col-12 form-group">
                        <Form.Item
                          name="date"
                          rules={[
                            { required: true, message: "Please select date" },
                          ]}
                        >
                          <DatePicker
                            placeholder="Select Date"
                            suffixIcon={<CalendarOutlined />}
                            style={{ width: "100%" }}
                          />
                        </Form.Item>
                      </div>
                      <div className="col-md-6 col-12 form-group">
                        <Form.Item
                          name="time"
                          rules={[
                            { required: true, message: "Please select time" },
                          ]}
                        >
                          <TimePicker
                            format="HH"
                            placeholder="Select Time"
                            suffixIcon={<ClockCircleOutlined />}
                            style={{ width: "100%" }}
                          />
                        </Form.Item>
                      </div>
                      <div className="col-md-6 col-12 form-group">
                        <Form.Item
                          name="name"
                          rules={[
                            {
                              required: true,
                              message: "Please enter your name",
                            },
                          ]}
                        >
                          <Input placeholder="Full Name" />
                        </Form.Item>
                      </div>
                      <div className="col-md-6 col-12 form-group">
                        <Form.Item
                          name="phone"
                          rules={[
                            {
                              required: true,
                              message: "Please enter your phone number",
                            },
                          ]}
                        >
                          <Input placeholder="Phone Number" />
                        </Form.Item>
                      </div>
                      <div className="col-12 form-group">
                        <Form.Item
                          name="email"
                          rules={[
                            {
                              required: true,
                              message: "Please enter your email",
                            },
                            {
                              type: "email",
                              message: "Please enter a valid email",
                            },
                          ]}
                        >
                          <Input placeholder="E-mail Address" />
                        </Form.Item>
                      </div>
                      <div className="col-12 form-group mg-b-20">
                        <Form.Item
                          name="message"
                          rules={[
                            {
                              required: true,
                              message: "Please enter additional details",
                            },
                          ]}
                        >
                          <TextArea placeholder="Additional Details" rows={4} />
                        </Form.Item>
                      </div>
                      <div className="col-12 form-group">
                        <Form.Item>
                          <Button
                            type="primary"
                            htmlType="submit"
                            className="fw-btn-fill bg-accent text-primarytext"
                            style={{ width: "100%" }}
                          >
                            Get My Estimate
                          </Button>
                        </Form.Item>
                      </div>
                    </div>
                  </Form>
                  <div className="form-response" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Estimate;
