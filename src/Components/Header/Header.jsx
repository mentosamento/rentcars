import React from 'react';
import ResponsiveContainer from "../ResponsiveContainer/ResponsiveContainer";
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <ResponsiveContainer className={styles.container}>
        <a className={styles.logo} href="/">
          <span className={styles.logoTextPrimary}>rentmotor</span>
          <span className={styles.logoText}>.az</span>
        </a>
        <nav className={styles.nav}>
          <div className={styles.bellIcon}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
            <path stroke="currentColor" stroke-width="0.3" d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"/>
          </svg>
          </div>
          <div className={styles.userIcon}>
          <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
            <path stroke="currentColor" stroke-width="0.2" d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
          </svg>
          </div>
        </nav>
      </ResponsiveContainer>
    </header>
  );
}

export default Header;
