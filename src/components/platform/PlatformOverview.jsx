// import { ArrowUpRight } from "lucide-react";
// import { Link } from "react-router-dom";
// import { featureCategories } from "../../data/features";
// import "./PlatformOverview.css";

// function PlatformOverview() {
//   return (
//     <section className="platform-section" id="platform">
//       <div className="container">
//         <div className="platform-heading">
//           <span className="section-eyebrow">
//             THE CONNECTSTREAM PLATFORM
//           </span>

//           <h2>
//             One platform for every
//             <span> customer conversation</span>
//           </h2>

//           <p>
//             WhatsApp is already where your customers are.
//             ConnectStream turns it into a powerful business tool
//             to answer customers, send campaigns, automate common
//             questions, take payments and measure results.
//           </p>
//         </div>

//         <div className="platform-pillars">
//           <div className="pillar-card">
//             <span className="pillar-number">01</span>
//             <h3>People already use it</h3>
//             <p>
//               Your customers are on WhatsApp every day.
//               Meet them where they already are.
//             </p>
//           </div>

//           <div className="pillar-card">
//             <span className="pillar-number">02</span>
//             <h3>Fast and personal</h3>
//             <p>
//               Messages feel like chatting with a friend.
//               Customers can reply quickly and naturally.
//             </p>
//           </div>

//           <div className="pillar-card">
//             <span className="pillar-number">03</span>
//             <h3>Official and secure</h3>
//             <p>
//               Built on the WhatsApp Business Platform,
//               the approved route for businesses.
//             </p>
//           </div>
//         </div>

//         <div className="product-catalogue-heading" id="features">
//           <div>
//             <span className="section-eyebrow">
//               EXPLORE THE PLATFORM
//             </span>
//             <h2>Everything your business needs</h2>
//             <p>
//               Explore the tools that help you manage every
//               stage of the customer conversation.
//             </p>
//           </div>
//         </div>

//         <div className="feature-category-list">
//           {featureCategories.map((category) => (
//             <div className="feature-category" key={category.id}>
//               <div className="category-heading">
//                 <h3>{category.title}</h3>
//                 <p>{category.description}</p>
//               </div>

//               <div className="feature-overview-grid">
//                 {category.features.map((feature) => (
//                   <Link
//                     to={`/features/${feature.slug}`}
//                     className="feature-overview-card"
//                     key={feature.slug}
//                   >
//                     <div className="feature-card-top">
//                       <span className="feature-card-number">
//                         {feature.number}
//                       </span>

//                       {feature.status && (
//                         <span className="feature-status">
//                           {feature.status}
//                         </span>
//                       )}
//                     </div>

//                     <h4>{feature.name}</h4>
//                     <p>{feature.description}</p>

//                     <span className="feature-card-link">
//                       Explore feature
//                       <ArrowUpRight size={17} />
//                     </span>
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default PlatformOverview;


// import { motion, useReducedMotion } from "framer-motion";
// import { ArrowUpRight, Check, Circle, Headphones, MessageCircle, Mic, Search, Send, ShoppingBag, Users, BarChart3, Zap, Phone, CreditCard, Bot, CalendarDays } from "lucide-react";
// import { Link } from "react-router-dom";
// import { featureCategories } from "../../data/features";
// import "./PlatformOverview.css";

// const showcaseContent = {
//   conversations: {
//     label: "CUSTOMER CONVERSATIONS",
//     title: "Every conversation. One shared workspace.",
//     description:
//       "Bring customer messages into one organised inbox. Give your team the context and tools to respond quickly, while your AI assistant helps handle everyday interactions.",
//     highlights: ["Shared team inbox", "Personal AI assistant", "Clear conversation ownership"],
//     visual: "inbox",
//   },
//   "automation-campaigns": {
//     label: "AUTOMATION & CAMPAIGNS",
//     title: "Make every message work smarter.",
//     description:
//       "Create customer journeys, send campaigns and automate repetitive conversations with tools designed to help your business stay connected.",
//     highlights: ["Automated chat journeys", "WhatsApp campaigns", "AI-powered responses"],
//     visual: "automation",
//   },
//   "commerce-voice": {
//     label: "COMMERCE & VOICE",
//     title: "Turn conversations into customer experiences.",
//     description:
//       "Show products, reward loyal customers, collect payments and connect with customers through WhatsApp voice calls.",
//     highlights: ["Product catalogue", "Payments and rewards", "WhatsApp voice calls"],
//     visual: "commerce",
//   },
//   "management-admin": {
//     label: "MANAGEMENT & ADMIN",
//     title: "Give your team the clarity to do more.",
//     description:
//       "Understand customer activity, organise your contacts, manage team access and monitor service quality from one place.",
//     highlights: ["Customer insights", "Team management", "Service supervision"],
//     visual: "management",
//   },
// };

