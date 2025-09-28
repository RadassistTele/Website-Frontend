
import styles from './JoinUs.module.scss';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const whatsappNumber = '917745890335';
const doctorText = encodeURIComponent('Hello, I am a radiologist interested in joining RadAssist.');
const companyText = encodeURIComponent('Hello, I am a teleradiology service company interested in collaborating with RadAssist.');

import ParticlesComponent from '../components/particles/particles';

export default function JoinUs() {
  return (
    <div className={styles.joinUsThemeBg}>
      <div style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 0 }}>
        <ParticlesComponent id="tsparticles-joinus" />
      </div>
      <div className={styles.mainBg} style={{ position: 'relative', zIndex: 2 }}>
        <main className={styles.joinUsContainer}>
          <h1 className={styles.title}>Join Us</h1>
          <div className={styles.sectionsWrapper}>
            <section className={styles.section}>
              <span className={styles.tag}>Radiologist</span>
              <h2>Doctor</h2>
              <p>Are you a radiologist looking to join our network?</p>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${doctorText}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappBtn}
              >
                Connect on WhatsApp
              </a>
            </section>
            <section className={styles.section}>
              <span className={styles.tag}>Teleradiology Service Company</span>
              <h2>Company</h2>
              <p>Are you a teleradiology company interested in partnership?</p>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${companyText}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappBtn}
              >
                Connect on WhatsApp
              </a>
            </section>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
