import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCheck,
  MessageCircle,
  Sparkles,
  ShoppingBag,
} from "lucide-react";

import "./HeroSection.css";

function HeroSection() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-bg-circle hero-circle-one" />
      <div className="hero-bg-circle hero-circle-two" />

      <div className="hero-container">

        {/* LEFT CONTENT */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-tag">
            <Sparkles size={15} />
            <span>Business communication, simplified</span>
          </div>

          <h1 className="hero-heading">
            WhatsApp Business API
            <br />
            <span>Made Simple.</span>
            <br />
            
          </h1>

          <p className="hero-description">
            ConnectStream brings your customer conversations,
            automation, campaigns and business tools together
            through WhatsApp. Respond faster, work smarter
            and build stronger customer relationships.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="hero-primary-btn">
              Start your setup now
              <ArrowUpRight size={18} />
            </a>

            <a href="#features" className="hero-secondary-btn">
              Explore Platform
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="hero-trust">
            <div className="hero-trust-icon">
              <CheckCheck size={18} />
            </div>
            <p>
              Built around the WhatsApp Business Platform
            </p>
          </div>
        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="hero-glow" />

          {/* Dashboard Card */}
          <motion.div
            className="hero-dashboard"
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="dashboard-header">
              <div>
                <span className="dashboard-label">CONNECTSTREAM</span>
                <h3>Team Inbox</h3>
              </div>

              <div className="online-status">
                <span />
                Online
              </div>
            </div>

            <div className="dashboard-stats">
              <div className="dashboard-stat">
                <span>Active chats</span>
                <strong>128</strong>
                <small>Across your team</small>
              </div>

              <div className="dashboard-stat">
                <span>Response rate</span>
                <strong>96.7%</strong>
                <small>Customer engagement</small>
              </div>
            </div>

            <div className="dashboard-divider" />

            <div className="dashboard-chat-heading">
              <h4>Recent conversations</h4>
              <span>View all</span>
            </div>

            <div className="chat-item">
              <div className="chat-avatar avatar-green">AN</div>
              <div className="chat-details">
                <strong>Anita Nair</strong>
                <p>Is the blue one available?</p>
              </div>
              <span className="chat-time">9:41</span>
            </div>

            <div className="chat-item">
              <div className="chat-avatar avatar-teal">RK</div>
              <div className="chat-details">
                <strong>Rahul Kumar</strong>
                <p>Thanks for the quick reply!</p>
              </div>
              <span className="chat-time">9:38</span>
            </div>

            <div className="chat-item">
              <div className="chat-avatar avatar-light">SM</div>
              <div className="chat-details">
                <strong>Sana Mohammed</strong>
                <p>Can I book an appointment?</p>
              </div>
              <span className="chat-time">9:30</span>
            </div>

            <div className="dashboard-footer">
              <span><CheckCheck size={14} /> Messages connected</span>
              <span>● All systems ready</span>
            </div>
          </motion.div>

          {/* Floating Notification */}
          <motion.div
            className="hero-floating-card notification-card"
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="floating-icon whatsapp-icon">
              <MessageCircle size={21} />
            </div>

            <div>
              <strong>New customer message</strong>
              <p>Your team can reply instantly</p>
            </div>
            <span className="notification-dot" />
          </motion.div>

          {/* Floating Automation Card */}
          <motion.div
            className="hero-floating-card automation-card"
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="floating-icon automation-icon">
              <ShoppingBag size={20} />
            </div>

            <div>
              <strong>Customer journey automated</strong>
              <p>From enquiry to conversion</p>
            </div>
          </motion.div>
        </motion.div>

      </div>

      <div className="hero-bottom">
        <span>CONNECT</span>
        <span className="hero-bottom-line" />
        <span>COMMUNICATE</span>
        <span className="hero-bottom-line" />
        <span>GROW</span>
      </div>
    </section>
  );
}

export default HeroSection;