// const showcaseOrder = [
//   "conversations",
//   "automation-campaigns",
//   "commerce-voice",
//   "management-admin",
// ];

// function InboxMockup() {
//   return (
//     <div className="mock-window inbox-window">
//       <div className="mock-topbar">
//         <div className="mock-brand"><span className="mock-brand-dot" /> ConnectStream</div>
//         <div className="mock-top-actions"><Circle size={8} /><span>Workspace</span></div>
//       </div>
//       <div className="inbox-layout">
//         <aside className="mock-sidebar">
//           <span className="mock-sidebar-active"><MessageCircle size={15} /> Inbox</span>
//           <span><Users size={15} /> Contacts</span>
//           <span><BarChart3 size={15} /> Reports</span>
//           <span><Zap size={15} /> Automation</span>
//         </aside>
//         <div className="inbox-list">
//           <div className="mock-panel-heading">Conversations <span>12</span></div>
//           <div className="mock-search"><Search size={12} /> Search conversations</div>
//           <div className="mock-conversation active">
//             <div className="mock-avatar avatar-green">AS</div>
//             <div><b>Alex Smith</b><small>Can you share the details?</small></div>
//             <time>10:42</time>
//           </div>
//           <div className="mock-conversation">
//             <div className="mock-avatar avatar-yellow">MJ</div>
//             <div><b>Maria Joseph</b><small>Thank you so much!</small></div>
//             <time>10:35</time>
//           </div>
//           <div className="mock-conversation">
//             <div className="mock-avatar avatar-blue">RK</div>
//             <div><b>Rahul Kumar</b><small>I'd like to know more</small></div>
//             <time>10:18</time>
//           </div>
//         </div>
//         <div className="inbox-chat">
//           <div className="chat-customer"><div className="mock-avatar avatar-green">AS</div><div><b>Alex Smith</b><small>Online</small></div></div>
//           <div className="chat-date">TODAY</div>
//           <div className="chat-bubble received">Hi! I'm interested in your service.</div>
//           <div className="chat-bubble sent">Hello Alex! Happy to help. What would you like to know?</div>
//           <div className="chat-bubble received">Can you share the details?</div>
//           <div className="chat-compose"><span>Type a message...</span><Send size={14} /></div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function AutomationMockup() {
//   return (
//     <div className="mock-window automation-window">
//       <div className="mock-topbar">
//         <div className="mock-brand"><span className="mock-brand-dot" /> Flow Builder</div>
//         <span className="mock-live"><span /> Draft workflow</span>
//       </div>
//       <div className="workflow-canvas">
//         <div className="workflow-node trigger-node">
//           <span className="workflow-icon"><MessageCircle size={17} /></span>
//           <div><small>TRIGGER</small><b>New WhatsApp message</b></div>
//           <Check size={15} className="workflow-check" />
//         </div>
//         <div className="workflow-connector"><span /></div>
//         <div className="workflow-node action-node">
//           <span className="workflow-icon"><Bot size={17} /></span>
//           <div><small>AI ACTION</small><b>Understand customer query</b></div>
//           <Check size={15} className="workflow-check" />
//         </div>
//         <div className="workflow-connector"><span /></div>
//         <div className="workflow-branch">
//           <div className="workflow-node branch-node">
//             <span className="workflow-icon"><Send size={16} /></span>
//             <div><small>IF INTERESTED</small><b>Send product details</b></div>
//           </div>
//           <div className="workflow-node branch-node second-branch">
//             <span className="workflow-icon"><Users size={16} /></span>
//             <div><small>NEEDS SUPPORT</small><b>Assign to team</b></div>
//           </div>
//         </div>
//         <div className="workflow-footer"><span className="workflow-footer-dot" /> Your workflow is ready to configure</div>
//       </div>
//     </div>
//   );
// }

// function CommerceMockup() {
//   return (
//     <div className="mock-window commerce-window">
//       <div className="mock-topbar">
//         <div className="mock-brand"><span className="mock-brand-dot" /> Store Catalogue</div>
//         <span className="mock-live"><span /> Preview</span>
//       </div>
//       <div className="commerce-content">
//         <div className="commerce-heading"><div><small>YOUR WHATSAPP STORE</small><h4>Explore our collection</h4></div><ShoppingBag size={20} /></div>
//         <div className="commerce-products">
//           <div className="commerce-product">
//             <div className="product-art product-art-one"><ShoppingBag size={32} /></div>
//             <b>Everyday Essentials</b><small>Product collection</small>
//             <span>View details <ArrowUpRight size={12} /></span>
//           </div>
//           <div className="commerce-product">
//             <div className="product-art product-art-two"><Zap size={32} /></div>
//             <b>Premium Collection</b><small>Featured products</small>
//             <span>View details <ArrowUpRight size={12} /></span>
//           </div>
//         </div>
//         <div className="commerce-bottom"><span><CreditCard size={15} /> Easy payment options</span><span><Phone size={15} /> Talk to our team</span></div>
//       </div>
//     </div>
//   );
// }

