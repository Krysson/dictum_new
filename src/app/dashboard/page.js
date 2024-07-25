import styles from './dashboard.module.css'

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.logo}>
          <a href='/'>.dictum</a>
        </h1>
        <nav className={styles.nav}>
          <a href='/dashboard'>Dashboard</a>
          <a href='/dashboard/new-post'>New Post</a>
          <a href='/dashboard/profile'>Profile</a>
          <button className={styles.logoutButton}>Logout</button>
        </nav>
      </header>
      <main className={styles.main}>
        <h2>Welcome, User!</h2>
        <section className={styles.statsSection}>
          <div className={styles.statCard}>
            <h3>Total Posts</h3>
            <p>10</p>
          </div>
          <div className={styles.statCard}>
            <h3>Total Views</h3>
            <p>1,234</p>
          </div>
          <div className={styles.statCard}>
            <h3>Subscribers</h3>
            <p>56</p>
          </div>
        </section>
        <section className={styles.recentPosts}>
          <h3>Recent Posts</h3>
          <ul className={styles.postList}>
            <li>
              <a href='/blog/post-1'>The Future of Legal Tech</a>
              <span>Published on: May 15, 2024</span>
            </li>
            <li>
              <a href='/blog/post-2'>Understanding Intellectual Property Law</a>
              <span>Published on: May 10, 2024</span>
            </li>
            <li>
              <a href='/blog/post-3'>AI in the Courtroom: Ethical Considerations</a>
              <span>Published on: May 5, 2024</span>
            </li>
          </ul>
        </section>
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2024 .dictum. All rights reserved.</p>
      </footer>
    </div>
  )
}
