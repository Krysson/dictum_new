import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.logo}>
          <Link href='/'>.dictum</Link>
        </h1>
        <nav className={styles.nav}>
          <Link href='/login'>Login</Link>
          <Link href='/signup'>Sign Up</Link>
        </nav>
      </header>

      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.announcement}>
            <p>.dictum is now public!</p>
          </div>
          <h1 className={styles.title}>
            Your legal <span className={styles.highlight}>insights</span> platform
          </h1>
          <p className={styles.subtitle}>
            .dictum allows you to share your legal expertise with the world. Start your blog and
            connect with readers in seconds.
          </p>
          <Link
            href='/dashboard'
            className={styles.cta}>
            Get started
            <span className={styles.arrow}>→</span>
          </Link>
        </div>

        <div className={styles.features}>
          <h2>Start blogging in minutes</h2>
          <p>Sharing your legal insights has never been easier than with .dictum</p>
          <ol className={styles.steps}>
            <li>
              <div className={styles.stepImage}>
                <Image
                  src='/imgs/step-1.png'
                  alt='Step 1 illustration'
                  width={200}
                  height={200}
                />
              </div>
              <span className={styles.stepNumber}>Step 1</span>
              <span className={styles.stepTitle}>Sign up for an account</span>
              <span className={styles.stepDescription}>
                Choose between our free plan or <Link href='/pricing'>pro plan</Link>.
              </span>
            </li>
            <li>
              <div className={styles.stepImage}>
                <Image
                  src='/imgs/step-2.png'
                  alt='Step 1 illustration'
                  width={200}
                  height={200}
                />
              </div>
              <span className={styles.stepNumber}>Step 2</span>
              <span className={styles.stepTitle}>Set up your blog</span>
              <span className={styles.stepDescription}>
                Customize your profile and blog settings.
              </span>
            </li>
            <li>
              <div className={styles.stepImage}>
                <Image
                  src='/imgs/step-3.png'
                  alt='Step 1 illustration'
                  width={200}
                  height={200}
                />
              </div>
              <span className={styles.stepNumber}>Step 3</span>
              <span className={styles.stepTitle}>Start writing</span>
              <span className={styles.stepDescription}>Share your expertise with the world.</span>
            </li>
          </ol>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 .dictum. All rights reserved.</p>
      </footer>
    </div>
  )
}