// function ManagementMockup() {
//   return (
//     <div className="mock-window management-window">
//       <div className="mock-topbar">
//         <div className="mock-brand"><span className="mock-brand-dot" /> Business Overview</div>
//         <span className="mock-date"><CalendarDays size={13} /> This month</span>
//       </div>
//       <div className="management-content">
//         <div className="management-heading"><div><small>YOUR WORKSPACE</small><h4>Performance overview</h4></div><span className="management-status">● Overview</span></div>
//         <div className="management-stats">
//           <div><small>CONVERSATIONS</small><b>1,248</b><span>Illustrative data</span></div>
//           <div><small>RESPONSE RATE</small><b>94.8%</b><span>Illustrative data</span></div>
//           <div><small>TEAM MEMBERS</small><b>08</b><span>Illustrative data</span></div>
//         </div>
//         <div className="management-chart">
//           <div className="chart-title"><b>Conversation activity</b><small>Illustrative data</small></div>
//           <div className="chart-bars">
//             {[34, 55, 43, 70, 50, 82, 62, 92, 68, 76, 56, 88].map((height, index) => (
//               <span key={index} style={{ height: `${height}%` }} />
//             ))}
//           </div>
//           <div className="chart-labels"><span>Week 1</span><span>Week 2</span><span>Week 3</span><span>Week 4</span></div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function ProductVisual({ type }) {
//   if (type === "inbox") return <InboxMockup />;
//   if (type === "automation") return <AutomationMockup />;
//   if (type === "commerce") return <CommerceMockup />;
//   return <ManagementMockup />;
// }

// function FeatureLinks({ features }) {
//   return (
//     <div className="showcase-feature-links">
//       {features.map((feature) => (
//         <Link to={`/features/${feature.slug}`} key={feature.slug} className="showcase-feature-link">
//           <span>{feature.number}</span>
//           {feature.name}
//           <ArrowUpRight size={14} />
//         </Link>
//       ))}
//     </div>
//   );
// }

// function PlatformOverview() {
//   const reduceMotion = useReducedMotion();

//   const reveal = {
//     hidden: { opacity: 0, y: reduceMotion ? 0 : 28 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
//   };

//   return (
//     <section className="platform-section" id="platform">
//       <div className="container">
//         <motion.div
//           className="platform-heading"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.25 }}
//           variants={reveal}
//         >
//           <span className="section-eyebrow">THE CONNECTSTREAM PLATFORM</span>
//           <h2>
//             One platform for every
//             <span> customer conversation</span>
//           </h2>
//           <p>
//             WhatsApp is already where your customers are.
//             ConnectStream turns it into a powerful business tool
//             to answer customers, send campaigns, automate common
//             questions, take payments and measure results.
//           </p>
//         </motion.div>

//         <motion.div
//           className="platform-pillars"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//           variants={reveal}
//         >
//           <div className="pillar-card">
//             <span className="pillar-number"></span>
//             <h3>People already use it</h3>
//             <p>Your customers are on WhatsApp every day. Meet them where they already are.</p>
//           </div>
//           <div className="pillar-card">
//             <span className="pillar-number"></span>
//             <h3>Fast and personal</h3>
//             <p>Messages feel like chatting with a friend. Customers can reply quickly and naturally.</p>
//           </div>
//           <div className="pillar-card">
//             <span className="pillar-number"></span>
//             <h3>Official and secure</h3>
//             <p>Built on the WhatsApp Business Platform, the approved route for businesses.</p>
//           </div>
//         </motion.div>

//         <motion.div
//           className="product-catalogue-heading"
//           id="features"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//           variants={reveal}
//         >
//           <span className="section-eyebrow">EXPLORE THE PLATFORM</span>
//           <h2>Everything your business needs</h2>
//           <p>Explore the tools that help you manage every stage of the customer conversation.</p>
//         </motion.div>

//         <div className="platform-showcases">
//           {showcaseOrder.map((categoryId, index) => {
//             const category = featureCategories.find((item) => item.id === categoryId);
//             const content = showcaseContent[categoryId];

//             if (!category || !content) return null;

//             return (
//               <motion.article
//                 className={`platform-showcase showcase-${index + 1}`}
//                 key={category.id}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true, amount: 0.16 }}
//                 variants={reveal}
//               >
//                 <div className={`showcase-visual showcase-visual-${content.visual}`}>
//                   <div className="showcase-visual-glow" />
//                   <ProductVisual type={content.visual} />

//                   {index === 0 && (
//                     <>
//                       <div className="floating-info-card floating-assignment">
//                         <span className="floating-card-icon"><Users size={16} /></span>
//                         <div><small>ASSIGNED TO</small><b>Customer Support</b></div>
//                         <span className="assignment-check"><Check size={12} /></span>
//                       </div>
//                       <div className="floating-info-card floating-assistant">
//                         <span className="assistant-sparkle"><Bot size={17} /></span>
//                         <div><small>AI ASSISTANT</small><b>Ready to help</b></div>
//                         <span className="assistant-pulse" />
//                       </div>
//                     </>
//                   )}

