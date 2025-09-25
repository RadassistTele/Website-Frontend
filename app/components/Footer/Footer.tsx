"use client";
import React from "react";
import Image from "next/image";
import styles from "./Footer.module.scss";

const socialLinks = [
  { name: "Twitter", url: "https://twitter.com", icon: "/icons/twitter.svg" },
  { name: "LinkedIn", url: "https://linkedin.com", icon: "/icons/linkedin.svg" },
  { name: "Facebook", url: "https://facebook.com", icon: "/icons/facebook.svg" },
];

const navLinks = [
  [
    { name: "Home", url: "/" },
    { name: "Services", url: "/#services" },
    { name: "Why Choose Us", url: "/#whychooseus" },
  ],
  [
    { name: "Contact", url: "/#contact" },
    { name: "About", url: "/#about" },
    { name: "Careers", url: "/#careers" },
  ],
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.left}>
          <div className={styles.logoWrap}>
            <Image src="/ImageAssets/RadAssist Logo.png" alt="RadAssist Logo" width={60} height={60} />
          </div>
          <div className={styles.socialLinks}>
            {socialLinks.map((link) => (
              <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer">
                <Image src={link.icon} alt={link.name} width={28} height={28} />
              </a>
            ))}
          </div>
        </div>
        <div className={styles.center}>
          <div className={styles.navColumns}>
            {navLinks.map((col, i) => (
              <ul key={i}>
                {col.map((link) => (
                  <li key={link.name}>
                    <a href={link.url}>{link.name}</a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.info}>
            <p>© {new Date().getFullYear()} RadAssist Teleradiology</p>
            <p>All rights reserved.</p>
            <p>info@radassist.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
