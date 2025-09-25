import React from "react";
import css from "./WhyChooseUs.module.scss";

const reasons = [
  {
    title: "Global Reach",
    description: "Delivering reliable radiology services to clients worldwide, ensuring accessibility and consistency everywhere."
  },
  {
    title: "Affordable Pricing",
    description: "Transparent, per-study pricing. Leveraging AI and cloud technology to keep solutions cost-effective."
  },
  {
    title: "Rapid Turnaround",
    description: "A dedicated team of radiologists available 24/7, providing fast, tailored reporting for every client."
  },
  {
    title: "Quality Focused",
    description: "Every report undergoes thorough review by our expert panel, guaranteeing accuracy and reliability."
  },
  {
    title: "Client-First Approach",
    description: "We listen, adapt, and build solutions around your needs, putting your values at the heart of our service."
  }
];

const WhyChooseUs = () => (
  <div className={css.whyChooseUsSection}>
    <h2 className={css.heading}>Why Choose Us?</h2>
    <div className={css.reasonsGrid}>
      {reasons.map((reason, idx) => (
        <div className={css.reasonCard} key={idx}>
          <h3>{reason.title}</h3>
          <p >{reason.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default WhyChooseUs;
