import { motion } from "framer-motion";
import {
  MessageSquare,
  Mic,
  Megaphone,
  FileText,
  Workflow,
  Sparkles,
  ShoppingBag,
  Gift,
  CreditCard,
  Phone,
  Users,
  BarChart3,
  UserCog,
  Eye,
  Mail,
  Smartphone,
  ArrowUpRight,
} from "lucide-react";
import "./FeaturesSection.css";

const featureGroups = [
  {
    category: "CONVERSATIONS",
    description: "Keep customer conversations organised and personal.",
    features: [
      {
        icon: MessageSquare,
        name: "Team Inbox",
        description:
          "One shared inbox for every customer chat. Your team can see, assign and reply to conversations together.",
      },
      {
        icon: Mic,
        name: "Personal Assistant",
        description:
          "A WhatsApp assistant that works by voice or text to help with meetings, notes, reminders and document summaries.",
        featured: true,
      },
    ],
  },
  {
    category: "AUTOMATION & CAMPAIGNS",
    description: "Automate conversations and reach customers efficiently.",
    features: [
      {
        icon: Megaphone,
        name: "Broadcast",
        description:
          "Send campaigns and announcements to your opted-in customer list.",
      },
      {
        icon: FileText,
        name: "Templates",
        description:
          "Create reusable WhatsApp message templates for updates, reminders and offers.",
      },
      {
        icon: Workflow,
        name: "Flows",
        description:
          "Build automated chat journeys with buttons, menus and follow-up questions.",
      },
      {
        icon: Sparkles,
        name: "AI Intelligence",
        description:
          "Help customers with natural-language answers and hand over complex questions to your team.",
        status: "BETA",
      },
    ],
  },
  {
    category: "COMMERCE & VOICE",
    description: "Bring shopping, rewards, payments and calls into WhatsApp.",
    features: [
      {
        icon: ShoppingBag,
        name: "Products",
        description:
          "Share product photos, prices and descriptions directly in customer chats.",
      },
      {
        icon: Gift,
        name: "Loyalty Hub",
        description:
          "Reward repeat customers with points, balances and offers inside WhatsApp.",
        status: "NEW",
      },
      {
        icon: CreditCard,
        name: "Payments",
        description:
          "Send order summaries and payment buttons in WhatsApp, with payment confirmation.",
        status: "BETA",
      },
      {
        icon: Phone,
        name: "Calls Hub",
        description:
          "Let customers call your business over WhatsApp with a single tap.",
        status: "BETA",
      },
    ],
  },
  {
    category: "MANAGEMENT & ADMIN",
    description: "Give your team the tools to manage customers and performance.",
    features: [
      {
        icon: Users,
        name: "Contacts",
        description:
          "Store and search customer contacts, organise them with tags and groups, and manage campaign audiences.",
      },
      {
        icon: BarChart3,
        name: "Analytics",
        description:
          "Understand messages sent, delivery, replies, team response times and campaign performance.",
      },
      {
        icon: UserCog,
        name: "Team",
        description:
          "Add colleagues with individual logins and appropriate access levels.",
      },
      {
        icon: Eye,
        name: "Supervisor",
        description:
          "Monitor active chats, agent availability and waiting customers in a live team view.",
      },
    ],
  },
];

const upcomingChannels = [
  { icon: MessageSquare, name: "Instagram" },
  { icon: MessageSquare, name: "Facebook Messenger" },
  { icon: Smartphone, name: "RCS Messaging" },
  { icon: Mail, name: "Email" },
];

function FeaturesSection() {
  return (
    <section className="features-section" id="features">
      <div className="container">
        <motion.div
          className="features-intro"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">EXPLORE THE PLATFORM</span>
          <h2>
            Everything your business needs.
            <br />
            <span>All in one place.</span>
          </h2>
          <p>
            Explore the tools that help your business connect with customers,
            automate everyday work, manage commerce and understand performance.
          </p>
        </motion.div>

        <div className="feature-groups">
          {featureGroups.map((group, groupIndex) => (
            <div className="feature-group" key={group.category}>
              <motion.div
                className="feature-group-heading"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div>
                  <span className="feature-group-category">
                    {group.category}
                  </span>
                  <p>{group.description}</p>
                </div>
                <span className="feature-group-count">
                  {String(group.features.length).padStart(2, "0")} FEATURES
                </span>
              </motion.div>

              <div className="features-grid">
                {group.features.map((feature, index) => {
                  const Icon = feature.icon;

                  return (
                    <motion.article
                      className="feature-card"
                      key={feature.name}
                      initial={{ opacity: 0, y: 25 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{
                        duration: 0.45,
                        delay: index * 0.07 + groupIndex * 0.04,
                      }}
                    >
                      <div className="feature-card-top">
                        <div className="feature-card-icon">
                          <Icon size={23} strokeWidth={1.8} />
                        </div>

                        {feature.status && (
                          <span
                            className={`feature-status ${feature.status.toLowerCase()}`}
                          >
                            {feature.status}
                          </span>
                        )}
                      </div>

                      <h3>{feature.name}</h3>
                      <p>{feature.description}</p>
                      <span className="feature-card-bottom">
                        ConnectStream platform
                        <ArrowUpRight size={15} />
                      </span>
                    </motion.article>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <motion.div
          className="upcoming-section"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="upcoming-heading">
            <div>
              <span className="section-eyebrow">WHAT'S NEXT</span>
              <h3>More channels. One connected inbox.</h3>
              <p>
                ConnectStream is bringing more customer communication
                channels into the platform.
              </p>
            </div>
            <span className="coming-soon-label">COMING SOON</span>
          </div>

          <div className="upcoming-grid">
            {upcomingChannels.map((channel) => {
              const Icon = channel.icon;

              return (
                <div className="upcoming-channel" key={channel.name}>
                  <div className="upcoming-channel-icon">
                    <Icon size={22} />
                  </div>
                  <strong>{channel.name}</strong>
                  <span>Coming soon</span>
                </div>
              );
            })}
          </div>
        </motion.div>

        <div className="features-cta">
          <div>
            <h3>Ready to connect your conversations?</h3>
            <p>See how ConnectStream can support your business.</p>
          </div>
          <a href="#contact">
            Book a Demo <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;