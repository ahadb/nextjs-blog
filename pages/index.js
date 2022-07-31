import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Image from 'next/image';
import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData}) {
  return (
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          {/*<h3 className={utilStyles.headingXl}>Who am I?</h3>*/}
          <div style={{display: "flex", marginTop: 33}}>
            <img
                src="/images/ahad-bokhari.png" // Route of the image file
                height={75} // Desired size with correct aspect ratio
                width={75} // Desired size with correct aspect ratio
                alt="Your Name"
            />

            <div className={utilStyles.blogDescription}>
             <div>Exploring JS, React & UI.</div>
              <div> <Link href={`http://ahadb.github.io/`}>
                <a>Read my old blog</a>
              </Link></div>
            </div>
          </div>
        </section>
        <section style={{marginTop: 25}}className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingXl}>Posts</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
                <li className={utilStyles.listItem} key={id}>
                  <Link href={`/posts/${id}`}>
                    <a>{title}</a>
                  </Link>
                  <br />
                  <small className={utilStyles.lightText}>
                    <Date dateString={date} />
                  </small>
                </li>
            ))}
          </ul>
        </section>
        <footer className={utilStyles.footer}>
          Built with <Link href={`https://nextjs.org/`}>
          <a>NextJS</a>
        </Link>, hosted on <Link href={`https://vercel.com/`}>
          <a>Vercel</a>
        </Link> - © 2022
        </footer>
      </Layout>
  );
}
