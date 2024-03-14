import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

export default function ContactMe() {
  const form = useRef();

  const [emailError, setEmailError] = useState(null);
  const [contactError, setContactError] = useState(null);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateContact = (contact) => {
    const regex = /^\d{10}$/; // Assuming 10 digit phone number
    return regex.test(contact);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const email = formData.get("email");
    const contact = formData.get("contact");

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    } else {
      setEmailError(null);
    }

    if (!validateContact(contact)) {
      setContactError("Please enter a valid 10 digit phone number");
      return;
    } else {
      setContactError(null);
    }

    emailjs
      .sendForm("service_1tyhp9g", "template_yo0bn8q", form.current, {
        publicKey: "edRWrCKJAcw8WuUe1",
      })
      .then(
        () => {
          toast.success("Email has been send successfully");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="Contact" className="contact--section">
      <div>
        <h1 className="capitalize md:text-5xl text-4xl font-bold text-gray-800/80 tracking-wide md:mb-4 mb-2">
          Contact Me
        </h1>
        <p className="text-base text-gray-700">
          Feel free to reach out to us using the form below.
        </p>
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="contact--form--container"
      >
        <div className="container">
          <label htmlFor="first_name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="first_name"
              id="first-name"
              required
            />
          </label>
          <label htmlFor="last_name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="last_name"
              id="last_name"
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              required
            />
          </label>
          <label htmlFor="contact" className="contact--label">
            <span className="text-md">Phone Number</span>
            <input
              type="tel"
              className={`contact--input text-md ${
                contactError ? "error" : ""
              }`}
              name="contact"
              id="contact"
              required
            />
            {contactError && (
              <span className="text-sm text-rose-400">{contactError}</span>
            )}
          </label>
        </div>
        <label htmlFor="choode-topic" className="contact--label">
          <span className="text-md">Choose a topic</span>
          <select
            id="choose-topic"
            name="subject"
            className="contact--input text-md"
          >
            <option>Select One...</option>
            <option>To Hire</option>
            <option>For Freelance</option>
            <option>Inquiry</option>
          </select>
        </label>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            required
            id="message"
            rows="8"
            placeholder="Type your message..."
            name="message"
          />
        </label>

        {/* <label htmlFor="checkboc" className="checkbox--label">
          <input type="checkbox" required name="checkbox" id="checkbox" />
          <span className="text-sm">I accept the terms</span>
        </label> */}

        <div>
          <button
            type="submit"
            value="send"
            className="btn btn-primary bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
