
// import { motion } from "framer-motion";
// import {
//   ArrowUpRight,
//   CheckCheck,
//   MessageCircle,
//   Users,
//   Zap,
//   Send,
//   Sparkles,
// } from "lucide-react";
// import "./ConnectStreamInAction.css";

// const actionItems = [
//   {
//     number: "01",
//     icon: Users,
//     label: "TEAM INBOX",
//     title: "Every conversation,",
//     highlight: "in one place.",
//     description:
//       "Bring customer messages together in a shared inbox. Give your team the context and clarity to respond faster and work better together.",
//     image:
//       "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1100&q=85",
//     imageAlt: "Business team collaborating around a laptop",
//   },
//   {
//     number: "02",
//     icon: Zap,
//     label: "WHATSAPP AUTOMATION",
//     title: "Make room for",
//     highlight: "meaningful work.",
//     description:
//       "Automate repetitive conversations, customer follow-ups and everyday tasks, so your team can focus on the interactions that matter.",
//     image:
//       "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1100&q=85",
//     imageAlt: "Team working together on digital business operations",
//   },
//   {
//     number: "03",
//     icon: Send,
//     label: "BROADCAST & CAMPAIGNS",
//     title: "Reach people with",
//     highlight: "the right message.",
//     description:
//       "Keep customers informed with organised campaigns, useful updates and timely communication through the channels they already use.",
//     image:
//       "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1100&q=85",
//     imageAlt: "Business professionals discussing a marketing strategy",
//   },
// ];

// function ConversationPreview() {
//   return (
//     <motion.div
//       className="action-chat-card"
//       initial={{ opacity: 0, y: 25 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.7 }}
//     >
//       <div className="action-chat-header">
//         <div className="action-chat-brand">
//           <div className="action-chat-avatar">
//             <MessageCircle size={20} />
//           </div>
//           <div>
//             <h4>ConnectStream Inbox</h4>
//             <span>
//               <i />
//               Team workspace
//             </span>
//           </div>
//         </div>

//         <span className="action-chat-menu">•••</span>
//       </div>

//       <div className="action-chat-body">
//         <div className="action-chat-date">TODAY</div>

//         <motion.div
//           className="action-message customer-message"
//           initial={{ opacity: 0, x: -12 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.3, duration: 0.5 }}
//         >
//           <span className="action-message-name">Customer</span>
//           Hi! I'd like to know more about your platform.
//           <span className="action-message-time">10:42 AM</span>
//         </motion.div>

//         <motion.div
//           className="action-message team-message"
//           initial={{ opacity: 0, x: 12 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.7, duration: 0.5 }}
//         >
//           <span className="action-message-name">ConnectStream Team</span>
//           Absolutely! We'd be happy to show you how it works.
//           <span className="action-message-time">
//             10:43 AM <CheckCheck size={13} />
//           </span>
//         </motion.div>

//         <motion.div
//           className="action-message customer-message"
//           initial={{ opacity: 0, x: -12 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 1.1, duration: 0.5 }}
//         >
//           <span className="action-message-name">Customer</span>
//           Can I schedule a product demo?
//           <span className="action-message-time">10:44 AM</span>
//         </motion.div>
//       </div>

//       <div className="action-chat-footer">
//         <span>Reply to customer...</span>
//         <div>
//           <ArrowUpRight size={17} />
//         </div>
//       </div>

//       <div className="action-chat-caption">
//         <Sparkles size={14} />
//         <span>Better conversations start here.</span>
//       </div>
//     </motion.div>
//   );
// }

// function ConnectStreamInAction() {
//   return (
//     <section className="connect-action-section" id="in-action">
//       <div className="container">
//         <motion.div
//           className="connect-action-heading"
//           initial={{ opacity: 0, y: 25 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <span className="section-eyebrow">CONNECTSTREAM IN ACTION</span>

//           <h2>
//             Better conversations.
//             <br />
//             <span>Better business.</span>
//           </h2>

//           <p>
//             From the first customer enquiry to long-term relationships,
//             bring every conversation closer to the people who matter.
//           </p>
//         </motion.div>

//         <div className="connect-action-intro">
//           <div className="connect-action-intro-copy">
//             <span className="action-kicker">ONE CONNECTED EXPERIENCE</span>
//             <h3>
//               Business communication,
//               <span> made more human.</span>
//             </h3>
//             <p>
//               Give your team a simpler way to manage conversations,
//               automate everyday work and build stronger customer
//               relationships.
//             </p>
//           </div>

//           <ConversationPreview />
//         </div>

//         <div className="connect-action-list">
//           {actionItems.map((item, index) => {
//             const Icon = item.icon;

//             return (
//               <motion.article
//                 className={`connect-action-item ${
//                   index % 2 !== 0 ? "action-reverse" : ""
//                 }`}
//                 key={item.number}
//                 initial={{ opacity: 0, y: 35 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.2 }}
//                 transition={{ duration: 0.65, delay: 0.1 }}
//               >
//                 <div className="connect-action-image-wrap">
//                   <img
//                     src={item.image}
//                     alt={item.imageAlt}
//                     loading="lazy"
//                   />
//                   <span className="connect-action-image-number">
//                     {item.number}
//                   </span>
//                 </div>

//                 <div className="connect-action-copy">
//                   <div className="connect-action-label">
//                     <Icon size={17} strokeWidth={1.8} />
//                     <span>{item.label}</span>
//                   </div>

//                   <h3>
//                     {item.title}
//                     <span>{item.highlight}</span>
//                   </h3>

//                   <p>{item.description}</p>

