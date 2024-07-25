import styles from './login.module.css'

export default function Login() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.logo}>
          <a href='/'>.dictum</a>
        </h1>
      </header>
      <main className={styles.main}>
        <div className={styles.loginBox}>
          <h2>Login to .dictum</h2>
          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                id='email'
                name='email'
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                id='password'
                name='password'
                required
              />
            </div>
            <button
              type='submit'
              className={styles.submitButton}>
              Log In
            </button>
          </form>
          <p className={styles.signupPrompt}>
            Don`&rsquo`t have an account? <a href='/signup'>Sign up</a>
          </p>
        </div>
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2024 .dictum. All rights reserved.</p>
      </footer>
    </div>
  )
}
