import React from 'react';
import css from "@/app/components/Services/servies.module.scss";
import Image from 'next/image';

const serviceData = [
  {
    title: "CT Scan Analysis",
    image: "/ImageAssets/serviceImages/CtImage.jpg",
    description: "High-resolution CT scan interpretation for precise diagnostics."
  },
  {
    title: "MRI Insights",
    image: "/ImageAssets/serviceImages/MriImage.jpg",
    description: "Advanced MRI image analysis for detailed internal views."
  },
  {
    title: "X-Ray Review",
    image: "/ImageAssets/serviceImages/XrayImage.jpg",
    description: "Quick and accurate X-ray assessments by experts."
  }
];

const Services = () => {
  return (
    <div className={css.serviceContainer}>
      <h2 className={css.heading}>Our Creative Services</h2>
      <div className={css.servicesGrid}>
        {serviceData.map((service, idx) => (
          <div className={css.serviceCard} key={idx}>
            {/* <img src={service.image} alt={service.title} className={css.serviceImage} /> */}
            <Image src={service.image} alt={service.title} className={css.serviceImage} height={130} width={130}/>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;