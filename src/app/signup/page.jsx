import styles from './signup.module.css'

export default function Signup() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.logo}>
          <a href='/'>.dictum</a>
        </h1>
      </header>
      <main className={styles.main}>
        <div className={styles.signupBox}>
          <h2>Sign up for .dictum</h2>
          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <label htmlFor='name'>Full Name</label>
              <input
                type='text'
                id='name'
                name='name'
                required
              />
            </div>
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
            <div className={styles.inputGroup}>
              <label htmlFor='confirmPassword'>Confirm Password</label>
              <input
                type='password'
                id='confirmPassword'
                name='confirmPassword'
                required
              />
            </div>
            <button
              type='submit'
              className={styles.submitButton}>
              Sign Up
            </button>
          </form>
          <p className={styles.loginPrompt}>
            Already have an account? <a href='/login'>Log in</a>
          </p>
        </div>
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2024 .dictum. All rights reserved.</p>
      </footer>
    </div>
  )
}
