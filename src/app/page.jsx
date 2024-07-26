'use client'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

// Custom hook for detecting if an element is in view
function useInView(options) {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting)
    }, options)

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [ref, options])

  return [ref, isInView]
}

//main page below
export default function Home() {
  const [step1Ref, step1InView] = useInView({ threshold: 0.5 })
  const [step2Ref, step2InView] = useInView({ threshold: 0.5 })
  const [step3Ref, step3InView] = useInView({ threshold: 0.5 })
  const [feature1Ref, feature1InView] = useInView({ threshold: 0.5 })
  const [feature2Ref, feature2InView] = useInView({ threshold: 0.5 })
  const [feature3Ref, feature3InView] = useInView({ threshold: 0.5 })
  const [feature4Ref, feature4InView] = useInView({ threshold: 0.5 })

  const cx = (...classNames) => classNames.join(' ')

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
        {/* START Section */}
        <div className={styles.features}>
          <h2>Start blogging in minutes</h2>
          <p>Sharing your legal insights has never been easier than with .dictum</p>
          <ol className={styles.steps}>
            {/* can edit classname below if needed to match syntax - taking out cx function */}
            <li
              ref={step1Ref}
              className={cx(styles.stepAnimated, step1InView && styles.animate)}>
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
            <li
              ref={step2Ref}
              className={cx(styles.stepAnimated, step2InView && styles.animate)}>
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
            <li
              ref={step3Ref}
              className={cx(styles.stepAnimated, step3InView && styles.animate)}>
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
        {/* advanced Feature Section */}
        <div className={styles.advancedFeatures}>
          <h2>Powerful Tools for Legal Bloggers</h2>
          <div className={styles.featureList}>
            <div
              ref={feature1Ref}
              className={cx(
                styles.featureItem,
                styles.featureWYSIWYG,
                styles.featureAnimated,
                feature1InView && styles.animate
              )}>
              <div className={styles.featureText}>
                <h3>WYSIWYG or Markdown Editors</h3>
                <p>Choose your preferred writing style with our flexible editing options.</p>
              </div>
              <div className={styles.featureImage}>
                <Image
                  src='/imgs/robot.png'
                  alt='WYSIWYG Editor'
                  width={400}
                  height={300}
                />
              </div>
            </div>
            <div
              ref={feature2Ref}
              className={cx(
                styles.featureItem,
                styles.featureAI,
                styles.featureAnimated,
                feature2InView && styles.animate
              )}>
              <div className={styles.featureImage}>
                <Image
                  src='/imgs/robot.png'
                  alt='AI Assisted Writing'
                  width={400}
                  height={300}
                />
              </div>
              <div className={styles.featureText}>
                <h3>AI Assisted Writing</h3>
                <p>Enhance your content with our advanced AI writing assistance.</p>
              </div>
            </div>
            <div
              ref={feature3Ref}
              className={cx(
                styles.featureItem,
                styles.featureSubscriptions,
                styles.featureAnimated,
                feature3InView && styles.animate
              )}>
              <div className={styles.featureText}>
                <h3>Email Subscriptions</h3>
                <p>Let readers follow your blog and receive updates directly in their inbox.</p>
              </div>
              <div className={styles.featureImage}>
                <Image
                  src='/imgs/robot.png'
                  alt='Email Subscriptions'
                  width={400}
                  height={300}
                />
              </div>
            </div>
            <div
              ref={feature4Ref}
              className={cx(
                styles.featureItem,
                styles.featurePaid,
                styles.featureAnimated,
                feature4InView && styles.animate
              )}>
              <div className={styles.featureImage}>
                <Image
                  src='/imgs/robot.png'
                  alt='Paid Subscriptions'
                  width={400}
                  height={300}
                />
              </div>
              <div className={styles.featureText}>
                <h3>Optional Paid Subscriptions</h3>
                <p>Monetize your expertise with the option to charge for premium content.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 .dictum. All rights reserved.</p>
      </footer>
    </div>
  )
}
