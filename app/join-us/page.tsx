
"use client"
import styles from './JoinUs.module.scss';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { useState } from 'react';

const whatsappNumber = '919588622796';

import ParticlesComponent from '../components/particles/particles';

export default function JoinUs() {
  const [doctorName, setDoctorName] = useState('');
  const [doctorCity, setDoctorCity] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [companyCity, setCompanyCity] = useState('');

  const getDoctorWhatsAppLink = () => {
    const message = encodeURIComponent(`Hello, I am Dr. ${doctorName} from ${doctorCity}, and I am a radiologist interested in joining RadAssist.`);
    return `https://wa.me/${whatsappNumber}?text=${message}`;
  };

  const getCompanyWhatsAppLink = () => {
    const message = encodeURIComponent(`Hello, I am from ${companyName} based in ${companyCity}, and we are a teleradiology service company interested in collaborating with RadAssist.`);
    return `https://wa.me/${whatsappNumber}?text=${message}`;
  };
  return (
    <div className={styles.joinUsThemeBg}>
      <div className={styles.mainBg} style={{ position: 'relative', zIndex: 2 }}>
        <main className={styles.joinUsContainer}>
          <h1 className={styles.title}>Join Us</h1>
          <div className={styles.sectionsWrapper}>
            <div className={styles.section}>
              <span className={styles.tag}>Radiologist</span>
              <h2>Doctor</h2>
              <p>Are you a radiologist looking to join our network?</p>
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={doctorName}
                  onChange={(e) => setDoctorName(e.target.value)}
                  className={styles.input}
                />
                <input
                  type="text"
                  placeholder="Your City"
                  value={doctorCity}
                  onChange={(e) => setDoctorCity(e.target.value)}
                  className={styles.input}
                />
              </div>
              <a
                href={getDoctorWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappBtn}
              >
                Connect on WhatsApp
              </a>
            </div>
            <div className={styles.section}>
              <span className={styles.tag}>Teleradiology Service Company</span>
              <h2>Company</h2>
              <p>Are you a teleradiology company interested in partnership?</p>
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  placeholder="Company Name"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className={styles.input}
                />
                <input
                  type="text"
                  placeholder="Company City"
                  value={companyCity}
                  onChange={(e) => setCompanyCity(e.target.value)}
                  className={styles.input}
                />
              </div>
              <a
                href={getCompanyWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappBtn}
              >
                Connect on WhatsApp
              </a>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
