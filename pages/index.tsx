import React from 'react'
import Head from 'next/head'
import { NextPage, GetStaticProps } from 'next'
import 'data/adapters'
import sdk from 'data/sdk'
import List from 'components/List'

interface HomeProps {
  data: any[]
}

export const Home: NextPage<HomeProps> = ({ data }) => {
  return (
    <div className="container">
      <Head>
        <title>Open-Orgs.info</title>
        <link rel="icon" href="/favicon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700&display=swap"
          rel="stylesheet"
        />

        <meta property="og:title" content="Open-Orgs.info" />
        <meta property="og:image" content="https://open-orgs.info/api/screenshot" />
        <meta
          property="og:description"
          content="DAOs are the new companies. What's on their balance sheets?"
        />

        <meta name="twitter:title" content="Open-Orgs.info" />
        <meta
          name="twitter:description"
          content="DAOs are the new companies. What's on their balance sheets?"
        />
        <meta
          name="twitter:image"
          content={`https://open-orgs.info/api/screenshot?${new Date().getDate()}`}
        />
        <meta name="twitter:card" content="summary_large_image" />

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-N4QYE453Z4" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());gtag('config', 'G-MB00YK06P7');`
          }}
        />
      </Head>

      <main>
        <h1 className="title">Open-Orgs.info</h1>

        <p className="description">
          DAOs are the new companies.<br />
          What's on their balance sheets?
        </p>

        <div>
          <a
            href="https://twitter.com/share?ref_src=twsrc%5Etfw"
            className="twitter-share-button"
            data-show-count="true"
          >
            Tweet
          </a>
          <script async src="https://platform.twitter.com/widgets.js"></script>
        </div>

        <List data={data} />
      </main>

      <footer>
        <div>
          Created by{' '}
          <a href="https://twitter.com/dmihal" target="twitter">
            David Mihal
          </a>
        </div>
        <div>
          Design help from{' '}
          <a href="https://twitter.com/hey_heey_heeey" target="twitter">
            @heyheeyheeey
          </a>
        </div>
        <div>
          <a href="https://cryptofees.info">cryptofees.info</a>
          {' | '}
          <a href="https://ethereumnodes.com">ethereumnodes.com</a>
          {' | '}
          <a href="https://money-movers.info">money-movers.info</a>
          {' | '}
          <a href="https://stakers.info">stakers.info</a>
          {' | '}
          <b>open-orgs.info</b>
        </div>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 2rem 0 3rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: auto;
          border-top: 1px solid lightGray;
          text-align: center;
          padding: 2rem 0;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0 0 16px;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
          max-width: 800px;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
          margin: 4px 0 20px;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: 'Noto Sans TC', sans-serif;
          background: #eeeeee;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const list = sdk.getList('treasuries')

  const data = await list.executeQueriesWithMetadata(['currentTreasuryUSD'])

  return { props: { data }, revalidate: 60 };
};


export default Home;