//                   <a href="#contact" className="connect-action-link">
//                     Explore what’s possible
//                     <ArrowUpRight size={17} />
//                   </a>
//                 </div>
//               </motion.article>
//             );
//           })}
//         </div>

//         <motion.div
//           className="connect-action-bottom"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <div>
//             <span>READY TO MAKE THE CONNECTION?</span>
//             <h3>Let's make every conversation count.</h3>
//           </div>

//           <a href="#contact" className="connect-action-cta">
//             Book a demo <ArrowUpRight size={18} />
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// export default ConnectStreamInAction;


import { motion } from "framer-motion";
import {
  ArrowUpRight,
  MessageCircle,
  Users,
  Zap,
  HeartHandshake,
} from "lucide-react";
import "./ConnectStreamInAction.css";

const journey = [
  {
    number: "01",
    icon: MessageCircle,
    title: "A customer reaches out.",
    description:
      "A question, an enquiry, a request. Every new conversation is a chance to make a good first impression.",
    detail: "THE FIRST HELLO",
  },
  {
    number: "02",
    icon: Users,
    title: "Your team takes over.",
    description:
      "Keep conversations organised, give your team the context they need, and make sure customers feel heard.",
    detail: "PEOPLE WORKING TOGETHER",
  },
  {
    number: "03",
    icon: Zap,
    title: "The little things move faster.",
    description:
      "Let automation help with repetitive interactions, timely follow-ups and the everyday work that keeps things moving.",
    detail: "SMARTER EVERYDAY WORK",
  },
  {
    number: "04",
    icon: HeartHandshake,
    title: "A better relationship grows.",
    description:
      "Stay connected with customers through thoughtful updates, relevant campaigns and conversations that matter.",
    detail: "BUILT ON CONNECTION",
  },
];

const imageReveal = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

function ConnectStreamInAction() {
  return (
    <section className="action-section" id="how-it-works">
      <div className="action-container">
        {/* Editorial introduction */}
        <motion.div
          className="action-intro"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={imageReveal}
        >
          <span className="action-eyebrow">
            <span className="action-eyebrow-line" />
            A CLOSER LOOK AT CONNECTSTREAM
          </span>

          <div className="action-intro-content">
            <h2>
              Behind every business,
              <br />
              there's a <span>conversation.</span>
            </h2>

            <p>
              And behind every meaningful conversation, there's an
              opportunity to connect, understand and grow. We bring the
              everyday parts of business communication together, so people
              can focus on the people they serve.
            </p>
          </div>
        </motion.div>

        {/* Photography-led editorial composition */}
        <div className="action-story">
          <motion.div
            className="action-photo-main"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={imageReveal}
          >
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85"
              alt="A small business team working together around a table"
              loading="lazy"
            />

            <div className="action-photo-caption">
              <span>01 / PEOPLE FIRST</span>
              <p>Good business starts with listening.</p>
            </div>
          </motion.div>

          <motion.div
            className="action-photo-side"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={imageReveal}
          >
            <img
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=85"
              alt="Colleagues sharing ideas and collaborating"
              loading="lazy"
            />

            <div className="action-photo-note">
              <span className="action-note-icon">
                <MessageCircle size={17} strokeWidth={1.8} />
              </span>
              <div>
                <strong>Every message matters.</strong>
                <span>Every customer has a story.</span>
              </div>
            </div>
          </motion.div>

          <div className="action-story-aside">
            <span className="action-aside-number">A BETTER WAY TO CONNECT</span>
            <p>
              Less time managing scattered conversations.
              More time building relationships that last.
            </p>
            <span className="action-aside-signature">
              That's the idea behind ConnectStream.
            </span>
          </div>
        </div>

        {/* Four-stage conversation journey */}
        <motion.div
          className="action-journey"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.14 },
            },
          }}
        >
          <div className="action-journey-heading">
            <div>
              <span className="action-eyebrow">
                <span className="action-eyebrow-line" />
                HOW IT COMES TOGETHER
              </span>
              <h3>
                One conversation
                <br />
                <span>at a time.</span>
              </h3>
            </div>

            <p>
              From the first hello to the next opportunity, here's how
              connected communication can make a difference to the way
              your business works.
            </p>
          </div>

          <div className="action-journey-list">
            {journey.map((item) => {
              const Icon = item.icon;

              return (
                <motion.article
                  className="action-journey-item"
                  key={item.number}
                  variants={imageReveal}
                >
                  <div className="action-journey-number">
                    {/* {item.number} */}
                  </div>

                  <div className="action-journey-icon">
                    <Icon size={21} strokeWidth={1.65} />
                  </div>

                  <div className="action-journey-copy">
                    <span className="action-journey-detail">
                      {item.detail}
                    </span>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>

                  <span className="action-journey-arrow">
                    <ArrowUpRight size={19} strokeWidth={1.6} />
                  </span>
                </motion.article>
              );
            })}
          </div>
        </motion.div>

        {/* Quiet editorial closing */}
        <motion.div
          className="action-closing"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={imageReveal}
        >
          <span className="action-closing-label">
            A THOUGHT THAT GUIDES US
          </span>

          <div className="action-closing-content">
            <h3>
              Technology should bring people closer.
              <span> Not make communication harder.</span>
            </h3>

            <div className="action-closing-bottom">
              <p>
                That's the thinking behind ConnectStream.
                Simple tools. Meaningful conversations.
                Better ways to grow together.
              </p>

              <a href="#contact" className="action-text-link">
                Let's build better conversations
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ConnectStreamInAction;