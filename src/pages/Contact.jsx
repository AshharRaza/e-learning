import { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Example API call — change URL to your backend route
    try {
      const res = await fetch("http://localhost:3000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("Error sending message.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl w-full">
        
        {/* Contact Form */}
        <form
          
          className="bg-white shadow-lg rounded-xl p-6 flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            
            required
            className="border rounded-lg p-3 "
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            
            required
            className="border rounded-lg p-3 "
          />

          <textarea
            name="message"
            placeholder="Your Message"
            
            required
            rows="5"
            className="border rounded-lg p-3 "
          ></textarea>

          <button
            type="submit"
            className="bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-700 transition"
          >
            Send Message
          </button>

          {/* {status && <p className="text-center text-sm text-green-600"></p>} */}
        </form>

        {/* Contact Information */}
        <div className="bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-2">
            We’d love to hear from you! Reach out to us using the form, or
            through the details below.
          </p>
          <ul className="mt-4 space-y-2">
            <li>
              📧 <strong>Email:</strong> support@learnonline.com
            </li>
            <li>
              📞 <strong>Phone:</strong> +1 (555) 123-4567
            </li>
            <li>
              📍 <strong>Address:</strong> 123 Learning Street, Knowledge City, USA
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
