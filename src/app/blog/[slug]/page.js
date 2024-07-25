import styles from './blogPost.module.css'

export default function BlogPost({ params }) {
  // In a real application, you would fetch the post data based on the slug
  const post = {
    title: 'The Future of Legal Tech',
    author: 'Jane Doe',
    date: 'May 15, 2024',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.logo}>
          <a href='/'>.dictum</a>
        </h1>
        <nav className={styles.nav}>
          <a href='/dashboard'>Dashboard</a>
        </nav>
      </header>
      <main className={styles.main}>
        <article className={styles.blogPost}>
          <h1 className={styles.postTitle}>{post.title}</h1>
          <div className={styles.postMeta}>
            <span>By {post.author}</span>
            <span>Published on {post.date}</span>
          </div>
          <div className={styles.postContent}>
            <p>{post.content}</p>
          </div>
        </article>
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2024 .dictum. All rights reserved.</p>
      </footer>
    </div>
  )
}