//                   {index === 1 && (
//                     <div className="floating-info-card floating-campaign">
//                       <span className="floating-card-icon"><Send size={16} /></span>
//                       <div><small>CAMPAIGN</small><b>Message ready to send</b></div>
//                       <span className="campaign-check"><Check size={12} /></span>
//                     </div>
//                   )}

//                   {index === 2 && (
//                     <div className="floating-info-card floating-loyalty">
//                       <span className="loyalty-star">✦</span>
//                       <div><small>LOYALTY REWARD</small><b>Points make customers smile</b></div>
//                     </div>
//                   )}

//                   {index === 3 && (
//                     <div className="floating-info-card floating-team">
//                       <span className="team-avatar-stack"><i>A</i><i>M</i><i>R</i></span>
//                       <div><small>YOUR TEAM</small><b>Everyone in sync</b></div>
//                     </div>
//                   )}
//                 </div>

//                 <div className="showcase-copy">
//                   <span className="section-eyebrow">{content.label}</span>
//                   <h3>{content.title}</h3>
//                   <p>{content.description}</p>

//                   <ul className="showcase-highlights">
//                     {content.highlights.map((highlight) => (
//                       <li key={highlight}><Check size={16} />{highlight}</li>
//                     ))}
//                   </ul>

//                   <div className="showcase-category-title">
//                     <span>{category.title}</span>
//                     <span>{category.features.length} FEATURES</span>
//                   </div>
//                   <FeatureLinks features={category.features} />
//                 </div>
//               </motion.article>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default PlatformOverview;


import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  MessageCircle,
  Zap,
  ShieldCheck,
  Search,
  Send,
  Paperclip,
  MoreHorizontal,
  Check,
  Users,
  Bot,
  BarChart3,
  ShoppingBag,
  Phone,
  CreditCard,
  CalendarDays,
  Sparkles,
  Workflow,
  Contact,
  Headphones,
} from "lucide-react";

import { Link } from "react-router-dom";
import { featureCategories } from "../../data/features";
import "./PlatformOverview.css";

const showcaseConfig = [
  {
    id: "conversations",
    eyebrow: "01 / CUSTOMER CONVERSATIONS",
    title: "Every conversation. One place.",
    description:
      "Give your team a shared space to manage customer conversations, respond faster and deliver a more personal experience.",
    highlights: ["Team Inbox", "Personal Assistant"],
    visual: "inbox",
    icon: MessageCircle,
  },
  {
    id: "automation-campaigns",
    eyebrow: "02 / AUTOMATION & CAMPAIGNS",
    title: "Make every interaction work harder.",
    description:
      "Automate repetitive tasks, launch targeted campaigns and use intelligent workflows to keep customers engaged.",
    highlights: ["Broadcast", "Templates", "Flows", "AI Intelligence"],
    visual: "automation",
    icon: Workflow,
  },
  {
    id: "commerce-voice",
    eyebrow: "03 / COMMERCE & VOICE",
    title: "Turn conversations into business.",
    description:
      "Bring product discovery, customer loyalty, payments and voice communication into the customer journey.",
    highlights: ["Products", "Loyalty Hub", "Payments", "Calls Hub"],
    visual: "commerce",
    icon: ShoppingBag,
  },
  {
    id: "management-admin",
    eyebrow: "04 / MANAGEMENT & ADMIN",
    title: "Stay in control as you grow.",
    description:
      "Understand performance, organise your contacts and manage your team with the tools your business needs.",
    highlights: ["Contacts", "Analytics", "Team", "Supervisor"],
    visual: "management",
    icon: BarChart3,
  },
];

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

function FeatureLinks({ categoryId }) {
  const category = featureCategories.find(
    (item) => item.id === categoryId
  );

  if (!category) return null;

  return (
    <div className="showcase-feature-links">
      {category.features.map((feature) => (
        <Link
          to={`/features/${feature.slug}`}
          className="showcase-feature-link"
          key={feature.slug}
        >
          <span className="showcase-feature-check">
            <Check size={13} />
          </span>

          <span>{feature.name}</span>

          {feature.status && (
            <span className={`showcase-feature-status ${feature.status.toLowerCase()}`}>
              {feature.status}
            </span>
          )}

          <ArrowUpRight size={15} className="showcase-link-arrow" />
        </Link>
      ))}
    </div>
  );
}

