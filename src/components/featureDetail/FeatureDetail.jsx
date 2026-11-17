import { ArrowLeft, Check, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import "./FeatureDetail.css";
import PersonalAssistantHelpers from "./PersonalAssistantHelpers";

function TeamInboxMockup() {
    const chats = [
        {
            initials: "AN",
            name: "Anita Nair",
            message: "Is the blue one in stock?",
            time: "9:41",
            unread: "2",
        },
        {
            initials: "RK",
            name: "Rahul K.",
            message: "Thanks, got the invoice",
            time: "9:38",
            read: true,
        },
        {
            initials: "SM",
            name: "Sana M.",
            message: "Can I change my delivery sl…",
            time: "9:30",
            unread: "1",
        },
        {
            initials: "JT",
            name: "Joseph T.",
            message: "Please share the price list",
            time: "9:12",
            unread: "3",
        },
        {
            initials: "LP",
            name: "Leena P.",
            message: "Order #1042 received",
            time: "8:55",
            read: true,
        },
    ];

    return (
        <div className="team-inbox-mockup">
            <div className="mockup-window-bar">
                <span />
                <span />
                <span />
                <small>ConnectStream · Team Inbox</small>
            </div>

            <div className="mockup-inbox">
                <div className="mockup-sidebar">
                    <div className="mockup-brand">
                        <span className="mockup-brand-icon">
                            <MessageSquare size={17} />
                        </span>
                        <strong>Team Inbox</strong>
                    </div>

                    <div className="mockup-tabs">
                        <span className="active">All</span>
                        <span>Mine</span>
                        <span>Unassigned</span>
                    </div>

                    <div className="mockup-chat-list">
                        {chats.map((chat) => (
                            <div className="mockup-chat" key={chat.initials}>
                                <div className="mockup-avatar">
                                    {chat.initials}
                                </div>

                                <div className="mockup-chat-content">
                                    <strong>{chat.name}</strong>
                                    <p>{chat.message}</p>
                                </div>

                                <div className="mockup-chat-meta">
                                    <small>{chat.time}</small>
                                    {chat.unread && (
                                        <span className="mockup-unread">
                                            {chat.unread}
                                        </span>
                                    )}
                                    {chat.read && (
                                        <span className="mockup-read">✓✓</span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mockup-unread-summary">
                        <span className="unread-dot" />
                        6 unread messages
                    </div>
                </div>

                <div className="mockup-conversation">
                    <div className="mockup-conversation-header">
                        <div className="mockup-avatar">AN</div>
                        <div>
                            <strong>Anita Nair</strong>
                            <small>WhatsApp conversation</small>
                        </div>
                        <span className="mockup-open-label">Open</span>
                    </div>

                    <div className="mockup-message-area">
                        <span className="mockup-date">Today</span>

                        <div className="mockup-message received">
                            Hi, is the blue one in stock?
                        </div>

                        <div className="mockup-message sent">
                            Yes, it is available!
                        </div>

                        <div className="mockup-message received">
                            Great, thank you.
                        </div>
                    </div>

                    <div className="mockup-assignment">
                        <span className="assignment-icon">✓</span>
                        <div>
                            <strong>Assigned to Riya</strong>
                            <small>Sales team · just now</small>
                        </div>
                    </div>

                    <div className="mockup-compose">
                        <span>New message</span>
                        <span className="mockup-send">➤</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

function PersonalAssistantMockup() {
    return (
        <div className="assistant-phone">
            <div className="assistant-phone-top">
                <span>9:41</span>
                <span>● ● ●</span>
            </div>

            <div className="assistant-chat-header">
                <span className="assistant-chat-avatar">
                    <MessageSquare size={18} />
                </span>
                <div>
                    <strong>My Assistant</strong>
                    <small>online</small>
                </div>
            </div>

            <div className="assistant-chat-body">
                <div className="assistant-voice-message">
                    <span>▶</span>
                    <div className="assistant-audio-line" />
                    <small>0:08</small>
                </div>

                <div className="assistant-chat-bubble">
                    Got it. Meeting tomorrow, 10:00 AM. I will remind you at 9:00 and 9:45. Is this correct?
                    <small>9:41</small>
                </div>

                <div className="assistant-confirm-button">
                    Yes, confirm
                </div>

                <div className="assistant-chat-bubble assistant-reply">
                    Done. Meeting added to your calendar.
                    <small>9:42</small>
                </div>

                <div className="assistant-voice-message assistant-reply">
                    <span>▶</span>
                    <div className="assistant-audio-line" />
                    <small>0:24</small>
                </div>
            </div>

            <div className="assistant-phone-caption">
                <span>✓</span>
                Reminder · Meeting at 10:00 AM
            </div>
        </div>
    );
}

function AutomationMockup({ feature }) {
    const mockups = {
        Broadcast: {
            label: "Campaign sent",
            title: "Bloom Salon",
            message:
                "Weekend special: 20% off on all hair services. Tap to book your slot!",
            footer: "1,200 customers · one click",
            status: "Delivered 96% · 48 replies",
        },
        Templates: {
            label: "Approved",
            title: "Zayn Electronics",
            message:
                "Hi Anita, your order #1042 has been shipped and will reach you by Tuesday.",
            footer: "Template: order_shipped",
            status: "Category: Utility",
        },
        Flows: {
            label: "Flow builder",
            title: "Spice Garden",
            message:
                "Welcome to Spice Garden! How can we help you today?",
            footer: "Book a table  ·  View menu  ·  Talk to a person",
            status: "No coding needed",
        },
        "AI Intelligence": {
            label: "AI Assistant",
            title: "Urban Wear",
            message:
                "Yes! We deliver every day until 8 PM, including Sundays. Orders placed before 4 PM arrive the same day in your city.",
            footer: "Instant answer in under 2 seconds",
            status: "Complex questions can be handed to a team member",
        },
    };

    const item = mockups[feature.title];

    return (
        <div className="automation-mockup">
            <div className="automation-mockup-top">
                <span className="automation-dot" />
                <span>{item.label}</span>
                {feature.status === "BETA" && (
                    <span className="automation-beta">BETA</span>
                )}
            </div>

            <div className="automation-chat">
                <div className="automation-business">
                    <span className="automation-business-avatar">
                        {feature.title === "Flows" ? "S" : "U"}
                    </span>
                    <div>
                        <strong>{item.title}</strong>
                        <small>Business account</small>
                    </div>
                </div>

                <div className="automation-time">9:41</div>

                <div className="automation-message">
                    {item.message}
                </div>

                {feature.title === "Flows" && (
                    <div className="automation-flow-buttons">
                        <span>Book a table</span>
                        <span>View menu</span>
                        <span>Talk to a person</span>
                    </div>
                )}

                {feature.title === "Templates" && (
                    <div className="automation-template-variable">
                        {"Hi {{name}}, your order {{order_id}} has been shipped."}
                    </div>
                )}

                <div className="automation-mockup-footer">
                    <strong>{item.footer}</strong>
                    <small>{item.status}</small>
                </div>
            </div>
        </div>
    );
}

function CommerceMockup({ feature }) {
    if (feature.title === "Products") {
        return (
            <div className="commerce-mockup product-mockup">
                <div className="commerce-phone-header">
                    <span className="commerce-avatar">U</span>
                    <div>
                        <strong>Urban Wear</strong>
                        <small>Catalogue</small>
                    </div>
                    <span className="commerce-online">●</span>
                </div>

                <div className="commerce-phone-content">
                    <p className="mockup-caption">Popular this week</p>
                    <div className="product-mockup-grid">
                        <div className="product-mockup-item">
                            <div className="product-art shirt-art">👕</div>
                            <strong>Linen Shirt</strong>
                            <span>₹1,499</span>
                            <small>Add to cart</small>
                        </div>
                        <div className="product-mockup-item">
                            <div className="product-art bag-art">👜</div>
                            <strong>Canvas Tote</strong>
                            <span>₹799</span>
                            <small>Add to cart</small>
                        </div>
                        <div className="product-mockup-item">
                            <div className="product-art dress-art">👗</div>
                            <strong>Summer Dress</strong>
                            <span>₹1,899</span>
                            <small>Add to cart</small>
                        </div>
                        <div className="product-mockup-item">
                            <div className="product-art cap-art">🧢</div>
                            <strong>Cap</strong>
                            <span>₹499</span>
                            <small>Add to cart</small>
                        </div>
                    </div>
                    <div className="commerce-chat-bubble">
                        Is the Linen Shirt available in M?
                    </div>
                </div>
            </div>
        );
    }

    if (feature.title === "Loyalty Hub") {
        return (
            <div className="commerce-mockup loyalty-mockup">
                <div className="commerce-phone-header">
                    <span className="commerce-avatar">B</span>
                    <div>
                        <strong>Brew House Cafe</strong>
                        <small>Rewards</small>
                    </div>
                    <span className="commerce-online">●</span>
                </div>

                <div className="loyalty-message">
                    <p>Thanks for visiting Brew House, Meera!</p>
                    <p>You earned <strong>50 points</strong> today.</p>
                </div>

                <div className="loyalty-points-card">
                    <span>Your reward balance</span>
                    <strong>350 points</strong>
                    <div className="loyalty-progress">
                        <span />
                    </div>
                    <small>150 more points for a free coffee</small>
                    <button type="button">Redeem rewards</button>
                </div>

                <div className="loyalty-reward">
                    <span>🎁</span>
                    <div>
                        <strong>Reward unlocked!</strong>
                        <small>Free dessert on your next visit</small>
                    </div>
                </div>
            </div>
        );
    }

    if (feature.title === "Payments") {
        return (
            <div className="commerce-mockup payments-mockup">
                <div className="commerce-phone-header">
                    <span className="commerce-avatar">Z</span>
                    <div>
                        <strong>Zayn Electronics</strong>
                        <small>Business account</small>
                    </div>
                    <span className="commerce-online">●</span>
                </div>

                <div className="payment-message">
                    <p>Hi Anita, here is your order summary.</p>
                    <div className="payment-order">
                        <strong>Order #1042</strong>
                        <div><span>Earbuds</span><b>₹1,999</b></div>
                        <div><span>Delivery</span><b>₹49</b></div>
                        <div className="payment-total"><span>Total</span><b>₹2,048</b></div>
                    </div>
                    <button type="button">Pay now ₹2,048</button>
                </div>

                <div className="payment-success">
                    <span>✓</span>
                    <div>
                        <strong>Payment received</strong>
                        <small>₹2,048 from Anita Nair · Order #1042</small>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="commerce-mockup calls-mockup">
            <div className="calls-label">WHATSAPP VOICE CALL</div>
            <div className="calls-chat">
                <span className="commerce-avatar">S</span>
                <p>Hi! Need help with your appointment?</p>
                <button type="button">Call us on WhatsApp</button>
            </div>
            <div className="call-screen">
                <span className="call-avatar">S</span>
                <strong>Sunrise Dental Clinic</strong>
                <span className="call-duration">02:14</span>
                <div className="call-controls">
                    <span>⌕</span>
                    <span>◉</span>
                    <span className="call-end">☎</span>
                </div>
            </div>
            <p className="calls-note">✓ No phone bill for customers</p>
        </div>
    );
}

function ManagementMockup({ feature }) {
    if (feature.title === "Contacts") {
        return (
            <div className="management-mockup">
                <div className="management-mockup-heading">
                    <div>
                        <strong>Contacts</strong>
                        <small>All 2,480 contacts</small>
                    </div>
                    <span className="management-add">+ Add</span>
                </div>

                <div className="contact-tag-summary">
                    <span>New leads <b>64</b></span>
                    <span>VIP <b>128</b></span>
                    <span>Repeat <b>340</b></span>
                </div>

                {[
                    ["AN", "Anita Nair", "+91 99••• ••340", "New lead"],
                    ["RK", "Rahul Kumar", "+91 98••• ••521", "VIP"],
                    ["SM", "Sana Mohammed", "+91 90••• ••113", "Repeat"],
                    ["JT", "Joseph Thomas", "+974 55•• ••82", "VIP"],
                    ["LP", "Leena Paul", "+91 94••• ••076", "Repeat"]
                ].map((person) => (
                    <div className="contact-mockup-row" key={person[1]}>
                        <span className="contact-initials">{person[0]}</span>
                        <div className="contact-person">
                            <strong>{person[1]}</strong>
                            <small>{person[2]}</small>
                        </div>
                        <span className={`contact-tag ${person[3].toLowerCase().replace(" ", "-")}`}>
                            {person[3]}
                        </span>
                    </div>
                ))}

                <div className="contact-campaign-note">
                    <strong>Festival offers</strong>
                    <span>Opt-in contacts only · VIP group selected</span>
                </div>
            </div>
        );
    }

    if (feature.title === "Analytics") {
        return (
            <div className="management-mockup analytics-mockup">
                <div className="management-mockup-heading">
                    <div>
                        <strong>Analytics</strong>
                        <small>Campaign performance</small>
                    </div>
                    <span className="analytics-period">Last 7 days</span>
                </div>

                <div className="analytics-stat-grid">
                    <div>
                        <small>Messages sent</small>
                        <strong>4,820</strong>
                        <span>↑ 12% this week</span>
                    </div>
                    <div>
                        <small>Delivered</small>
                        <strong>96.7%</strong>
                        <span>Healthy</span>
                    </div>
                    <div>
                        <small>Replies</small>
                        <strong>1,134</strong>
                        <span>↑ 8% this week</span>
                    </div>
                </div>

                <div className="analytics-chart">
                    <strong>Conversations by day</strong>
                    <div className="analytics-bars">
                        {[38, 54, 44, 68, 52, 92, 62].map((height, index) => (
                            <div className="analytics-bar-column" key={index}>
                                <span style={{ height: `${height}%` }} />
                                <small>{["M", "T", "W", "T", "F", "S", "S"][index]}</small>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="analytics-insight">
                    <span>↗</span>
                    <div>
                        <strong>Best day: Saturday</strong>
                        <small>Average reply time: 1 min</small>
                    </div>
                </div>
            </div>
        );
    }

    if (feature.title === "Team") {
        return (
            <div className="management-mockup team-mockup">
                <div className="management-mockup-heading">
                    <div>
                        <strong>Team members (5)</strong>
                        <small>Manage access and departments</small>
                    </div>
                    <span className="management-add">+ Add member</span>
                </div>

                {[
                    ["CS", "You", "Business owner", "Owner"],
                    ["RS", "Riya Sharma", "Sales", "Admin"],
                    ["AJ", "Arun J.", "Support", "Agent"],
                    ["FK", "Fatima K.", "Support", "Agent"],
                    ["DM", "Dev M.", "Billing", "Agent"]
                ].map((person) => (
                    <div className="team-mockup-row" key={person[1]}>
                        <span className="contact-initials">{person[0]}</span>
                        <div className="contact-person">
                            <strong>{person[1]}</strong>
                            <small>{person[2]}</small>
                        </div>
                        <span className={`team-role ${person[3].toLowerCase()}`}>
                            {person[3]}
                        </span>
                    </div>
                ))}

                <div className="team-access-note">
                    <strong>Access levels</strong>
                    <span>Owner · Admin · Agent</span>
                </div>
            </div>
        );
    }

    return (
        <div className="management-mockup supervisor-mockup">
            <div className="management-mockup-heading">
                <div>
                    <strong>Supervisor</strong>
                    <small>Live team view</small>
                </div>
                <span className="supervisor-live">● LIVE</span>
            </div>

            <div className="supervisor-stat-grid">
                <div>
                    <small>Active chats</small>
                    <strong>12</strong>
                </div>
                <div>
                    <small>Agents online</small>
                    <strong>3/4</strong>
                </div>
            </div>

            <div className="supervisor-alert">
                <span>!</span>
                <div>
                    <strong>Waiting too long</strong>
                    <small>Sana M. has been waiting 12 minutes</small>
                </div>
            </div>

            {[
                ["RI", "Riya S.", "4 chats", "42 sec", "Online"],
                ["AR", "Arun J.", "6 chats", "1 min", "Online"],
                ["FA", "Fatima K.", "2 chats", "3 min", "Busy"],
                ["DE", "Dev M.", "0 chats", "—", "Away"]
            ].map((agent) => (
                <div className="supervisor-agent-row" key={agent[1]}>
                    <span className="contact-initials">{agent[0]}</span>
                    <div className="contact-person">
                        <strong>{agent[1]}</strong>
                        <small>{agent[2]} · Avg reply {agent[3]}</small>
                    </div>
                    <span className="supervisor-agent-status">{agent[4]}</span>
                </div>
            ))}

            <div className="supervisor-footer-note">
                Live team activity · Illustrative data
            </div>
        </div>
    );
}

function FeatureDetail({ feature }) {
    if (!feature) {
        return (
            <section className="feature-not-found">
                <h1>Feature not found</h1>
                <Link to="/">Return to homepage</Link>
            </section>
        );
    }

    return (
        <main className="feature-detail-page">
            <section className="feature-detail-hero">
                <div className="container">
                    <Link to="/" className="feature-back-link">
                        <ArrowLeft size={16} />
                        Back to platform
                    </Link>

                    <div className="feature-detail-heading">

                        <div className="feature-category-label-row">
                            <span className="feature-detail-category">
                                {feature.category}
                            </span>

                            {feature.status && (
                                <span className="feature-detail-status">
                                    {feature.status}
                                </span>
                            )}
                        </div>

                        <div className="feature-detail-title-row">
                            <span className="feature-detail-number">
                                {feature.number}
                            </span>
                            <h1>{feature.title}</h1>
                        </div>

                        <p>{feature.subtitle}</p>
                    </div>

                    <div className="feature-showcase">
                        <div className="feature-showcase-copy">
                            <span className="feature-small-label">WHAT IT IS</span>
                            <h2>{feature.title}</h2>
                            <p>{feature.whatItIs}</p>

                            <ul className="feature-capability-list">
                                {feature.capabilities.map((item) => (
                                    <li key={item}>
                                        <span className="capability-check">
                                            <Check size={14} />
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="feature-showcase-visual">
                            {feature.title === "Personal Assistant" ? (
                                <PersonalAssistantMockup />
                            ) : ["Broadcast", "Templates", "Flows", "AI Intelligence"].includes(
                                feature.title
                            ) ? (
                                <AutomationMockup feature={feature} />
                            ) : ["Products", "Loyalty Hub", "Payments", "Calls Hub"].includes(
                                feature.title
                            ) ? (
                                <CommerceMockup feature={feature} />
                            ) : ["Contacts", "Analytics", "Team", "Supervisor"].includes(
                                feature.title
                            ) ? (
                                <ManagementMockup feature={feature} />
                            ) : (
                                <TeamInboxMockup />
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <section className="feature-benefits-section">
                <div className="container">
                    <span className="feature-small-label">
                        HOW IT HELPS YOUR BUSINESS
                    </span>

                    <div className="feature-benefits-grid">
                        {feature.benefits.map((benefit, index) => (
                            <article className="feature-benefit-card" key={benefit.title}>
                                <span className="benefit-number">
                                    0{index + 1}
                                </span>
                                <h3>{benefit.title}</h3>
                                <p>{benefit.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="feature-example-section">
                <div className="container">
                    <div className="feature-example-panel">
                        <div className="example-icon">
                            <MessageSquare size={28} />
                        </div>

                        <div>
                            <span className="example-label">
                                {feature.example.heading}
                            </span>
                            <p>{feature.example.text}</p>
                        </div>
                    </div>

                    <p className="feature-disclaimer">
                        Screens and names shown are illustrative examples.
                    </p>
                </div>
            </section>
            {feature.title === "Personal Assistant" && (
                <PersonalAssistantHelpers />
            )}
        </main>
    );
}

export default FeatureDetail;