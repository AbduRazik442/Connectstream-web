import {
  ArrowUpRight,
  MessageCircle,
  Mic,
  Megaphone,
  Workflow,
  CreditCard,
  ChartNoAxesColumnIncreasing,
  Check,
  MessageSquare,
} from "lucide-react";

import { Link } from "react-router-dom";

import guidePortrait from "../../assets/guide-portrait.png";

import "./ProductGuidePage.css";

const guideFeatures = [
  {
    name: "Team Inbox",
    icon: MessageCircle,
    link: "/features/team-inbox",
    featured: true,
  },
  {
    name: "Personal Assistant",
    icon: Mic,
    link: "/features/personal-assistant",
  },
  {
    name: "Broadcast",
    icon: Megaphone,
    link: "/features/broadcast",
  },
  {
    name: "Flows",
    icon: Workflow,
    link: "/features/flows",
  },
  {
    name: "Payments",
    icon: CreditCard,
    link: "/features/payments",
  },
  {
    name: "Analytics",
    icon: ChartNoAxesColumnIncreasing,
    link: "/features/analytics",
  },
];

function ProductGuidePage() {
  return (
    <>
      
      <main className="product-guide-page">
        <section className="product-guide-hero">
          <div className="guide-background-circle guide-circle-one" />
          <div className="guide-background-circle guide-circle-two" />
          <div className="guide-dots" />

          <div className="container guide-container">
            <div className="guide-content">
              <div className="guide-eyebrow">
                <span />
                PRODUCT FEATURE GUIDE
              </div>

              <h1>
                WhatsApp
                <br />
                Business API
                <br />
                <span>made simple.</span>
              </h1>

              <p className="guide-description">
                Everything your business can do with the
                ConnectStream WhatsApp platform, explained
                in plain words with real-life examples.
              </p>

              <div className="guide-feature-pills">
                {guideFeatures.map((feature) => {
                  const Icon = feature.icon;

                  return (
                    <Link
                      to={feature.link}
                      className={`guide-feature-pill ${
                        feature.featured ? "featured" : ""
                      }`}
                      key={feature.name}
                    >
                      <Icon size={16} strokeWidth={2.2} />
                      <span>{feature.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="guide-visual">
              <div className="guide-visual-glow" />

              <div className="guide-portrait-card">
                <img
                  src={guidePortrait}
                  alt="Business customer using WhatsApp on her smartphone"
                />
              </div>

              <div className="guide-notification guide-notification-top">
                <div className="guide-whatsapp-icon">
                  <MessageCircle size={19} />
                </div>

                <div className="guide-notification-content">
                  <div className="guide-notification-heading">
                    <strong>Zayn Electronics</strong>
                    <span>2m</span>
                  </div>
                  <p>Your order #1042 is out for delivery!</p>
                </div>
              </div>

              <div className="guide-notification guide-notification-left">
                <div className="guide-whatsapp-icon">
                  <MessageCircle size={19} />
                </div>

                <div className="guide-notification-content">
                  <div className="guide-notification-heading">
                    <strong>Bloom Salon</strong>
                    <span>now</span>
                  </div>
                  <p>
                    Hi Meera, your appointment is confirmed
                    for 4 PM today.
                  </p>
                </div>
              </div>

              <div className="guide-delivery-badge">
                <Check size={15} />
                Message delivered
              </div>

              <div className="guide-avatar guide-avatar-one">
                <MessageSquare size={27} />
              </div>

              <div className="guide-avatar guide-avatar-two">
                <MessageCircle size={25} />
              </div>
            </div>
          </div>
        </section>
      </main>

    </>
  );
}

export default ProductGuidePage;