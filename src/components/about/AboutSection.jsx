import { motion } from "framer-motion";
import {
  MessageCircle,
  ArrowUpRight,
  Zap,
  Heart,
  TrendingUp,
  Globe2,
  Target,
  Eye,
} from "lucide-react";
import "./AboutSection.css";

const brandValues = [
  {
    icon: Zap,
    title: "Simplicity",
    description: "Making WhatsApp integration effortless for every kind of business.",
  },
  {
    icon: Heart,
    title: "Human connection",
    description: "Helping teams create faster, more personal customer interactions.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description: "Bringing conversations and business progress together.",
  },
];

function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <motion.div
          className="about-top"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">GET TO KNOW US</span>
          <h2>
            Where business conversations
            <br />
            <span>grow into connections.</span>
          </h2>
          <p>
            Connect Stream brings teams and customers together in real time
            to engage, respond, build stronger connections and grow smarter,
            faster.
          </p>
        </motion.div>

        <div className="about-story-grid">
          <motion.div
            className="about-visual"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <div className="about-visual-orbit orbit-one" />
            <div className="about-visual-orbit orbit-two" />

            <div className="about-visual-content">
              <div className="about-chat-symbol">
                <MessageCircle size={48} strokeWidth={1.5} />
                <span />
              </div>

              <span className="about-visual-label">THE CONNECT STREAM IDEA</span>

              <h3>
                Conversations
                <br />
                that move
                <br />
                <span>business forward.</span>
              </h3>

              <div className="about-visual-bottom">
                <span>CONNECT</span>
                <span className="about-visual-line" />
                <span>GROW</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-story"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <span className="about-small-label">WHO WE ARE</span>

            <h3>Communication should feel simple.</h3>

            <p>
              We believe simplicity and speed should be at the heart of
              business communication. Connect Stream makes WhatsApp
              integration effortless for every kind of business, from small
              shops to scaling enterprises.
            </p>

            <p>
              By bringing customer conversations and useful business tools
              together, we help teams meet customers on a platform they
              already know and use.
            </p>

            <a href="#contact" className="about-link">
              Let's connect <ArrowUpRight size={17} />
            </a>
          </motion.div>
        </div>

        <div className="about-purpose-grid">
          <motion.article
            className="purpose-row mission-row"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <div className="purpose-side">
              <Target className="purpose-icon" size={20} strokeWidth={1.8} />
              <span className="purpose-label">OUR MISSION</span>
            </div>

            <div className="purpose-content">
              <h3>
                Making business communication
                <span> simpler, faster and more human.</span>
              </h3>
              <p>
                To simplify business communication through seamless WhatsApp
                integration making customer interactions faster, smarter, and
                more human.
              </p>
            </div>

            {/* <span className="purpose-mark">Mission</span> */}
          </motion.article>

          <motion.article
            className="purpose-row vision-row"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.12 }}
          >
            <div className="purpose-side">
              <Eye className="purpose-icon" size={20} strokeWidth={1.8} />
              <span className="purpose-label">OUR VISION</span>
            </div>

            <div className="purpose-content">
              <h3>
                A world where every business
                <span> has a voice and a connection.</span>
              </h3>
              <p>
                A world where every business, regardless of size, can
                communicate with customers easily, in real time, on the
                platforms people already use and love.
              </p>
            </div>

            {/* <span className="purpose-mark">Vision</span> */}
          </motion.article>
        </div>

        <div className="about-values">
          <div className="about-values-heading">
            <div>
              <span className="section-eyebrow">WHAT GUIDES US</span>
              <h3>Built around what matters.</h3>
            </div>
            <Globe2 size={34} strokeWidth={1.4} />
          </div>

          <div className="about-values-grid">
            {brandValues.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.div
                  className="about-value"
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.1 }}
                >
                  <div className="about-value-icon">
                    <Icon size={21} />
                  </div>
                  <h4>{value.title}</h4>
                  <p>{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;