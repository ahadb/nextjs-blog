import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Image from "next/image";
import Link from "next/link";
import Date from "../components/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        {/*<h3 className={utilStyles.headingXl}>Who am I?</h3>*/}
        <div style={{ display: "flex", marginTop: 33 }}>
          <img
            src="/images/ahad-bokhari.png" // Route of the image file
            height={85} // Desired size with correct aspect ratio
            width={85} // Desired size with correct aspect ratio
            alt="Your Name"
          />

          <div className={utilStyles.blogDescription}>
            <div>Exploring JavaScript, React & web technologies.</div>
            <div>
              <div>
                ↪&nbsp;
                <Link href={`http://ahadb.github.io/`}>
                 Read my old blog
                </Link>
              </div>
              <div>
                ↪&nbsp;
                <Link href={`https://github.com/ahadb`}>
                  Github
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        style={{ marginTop: 25 }}
        className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
      >
        <h2 className={utilStyles.headingXl}>Posts</h2>
        {allPostsData.map(({ id, date, title, description, words }) => (
          <div>
            <div className={utilStyles.content}>
              <div className={utilStyles.marginRightAuto}>
                <div className={utilStyles.listItem}>
                  <Link href={`/posts/${id}`}>
                    {title}
                  </Link>
                </div>
              </div>
              <div className={utilStyles.listItemDate}>
                {words} words
              </div>
            </div>
            <div className={utilStyles.listItemDesc}>
              <Date dateString={date} /> <span style={{color: 'grey'}}>•</span> {''}
              {description}
            </div>
          </div>
        ))}
      </section>
      <footer className={utilStyles.footer}>
        Built with{" "}
        <Link href={`https://nextjs.org/`}>
         NextJS
        </Link>
        , hosted on{" "}
        <Link href={`https://vercel.com/`}>
         Vercel
        </Link>{" "}
        - © 2023
      </footer>
    </Layout>
  );
}

// {allPostsData.map(({ id, date, title, description }) => (
//     <li className={utilStyles.listItem} key={id}>
//       <Link href={`/posts/${id}`}>
//         <a style={{fontWeight: 500}}>{title}</a>
//       </Link>
//       <br />
//       <small className={utilStyles.lightText}>
//         <Date dateString={date} />
//       </small>
//       <br />
//       <small className={utilStyles.lightText}>
//         {description}
//       </small>
//     </li>
// ))}
