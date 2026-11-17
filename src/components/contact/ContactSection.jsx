import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import "./ContactSection.css";

const initialForm = {
  fullName: "",
  companyName: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

function ContactSection() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <motion.div
          className="contact-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">LET'S TALK</span>
          <h2>
            Ready to connect
            <br />
            <span>with your customers?</span>
          </h2>
          <p>
            Tell us a little about your business. Let's explore how
            ConnectStream can simplify your customer communication.
          </p>
        </motion.div>

        <div className="contact-layout">
          <motion.aside
            className="contact-info"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-info-content">
              <span className="contact-info-label">START A CONVERSATION</span>
              <h3>Let's make business communication simpler.</h3>
              <p>
                Request a demo and discover how connected conversations
                can support your team and customers.
              </p>

              <div className="contact-info-items">
                <div className="contact-info-item">
                  <div><MessageCircle size={19} /></div>
                  <span>WhatsApp-powered conversations</span>
                </div>
                <div className="contact-info-item">
                  <div><Mail size={19} /></div>
                  <span>Business enquiries and demo requests</span>
                </div>
                <div className="contact-info-item">
                  <div><Phone size={19} /></div>
                  <span>Speak with our team</span>
                </div>
              </div>
            </div>

            <div className="contact-info-decoration">
              <MessageCircle size={115} strokeWidth={0.7} />
            </div>
          </motion.aside>

          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-form-heading">
              <h3>Book your demo</h3>
              <p>Fill in your details and we'll take it from there.</p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form-row">
                <label>
                  Full name *
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Your full name"
                    value={form.fullName}
                    onChange={handleChange}
                    required
                  />
                </label>

                <label>
                  Company name *
                  <input
                    type="text"
                    name="companyName"
                    placeholder="Your company"
                    value={form.companyName}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>

              <div className="contact-form-row">
                <label>
                  Business email *
                  <input
                    type="email"
                    name="email"
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </label>

                <label>
                  Phone number *
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your contact number"
                    value={form.phone}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>

              <label>
                What are you interested in?
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                >
                  <option value="">Select an area</option>
                  <option value="Team Inbox">Team Inbox</option>
                  <option value="WhatsApp Automation">WhatsApp Automation</option>
                  <option value="Broadcast and Campaigns">Broadcast and Campaigns</option>
                  <option value="AI Intelligence">AI Intelligence</option>
                  <option value="Complete Platform">Complete Platform</option>
                  <option value="Other">Other</option>
                </select>
              </label>

              <label>
                Tell us about your requirements
                <textarea
                  name="message"
                  rows="4"
                  placeholder="What would you like to achieve with ConnectStream?"
                  value={form.message}
                  onChange={handleChange}
                />
              </label>

              <button type="submit" className="contact-submit">
                Request a Demo <ArrowUpRight size={18} />
              </button>

              {submitted && (
                <div className="contact-form-notice" role="status">
                  <CheckCircle2 size={18} />
                  <span>
                    Form validation successful. The form is not connected to
                    a submission service yet.
                  </span>
                </div>
              )}

              <p className="contact-form-note">
                * Required fields. Your details will only be submitted once
                a backend connection is configured.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;