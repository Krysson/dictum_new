import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.logo}>.dictum</h1>
        <nav className={styles.nav}>
          <a href='/login'>Login</a>
          <a href='/signup'>Sign Up</a>
        </nav>
      </header>
      <main className={styles.main}>
        <h2>Welcome to .dictum</h2>
        <p>Your platform for legal industry insights and discussions.</p>
        <button className={styles.cta}>Get Started</button>
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2024 .dictum. All rights reserved.</p>
      </footer>
    </div>
  )
}
