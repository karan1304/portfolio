import React from 'react'
import { SVG } from '@/assets/images'
import NewsCard from '../NewsCard/NewsCard.jsx'
import Reveal from '../Reveal/Reveal'

const newsArr = [
  {
    Image: SVG.NewsOne,
    title: 'GitHub Enterprise Server',
    desc: 'GitHub has released Enterprise Server 3.13.3, addressing several security vulnerabilities, including a critical flaw affecting instances using SAML single sign-on....',
    link: 'https://www.developer-tech.com/news/github-enterprise-server-3-13-3-tackles-critical-saml-vulnerability/',
  },
  {
    Image: SVG.NewsTwo,
    title: 'SQL, Python, and Java skills',
    desc: 'SQL, Python, and Java remain the most sought-after programming skills by employers, according to new research from System Design School....',
    link: 'https://www.developer-tech.com/news/sql-python-and-java-most-sought-after-skills/',
  },
  {
    Image: SVG.NewsThree,
    title: 'Artificial Intelligence market',
    desc: 'The global artificial intelligence (AI) market — an industry that has been blessed with serious hype (and rightly so: such unexpected growth and innovative solutions .....',
    link: 'https://www.developer-tech.com/news/artificial-intelligence-market-expected-to-fit-a-trillion-dollars-by-2030/',
  },
]

const News = () => {
  return (
    <section id="news" className="wrap scroll-mt-20 pb-24">
      <Reveal>
        <p className="eyebrow">Read</p>
        <h2 className="section-title">Latest news</h2>
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {newsArr.map((news) => (
            <NewsCard key={news.link} Image={news.Image} Title={news.title} Desc={news.desc} link={news.link} />
          ))}
        </div>
      </Reveal>
    </section>
  )
}

export default News
