import { MessageCircle, Smartphone, Mail, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import "./ComingSoonChannels.css";

const channels = [
  {
    name: "Instagram",
    description:
      "Reply to Instagram messages and comments from the same Team Inbox you already use for WhatsApp.",
    icon: MessageCircle,
    className: "instagram"
  },
  {
    name: "Facebook Messenger",
    description:
      "Handle Facebook page messages alongside your WhatsApp chats, without switching apps.",
    icon: MessageCircle,
    className: "messenger"
  },
  {
    name: "RCS Messaging",
    description:
      "Send rich, interactive messages with images and buttons straight to customers' default messaging app.",
    icon: Smartphone,
    className: "rcs"
  },
  {
    name: "Email",
    description:
      "Bring email conversations into the same inbox so every customer message is in one place.",
    icon: Mail,
    className: "email"
  }
];

function ComingSoonChannels() {
  return (
    <section className="coming-soon-section" id="coming-soon">
      <div className="container">
        <motion.div
          className="coming-soon-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">WHAT IS NEXT</span>

          <h2>
            More channels are <span>on the way.</span>
          </h2>

          <p>
            Today, ConnectStream is built around WhatsApp. We are bringing
            more of the places your customers talk to you into the same
            platform.
          </p>
        </motion.div>

        <div className="coming-soon-grid">
          {channels.map((channel, index) => {
            const Icon = channel.icon;

            return (
              <motion.article
                className="coming-soon-card"
                key={channel.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <div className={`coming-soon-icon ${channel.className}`}>
                  <Icon size={25} strokeWidth={1.8} />
                </div>

                <span className="coming-soon-badge">COMING SOON</span>

                <h3>{channel.name}</h3>

                <p>{channel.description}</p>

                <div className="coming-soon-card-footer">
                  <span>Coming to one inbox</span>
                  <ArrowUpRight size={17} />
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          className="coming-soon-banner"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
        >
          <span className="coming-soon-banner-label">
            THE FUTURE OF CUSTOMER COMMUNICATION
          </span>

          <h3>One inbox. Every channel.</h3>

          <p>
            Soon your team will be able to answer WhatsApp, Instagram,
            Facebook, RCS and email customers from a single Team Inbox,
            with the same automation, analytics and reporting.
          </p>

          <div className="channel-pills">
            <span>WhatsApp</span>
            <span>Instagram</span>
            <span>Facebook</span>
            <span>RCS</span>
            <span>Email</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ComingSoonChannels;