import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const userValidation = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
  });

  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    let formData = {
      name: e.target[0].value,
      email: e.target[1].value,
    };

    console.log(formData);

    if (!formData.name || !formData.email) {
      toast.error("Name and email are required");
      return;
    }

    try {
      await userValidation.validate(formData, { abortEarly: false });
      console.log("Form is valid:", formData);

      await emailjs.sendForm(
        "service_7gxs5sf",
        "template_c24o00b",
        form.current,
        "DuOtFHeSDVRI9FibR"
      );
      toast.success("Send succefully!");
      console.log("SUCCESS!");
      console.log("message sent");
    } catch (validationError) {
      console.error("Validation error:", validationError.errors);
    }
  };

  return (
    <>
      <div className=" contact">
        <ToastContainer />

        <h4 className="text-dark text-center ">CONTACT</h4>
        <div className="line_contact text-center"></div>
        <p className="text-center contact-heading">"I will get back to u ASAP by submitting the form below"</p>
        <div
          className="contacts d-md-flex justify-content-around align-items-center"
          id="contact"
        >
          <div>
            <form ref={form} onSubmit={sendEmail}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1" className="fw-bold pb-2">Name<span className="text-danger">*</span> </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="user_name"
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="form-group py-3">
                <label htmlFor="exampleInputEmail1" className="fw-bold pb-2">E-mail<span className="text-danger">*</span> </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="user_email"
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1" className="fw-bold pb-2">Message</label>
                <textarea
                  name="message"
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Text Here....."
                ></textarea>
              </div>
              <button
                type="submit"
                value="Send"
                className="btn btn-primary my-3"
              >
                SUBMIT
              </button>
            </form>
          </div>
          <img
            className=" contact_shadow"
            src={"../.././images/blog-3.jpeg"}
            alt="React Image"
            data-aos="zoom-in"
          />
        </div>
      </div>
    </>
  );
};

export default Contact;