function InboxMockup() {
  return (
    <div className="mockup-window inbox-mockup">
      <div className="mockup-topbar">
        <div className="mockup-window-dots">
          <span />
          <span />
          <span />
        </div>
        <span className="mockup-window-title">ConnectStream Inbox</span>
        <MoreHorizontal size={18} />
      </div>

      <div className="inbox-layout">
        <aside className="inbox-sidebar">
          <div className="mockup-brand-mark">
            <MessageCircle size={17} />
          </div>

          <div className="inbox-sidebar-icon active">
            <MessageCircle size={17} />
          </div>
          <div className="inbox-sidebar-icon">
            <Users size={17} />
          </div>
          <div className="inbox-sidebar-icon">
            <BarChart3 size={17} />
          </div>
        </aside>

        <div className="inbox-list">
          <div className="mockup-section-heading">
            <strong>Conversations</strong>
            <span className="mockup-count">12</span>
          </div>

          <div className="mockup-search">
            <Search size={13} />
            <span>Search chats</span>
          </div>

          <div className="inbox-person active">
            <div className="mockup-avatar avatar-green">AM</div>
            <div className="inbox-person-info">
              <strong>Alex Morgan</strong>
              <span>Thank you for the details!</span>
            </div>
            <small>10:42</small>
          </div>

          <div className="inbox-person">
            <div className="mockup-avatar avatar-blue">SK</div>
            <div className="inbox-person-info">
              <strong>Sarah Khan</strong>
              <span>Can I see the catalogue?</span>
            </div>
            <small>10:28</small>
          </div>

          <div className="inbox-person">
            <div className="mockup-avatar avatar-orange">RJ</div>
            <div className="inbox-person-info">
              <strong>Ryan Joseph</strong>
              <span>That sounds great.</span>
            </div>
            <small>09:56</small>
          </div>

          <div className="inbox-person">
            <div className="mockup-avatar avatar-purple">MP</div>
            <div className="inbox-person-info">
              <strong>Mia Paul</strong>
              <span>When will it be delivered?</span>
            </div>
            <small>09:41</small>
          </div>
        </div>

        <div className="inbox-chat">
          <div className="inbox-chat-header">
            <div className="mockup-avatar avatar-green">AM</div>
            <div>
              <strong>Alex Morgan</strong>
              <span className="online-indicator">Online</span>
            </div>
            <MoreHorizontal size={18} />
          </div>

          <div className="inbox-messages">
            <div className="chat-date">TODAY</div>

            <div className="chat-bubble received">
              Hi! I wanted to know more about your products.
              <small>10:38</small>
            </div>

            <div className="chat-bubble sent">
              Hello Alex! Happy to help. What are you looking for?
              <small>10:40 <Check size={11} /></small>
            </div>

            <div className="chat-bubble received">
              Thank you for the details!
              <small>10:42</small>
            </div>
          </div>

          <div className="inbox-reply">
            <Paperclip size={15} />
            <span>Type a message...</span>
            <div className="inbox-send">
              <Send size={14} />
            </div>
          </div>
        </div>
      </div>

      <div className="floating-assignment">
        <div className="floating-assignment-icon">
          <Users size={17} />
        </div>
        <div>
          <strong>Conversation assigned</strong>
          <span>Riya Sharma · Support team</span>
        </div>
        <Check size={16} className="floating-success" />
      </div>
    </div>
  );
}

function AutomationMockup() {
  return (
    <div className="mockup-window automation-mockup">
      <div className="mockup-topbar">
        <div className="mockup-window-dots">
          <span />
          <span />
          <span />
        </div>
        <span className="mockup-window-title">Visual Workflow Builder</span>
        <span className="mockup-live-label">ACTIVE</span>
      </div>

      <div className="workflow-canvas">
        <div className="workflow-heading">
          <div>
            <span className="mockup-overline">AUTOMATION FLOW</span>
            <h4>Welcome new customers</h4>
          </div>
          <span className="workflow-status">
            <span /> Running
          </span>
        </div>

        <div className="workflow-steps">
          <div className="workflow-node trigger-node">
            <div className="workflow-node-icon">
              <MessageCircle size={18} />
            </div>
            <div>
              <small>TRIGGER</small>
              <strong>New WhatsApp message</strong>
              <span>When a customer messages</span>
            </div>
            <Check size={15} />
          </div>

          <div className="workflow-connector">
            <span />
          </div>

          <div className="workflow-node condition-node">
            <div className="workflow-node-icon">
              <Search size={18} />
            </div>
            <div>
              <small>CONDITION</small>
              <strong>Check customer status</strong>
              <span>New or existing customer</span>
            </div>
            <ArrowUpRight size={15} />
          </div>

          <div className="workflow-branches">
            <div className="workflow-branch">
              <span className="branch-label">NEW CUSTOMER</span>
              <div className="workflow-connector">
                <span />
              </div>
              <div className="workflow-node action-node">
                <div className="workflow-node-icon">
                  <Send size={17} />
                </div>
                <div>
                  <small>ACTION</small>
                  <strong>Send welcome message</strong>
                </div>
                <Check size={14} />
              </div>
            </div>

            <div className="workflow-branch">
              <span className="branch-label">EXISTING CUSTOMER</span>
              <div className="workflow-connector">
                <span />
              </div>
              <div className="workflow-node ai-node">
                <div className="workflow-node-icon">
                  <Bot size={17} />
                </div>
                <div>
                  <small>AI ASSISTANT</small>
                  <strong>Personalised reply</strong>
                </div>
                <Sparkles size={14} />
              </div>
            </div>
          </div>
        </div>

        <div className="workflow-footer">
          <span><Check size={13} /> All steps configured</span>
          <span>Last edited just now</span>
        </div>
      </div>

      <div className="floating-ai-card">
        <Sparkles size={17} />
        <div>
          <strong>AI-powered automation</strong>
          <span>Workflows that save time</span>
        </div>
      </div>
    </div>
  );
}

