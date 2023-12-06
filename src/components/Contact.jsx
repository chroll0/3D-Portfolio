import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  // State variables for form data, loading state, and validation
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [validation, setValidation] = useState({
    nameValidation: true,
    emailValidation: true,
    messageValidation: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form validation
    if (validateForm()) {
      setLoading(true);

      emailjs
        .send(
          "service_vpz8kyz",
          "template_ytzka2k",
          {
            from_name: form.name,
            to_name: "Saba",
            from_email: form.email,
            to_email: "sabantadze@gmail.com",
            message: form.message,
          },
          "2TtGBqA-PgDlPoqXW"
        )
        .then(
          () => {
            setLoading(false);
            toast.success("Message sent", { position: "bottom-right" });
            setForm({ name: "", email: "", message: "" });
          },
          (error) => {
            setLoading(false);
            console.error(error);
            toast.error("Something went wrong", { position: "bottom-right" });
          }
        );
    }
  };

  const validateForm = () => {
    const { name, email, message } = form;
    const nameValidation = name.trim().length > 2;
    const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const messageValidation = message.trim().length >= 10;

    setValidation({ nameValidation, emailValidation, messageValidation });

    return nameValidation && emailValidation && messageValidation;
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="font-medium text-white mb-4">Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
            {!validation.nameValidation && (
              <span className="text-secondary text-xs py-1 flex justify-end ">
                Please enter a valid name.
              </span>
            )}
          </label>
          <label className="flex flex-col">
            <span className="font-medium text-white mb-4">Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium "
            />
            {!validation.emailValidation && (
              <span className="text-secondary text-xs py-1 flex justify-end ">
                Please enter a valid email.
              </span>
            )}
          </label>
          <label className="flex flex-col">
            <span className="font-medium text-white mb-4">Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
            {!validation.messageValidation && (
              <span className="text-secondary text-xs py-1 flex justify-end ">
                Message too short.
              </span>
            )}
          </label>
          <button
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:shadow-xl capitalize"
            type="submit"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
      <ToastContainer
        position="bottom-right"
        hideProgressBar={true}
        autoClose={1000}
        theme="dark"
      />
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
