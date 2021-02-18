import Link from 'next/link'
import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import GitHub from '../components/svgs/github'
import sharedStyles from '../styles/shared.module.css'

export default () => (
  <>
    <Header titlePre="Home" />
    <div className={sharedStyles.layout}>
      
      <h1>honjoh.net</h1>
      {/* <h2>
        Blazing Fast Notion Blog with Next.js'{' '}
        <ExtLink
          href="https://github.com/vercel/next.js/issues/9524"
          className="dotted"
          style={{ color: 'inherit' }}
        >
          SSG
        </ExtLink>
      </h2> */}

      {/* <Features /> */}

      <div className="explanation">

        <p>
        <ExtLink
          href="https://twitter.com/_honjoh/"
          className="dotted"
          style={{ color: 'inherit' }}
        >
          twitter.com/_honjoh/
        </ExtLink>

        <BR>

        <ExtLink
          href="https://honjoh.net/"
          className="dotted"
          style={{ color: 'inherit' }}
        >
          honjoh.net
        </ExtLink>
        </p>
      </div>

    </div>
  </>
)