function CommerceMockup() {
  return (
    <div className="mockup-window commerce-mockup">
      <div className="mockup-topbar">
        <div className="mockup-window-dots">
          <span />
          <span />
          <span />
        </div>
        <span className="mockup-window-title">Commerce Dashboard</span>
        <ShoppingBag size={17} />
      </div>

      <div className="commerce-content">
        <div className="commerce-heading">
          <div>
            <span className="mockup-overline">YOUR STORE</span>
            <h4>Product catalogue</h4>
          </div>
          <span className="commerce-add-button">+ Add product</span>
        </div>

        <div className="commerce-summary">
          <div>
            <span>ORDERS TODAY</span>
            <strong>28</strong>
            <small>+12% this week</small>
          </div>
          <div>
            <span>REVENUE</span>
            <strong>₹24,850</strong>
            <small>+8% this week</small>
          </div>
        </div>

        <div className="commerce-products-heading">
          <strong>Featured products</strong>
          <span>View all <ArrowUpRight size={12} /></span>
        </div>

        <div className="commerce-products">
          <div className="commerce-product">
            <div className="product-art product-art-one">
              <ShoppingBag size={27} />
            </div>
            <div className="product-info">
              <strong>Everyday Tote</strong>
              <span>Accessories</span>
              <b>₹1,299</b>
            </div>
            <span className="product-availability">In stock</span>
          </div>

          <div className="commerce-product">
            <div className="product-art product-art-two">
              <Sparkles size={27} />
            </div>
            <div className="product-info">
              <strong>Glow Essentials</strong>
              <span>Skincare</span>
              <b>₹899</b>
            </div>
            <span className="product-availability">In stock</span>
          </div>

          <div className="commerce-product">
            <div className="product-art product-art-three">
              <CreditCard size={27} />
            </div>
            <div className="product-info">
              <strong>Gift Collection</strong>
              <span>Gift sets</span>
              <b>₹1,599</b>
            </div>
            <span className="product-availability">In stock</span>
          </div>
        </div>
      </div>

      <div className="floating-payment-card">
        <div className="payment-card-icon">
          <CreditCard size={17} />
        </div>
        <div>
          <strong>Payment received</strong>
          <span>Order #CS2048 · ₹1,299</span>
        </div>
        <Check size={16} className="floating-success" />
      </div>
    </div>
  );
}

