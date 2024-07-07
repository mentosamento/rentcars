import React from 'react';
import styles from './Footer.module.css';
import ResponsiveContainer from '../ResponsiveContainer/ResponsiveContainer';

function Footer() {
  return (
    <footer className={styles.footer}>
      <ResponsiveContainer>
        <div className={styles.logo}>
          <a href="/">
            <span className={styles.logoText}>rentmotor</span>
            <span className={styles.logoText}>.az</span>
          </a>
        </div>
        <div className={styles.content}>
          <div className={styles.leftLinks}>
            <a href="#" className={styles.link}>
              Ana səyifə
            </a>
            <a href="#" className={styles.link}>
              Dəstək
            </a>
            <a href="#" className={styles.link}>
              Bizim haqda
            </a>
            <a href="#" className={styles.linke}>
              Reklam yerləşdirin
            </a>
          </div>
          <div className={styles.rightLinks}>
            <div className={styles.phone}>
              <p>(+994)50-535-15-55</p>
            </div>
            <div className={styles.mail}>
              <p>rentmotor.az@gmail.com</p>
            </div>
            <div className={styles.instagram}>
              <p>rentmotor.az</p>
            </div>
          </div>
        </div>
      </ResponsiveContainer>
    </footer>
  );
}

export default Footer;
