import Head from 'next/head';
import Layout, { siteTitle } from '../component/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I'm Alvin Jan Sunga. I enjoy playing games and watching racing.
          My favorite music is "Walang Himaala" by Ace Banzuelo, and I love eating fried chicken.
          In 5 years, I hope to become a successful web developer.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}