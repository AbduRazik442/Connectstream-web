import { motion } from "framer-motion";
import {
    ArrowUpRight,
    MessageCircle,
    Mail,
    Phone,
    ArrowRight,
} from "lucide-react";

import logo from "../../assets/logo.png";
import "./Footer.css";

function Footer() {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { label: "Home", href: "#home" },
        { label: "Platform", href: "#platform" },
        { label: "Features", href: "#features" },
        { label: "About Us", href: "#about" },
        { label: "Contact", href: "#contact" },
    ];

    const platformLinks = [
        { label: "Team Inbox", href: "#features" },
        { label: "Automation", href: "#features" },
        { label: "Broadcast", href: "#features" },
        { label: "AI Intelligence", href: "#features" },
        { label: "Analytics", href: "#features" },
    ];

    return (
        <footer className="footer">
            <div className="footer-top container">
                <motion.div
                    className="footer-cta"
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div>
                        <span className="footer-eyebrow">LET'S CONNECT</span>
                        <h2>
                            Ready to transform
                            <br />
                            your customer conversations?
                        </h2>
                        <p>
                            Bring your business communication together with ConnectStream.
                        </p>
                    </div>

                    <a href="#contact" className="footer-cta-button">
                        Book a Demo
                        <ArrowUpRight size={19} />
                    </a>
                </motion.div>

                <div className="footer-main">
                    <div className="footer-brand">
                        <a href="#home" className="footer-logo">
                            <img src={logo} alt="ConnectStream logo" />
                        </a>

                        <p>
                            Simplifying business communication through smarter,
                            seamless WhatsApp conversations.
                        </p>

                        <div className="footer-socials">
                            <a href="#contact" aria-label="Social media">
                                <MessageCircle size={19} />
                            </a>
                            <a href="#contact" aria-label="Social media">
                                <MessageCircle size={19} />
                            </a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <div className="footer-link-column">
                            <h3>Quick Links</h3>
                            {quickLinks.map((link) => (
                                <a key={link.label} href={link.href}>
                                    {link.label}
                                </a>
                            ))}
                        </div>

                        <div className="footer-link-column">
                            <h3>Platform</h3>
                            {platformLinks.map((link) => (
                                <a key={link.label} href={link.href}>
                                    {link.label}
                                </a>
                            ))}
                        </div>

                        <div className="footer-link-column footer-contact">
                            <h3>Get in Touch</h3>

                            <a href="#contact">
                                <Mail size={17} />
                                Contact our team
                            </a>

                            <a href="#contact">
                                <Phone size={17} />
                                Request a callback
                            </a>

                            <a href="#contact">
                                <MessageCircle size={17} />
                                Book a demo
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container footer-bottom-inner">
                    <p>
                        © {currentYear} ConnectStream. All rights reserved.
                    </p>

                    <a href="#home" className="back-to-top">
                        Back to top
                        <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;