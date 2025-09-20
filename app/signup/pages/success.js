"use client";

import styles from "./signup.module.css";

const DISCORD_APP_URL = process.env.NEXT_PUBLIC_DISCORD_APP_URL;
const DISCORD_WEB_URL = process.env.NEXT_PUBLIC_DISCORD_WEB_URL;

export default function Success() {
  const openDiscord = (event) => {
    event.preventDefault();
    window.open(DISCORD_APP_URL, "_self");

    setTimeout(() => {
      if (!document.hasFocus()) return;
      window.location.href = DISCORD_WEB_URL;
    }, 1500);
  };

  return (
    <div className={styles.successMessage}>
      <h2 className={styles.successTitle}>Registration Successful!</h2>
      <p>Thank you for joining BuilderClan.</p>
      <div className={styles.buttonGroup}>
        <a
          href={DISCORD_WEB_URL}
          onClick={openDiscord}
          className={styles.button}
        >
          Go back to Discord Server
        </a>
      </div>
    </div>
  );
}
