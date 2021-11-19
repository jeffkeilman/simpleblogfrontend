import './ArticleArea.css'
import React from 'react'
import DateHelper from '../../DateHelper/DateHelper'

const articles = [
  {
    id: 1,
    posted_dt: '2021-11-09T22:15:41.118Z',
    title: 'My first article',
    preview: "This is my first article. I'm writing it to learn about blogging. I would like to become a more proficient writer. I don't anticipate this blah blah yadda yadda doesn't matter just need some more length"
  },
  {
    id: 2,
    posted_dt: '2021-10-21T22:15:41.118Z',
    title: 'My second article',
    preview: "This is my second article. I'm writing it to learn about blogging. I would like to become a more proficient writer. I don't anticipate this blah blah yadda yadda doesn't matter just need some more length"
  },
  {
    id: 3,
    posted_dt: '2021-10-03T22:15:41.118Z',
    title: 'My third article',
    preview: "This is my third article. I'm writing it to learn about blogging. I would like to become a more proficient writer. I don't anticipate this blah blah yadda yadda doesn't matter just need some more length."
  }
]

class ArticleArea extends React.Component {
  constructor (props) {
    super(props)
    this.state = { articles: articles }
  }

  mapArticles (articles) {
    if (articles && articles.length) {
      // if there are any articles
      return articles.map(article => {
        const articleDateStr = new Date(article.posted_dt).toDateString()
        const articleDateStrTrimmed = DateHelper.trimDate(articleDateStr)
        const lastCharInPreview = article.preview[article.preview.length - 1]
        if (lastCharInPreview === '.') {
          // if last char in preview is a period, strip it from the preview so ... doesn't look weird
          article.preview = article.preview.substring(0, article.preview.length - 1)
        }
        return (
          <article key={article.id} className='Article'>
            <sup>Posted on: {articleDateStrTrimmed}</sup>
            <h1>{article.title}</h1>
            <p>{article.preview}...</p>
          </article>
        )
      })
    }
  }

  render () {
    const articleList = this.mapArticles(this.state.articles)
    return (
      <section className='ArticleArea'>
        {articleList}
      </section>
    )
  }
}

export default ArticleArea
