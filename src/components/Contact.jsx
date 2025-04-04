import { createElement, useRef } from "react";
import { content } from "../Content";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

// Initialize EmailJS
emailjs.init("E6XN4ywEqbVjByHkb");

const Contact = () => {
  const { Contact } = content;
  const form = useRef();

  // Sending Email
  const sendEmail = (e) => {
    e.preventDefault();

    // Show loading toast
    const loadingToast = toast.loading("Sending message...");

    // Add current timestamp
    const formData = new FormData(form.current);
    const senderName = formData.get('from_name');
    const senderEmail = formData.get('user_email');
    const message = formData.get('message');
    const currentTime = new Date().toLocaleString('en-US', {
      dateStyle: 'medium',
      timeStyle: 'short'
    });

    // Log form data for debugging
    console.log('Form Data:', {
      name: senderName,
      email: senderEmail,
      message: message
    });

    const templateParams = {
      name: senderName,
      email: senderEmail,
      message: message,
      date: currentTime,
      // Additional parameters for template
      from_name: senderName,
      reply_to: senderEmail,
      subject: `New message from ${senderName}`
    };

    emailjs
      .send(
        'service_c7ddirg',
        'template_gecpmet',
        templateParams,
        'E6XN4ywEqbVjByHkb'
      )
      .then(
        (result) => {
          toast.dismiss(loadingToast);
          console.log(result.text);
          form.current.reset();
          toast.success("Message sent successfully!");
        },
        (error) => {
          toast.dismiss(loadingToast);
          console.log(error.text);
          toast.error("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section className="bg-dark_primary text-white" id="contact">
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#333',
            color: '#fff',
          },
          success: {
            style: {
              background: 'green',
            },
          },
          error: {
            style: {
              background: 'red',
            },
          },
        }}
      />
      <div className="md:container px-5 py-14">
        <h2 className="title !text-white" data-aos="fade-down">
          {Contact.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {Contact.subtitle}
        </h4>
        <br />
        <div className="flex gap-10 md:flex-row flex-col">
          <form
            ref={form}
            onSubmit={sendEmail}
            data-aos="fade-up"
            className="flex-1 flex flex-col gap-5"
          >
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              required
              className="border border-slate-600 p-3 rounded bg-transparent focus:border-white transition-colors text-white"
            />
            <input
              type="email"
              name="user_email"
              pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
              placeholder="Email Id"
              required
              className="border border-slate-600 p-3 rounded bg-transparent focus:border-white transition-colors text-white"
            />
            <textarea
              name="message"
              placeholder="Message"
              className="border border-slate-600 p-3 rounded h-44 bg-transparent focus:border-white transition-colors resize-none text-white"
              required
            ></textarea>
            <button
              type="submit"
              className="btn self-start bg-white text-dark_primary hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Submit
            </button>
          </form>
          <div className="flex-1 flex flex-col gap-5">
            {Contact.social_media.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 430}
                className="flex items-center gap-2"
              >
                <h4 className="text-white">{createElement(content.icon)}</h4>
                <a
                  className="font-Poppins hover:text-gray-300 transition-colors"
                  href={content.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {content.text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
