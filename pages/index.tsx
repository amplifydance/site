import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Amplify.dance</title>
        <meta name="description" content="Screendance projects researching the next frontier in high-tech performing arts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <header className={styles.header}>
          <h1 className={styles.title}>
            Amplify.dance
          </h1>
          <nav>
            <ul>
              <li>Works</li>
              <li>Events</li>
              <li>Research</li>
            </ul>
          </nav>
        </header>
        <h1 className={styles.mission}>
          The next frontier in high-tech performing arts
        </h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://instagram.com/amplify.dance"
          target="_blank"
          rel="noopener noreferrer"
        >
          @amplify.dance
        </a>
        <p>Made in Rome and Berlin</p>
        <a
          href="https://github.com/amplifydance/site"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open source on Github
        </a>
      </footer>
    </div>
  )
}