function ManagementMockup() {
  return (
    <div className="mockup-window management-mockup">
      <div className="mockup-topbar">
        <div className="mockup-window-dots">
          <span />
          <span />
          <span />
        </div>
        <span className="mockup-window-title">Business Overview</span>
        <CalendarDays size={16} />
      </div>

      <div className="management-content">
        <div className="management-heading">
          <div>
            <span className="mockup-overline">PERFORMANCE OVERVIEW</span>
            <h4>Your business at a glance</h4>
          </div>
          <span className="management-period">Last 7 days</span>
        </div>

        <div className="management-stats">
          <div className="management-stat">
            <span>MESSAGES SENT</span>
            <strong>4,820</strong>
            <small>+12% this week</small>
          </div>
          <div className="management-stat">
            <span>DELIVERED</span>
            <strong>96.7%</strong>
            <small>Healthy</small>
          </div>
          <div className="management-stat">
            <span>REPLIES</span>
            <strong>1,134</strong>
            <small>+8% this week</small>
          </div>
        </div>

        <div className="management-chart-card">
          <div className="management-chart-heading">
            <strong>Conversations by day</strong>
            <span>Weekly activity</span>
          </div>

          <div className="management-chart">
            {[42, 65, 52, 82, 60, 94, 72].map((height, index) => (
              <div className="chart-column" key={index}>
                <div
                  className="chart-bar"
                  style={{ height: `${height}%` }}
                />
                <span>{["M", "T", "W", "T", "F", "S", "S"][index]}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="management-team-row">
          <div className="management-team-icon">
            <Users size={17} />
          </div>
          <div>
            <strong>Team performance</strong>
            <span>3 agents online · 12 active chats</span>
          </div>
          <ArrowUpRight size={17} />
        </div>
      </div>

      <div className="floating-team-card">
        <div className="team-card-avatars">
          <span>RS</span>
          <span>AK</span>
          <span>MP</span>
        </div>
        <div>
          <strong>Your team is connected</strong>
          <span>Performance at a glance</span>
        </div>
      </div>
    </div>
  );
}

function ShowcaseVisual({ type }) {
  switch (type) {
    case "inbox":
      return <InboxMockup />;
    case "automation":
      return <AutomationMockup />;
    case "commerce":
      return <CommerceMockup />;
    case "management":
      return <ManagementMockup />;
    default:
      return null;
  }
}

export default function PlatformOverview() {
  const reduceMotion = useReducedMotion();

  const animationProps = reduceMotion
    ? {}
    : {
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true, amount: 0.15 },
      variants: reveal,
    };

  return (
    <section className="platform-overview" id="platform">
      <div className="platform-container">

        {/* INTRODUCTION */}
        {/* <motion.div className="platform-intro" {...animationProps}>
          <div className="platform-intro-copy">
            <span className="platform-eyebrow">
              <span />
              ONE PLATFORM. MORE POSSIBILITIES.
            </span>

            <h2>
              Everything your business needs to
              <span> connect, engage and grow.</span>
            </h2>
          </div>

          <div className="platform-intro-description">
            <p>
              Bring customer conversations, automation, commerce and team
              management together in one WhatsApp Business platform.
            </p>

            <a href="#platform-showcases" className="platform-explore-link">
              Explore the platform
              <ArrowUpRight size={17} />
            </a>
          </div>
        </motion.div> */}

        {/* CONNECT / ENGAGE / TRUST */}
        {/* <motion.div
          className="platform-values"
          {...(reduceMotion
            ? {}
            : {
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: true, amount: 0.2 },
                variants: {
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.16 },
                  },
                },
              })}
        >
          <motion.div
            className="value-item"
            variants={reduceMotion ? undefined : reveal}
          >
            <div className="value-topline">
              <span className="value-number"></span>
              <span className="value-label">CONNECT</span>
              <MessageCircle size={23} />
            </div>
            <h3>People already use it</h3>
            <p>
              Your customers are on WhatsApp every day.
              Meet them where they already are.
            </p>
          </motion.div>

          <motion.div
            className="value-item"
            variants={reduceMotion ? undefined : reveal}
          >
            <div className="value-topline">
              <span className="value-number"></span>
              <span className="value-label">ENGAGE</span>
              <Zap size={23} />
            </div>
            <h3>Fast and personal</h3>
            <p>
              Messages feel like chatting with a friend.
              Customers can reply quickly and naturally.
            </p>
          </motion.div>

          <motion.div
            className="value-item"
            variants={reduceMotion ? undefined : reveal}
          >
            <div className="value-topline">
              <span className="value-number"></span>
              <span className="value-label">TRUST</span>
              <ShieldCheck size={23} />
            </div>
            <h3>Official and secure</h3>
            <p>
              Built on the WhatsApp Business Platform,
              the approved route for businesses.
            </p>
          </motion.div>
        </motion.div> */}


        {/* HUMAN-CENTRED PLATFORM INTRODUCTION */}
        <motion.section
          className="platform-human-intro"
          {...animationProps}
        >
          <div className="platform-human-heading">
            <span className="platform-eyebrow">
              <span />
              COMMUNICATION THAT FEELS HUMAN
            </span>

            <div className="platform-heading-layout">
              <h2>
                Everything your business needs to
                <br />
                <span>connect, engage and grow.</span>
              </h2>

              <div className="platform-heading-copy">
                <p>
                  Your customers aren't looking for another platform.
                  They're looking for answers, support and people who
                  understand them.
                </p>
                <a href="#platform-showcases" className="platform-explore-link">
                  Discover what becomes possible
                  <ArrowUpRight size={17} />
                </a>
              </div>
            </div>
          </div>

          <div className="platform-human-story">
            <motion.div
              className="platform-human-photo"
              initial={reduceMotion ? false : { opacity: 0, y: 25 }}
              whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
            >
              <img
                src="/assets/business.jpg"
                alt="A small business team working together"
                loading="lazy"
              />

              <div className="platform-photo-caption">
                <span>BUSINESS IS PERSONAL</span>
                <p>Behind every message, there's a person.</p>
              </div>
            </motion.div>

            <div className="platform-human-side">
              <motion.div
                className="platform-human-side-photo"
                initial={reduceMotion ? false : { opacity: 0, x: 22 }}
                whileInView={reduceMotion ? {} : { opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.75, delay: 0.12, ease: "easeOut" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=85"
                  alt="Colleagues collaborating and sharing ideas"
                  loading="lazy"
                />
              </motion.div>

              <motion.div
                className="platform-conversation"
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <div className="platform-conversation-header">
                  <div className="platform-conversation-avatar">
                    <MessageCircle size={18} />
                  </div>
                  <div>
                    <strong>A conversation that matters</strong>
                    <span>AN ILLUSTRATIVE CUSTOMER JOURNEY</span>
                  </div>
                  <span className="platform-online-dot" />
                </div>

                <div className="platform-chat-body">
                  <motion.div
                    className="platform-chat-message customer"
                    initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                    whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.3 }}
                  >
                    Hi! Is this product available?
                    <span>10:32 AM</span>
                  </motion.div>

                  <motion.div
                    className="platform-chat-message business"
                    initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                    whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.85 }}
                  >
                    Hello! Yes, we'd be happy to help.
                    <span>10:33 AM&nbsp; ✓✓</span>
                  </motion.div>

                  <motion.div
                    className="platform-chat-message customer"
                    initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                    whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 1.35 }}
                  >
                    That's great. Thank you!
                    <span>10:34 AM</span>
                  </motion.div>
                </div>

                <div className="platform-conversation-footer">
                  <span />
                  A simple conversation. A meaningful connection.
                </div>
              </motion.div>

              <div className="platform-human-note">
                <span className="platform-note-mark">“</span>
                <p>
                  Make technology work in the background,
                  so human connections can take the lead.
                </p>
              </div>
            </div>
          </div>

          <motion.div
            className="platform-values-new"
            {...(reduceMotion
              ? {}
              : {
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: true, amount: 0.2 },
                variants: {
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.16 },
                  },
                },
              })}
          >
            <div className="platform-values-heading">
              <span className="platform-eyebrow">
                <span />
                THE DIFFERENCE IS IN THE DETAILS
              </span>
              <p>
                One connected platform. Three important ways to make
                every customer interaction better.
              </p>
            </div>

            <div className="platform-value-list">
              <motion.article
                className="platform-value-item"
                variants={reduceMotion ? undefined : reveal}
              >
                <div className="platform-value-top">
                  <span></span>
                  <MessageCircle size={22} strokeWidth={1.7} />
                </div>
                <div>
                  <span className="platform-value-label">CONNECT</span>
                  <h3>People already use it.</h3>
                  <p>
                    Start conversations on WhatsApp, a channel
                    your customers already know and use.
                  </p>
                </div>
              </motion.article>

              <motion.article
                className="platform-value-item"
                variants={reduceMotion ? undefined : reveal}
              >
                <div className="platform-value-top">
                  <span></span>
                  <Zap size={22} strokeWidth={1.7} />
                </div>
                <div>
                  <span className="platform-value-label">ENGAGE</span>
                  <h3>Fast and personal.</h3>
                  <p>
                    Bring your team and automation together to
                    keep conversations moving naturally.
                  </p>
                </div>
              </motion.article>

              <motion.article
                className="platform-value-item"
                variants={reduceMotion ? undefined : reveal}
              >
                <div className="platform-value-top">
                  <span></span>
                  <ShieldCheck size={22} strokeWidth={1.7} />
                </div>
                <div>
                  <span className="platform-value-label">TRUST</span>
                  <h3>Official and secure.</h3>
                  <p>
                    Connect through the official WhatsApp Business
                    Platform and build customer relationships with confidence.
                  </p>
                </div>
              </motion.article>
            </div>
          </motion.div>
        </motion.section>


        {/* FEATURE SHOWCASES */}
        <div className="platform-showcases" id="platform-showcases">
          {showcaseConfig.map((showcase, index) => {
            const Icon = showcase.icon;
            const reverse = index % 2 !== 0;

            return (
              <motion.article
                className={`platform-showcase ${reverse ? "reverse" : ""}`}
                key={showcase.id}
                {...animationProps}
              >
                <div className="showcase-copy">
                  <span className="showcase-eyebrow">
                    {showcase.eyebrow}
                  </span>

                  <div className="showcase-heading-icon">
                    <Icon size={22} />
                  </div>

                  <h3>{showcase.title}</h3>
                  <p>{showcase.description}</p>

                  <FeatureLinks categoryId={showcase.id} />

                  <Link
                    to={`/features/${featureCategories
                      .find((category) => category.id === showcase.id)
                      ?.features?.[0]?.slug || ""}`}
                    className="showcase-discover-link"
                  >
                    Discover these features
                    <ArrowUpRight size={17} />
                  </Link>
                </div>

                <div className={`showcase-visual visual-${showcase.visual}`}>
                  <div className="showcase-visual-glow" />
                  <ShowcaseVisual type={showcase.visual} />
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* BOTTOM CTA */}
        <motion.div className="platform-bottom-cta" {...animationProps}>
          <div>
            <span>THE CONNECTSTREAM PLATFORM</span>
            <h3>One platform. Every conversation moving forward.</h3>
          </div>

          <Link to="/product-guide" className="platform-cta-button">
            Explore product guide
            <ArrowUpRight size={17} />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
