import './ArticleArea.css'
import React from 'react'

const articles = [
  {
    id: 1,
    posted_dt: '2021-11-09T22:15:41.118Z',
    title: 'My first article',
    article_preview: "This is my first article. I'm writing it to learn about blogging. I would like to become a more proficient writer. I don't anticipate this blah blah yadda yadda doesn't matter just need some more length"
  },
  {
    id: 1,
    posted_dt: '2021-11-09T22:15:41.118Z',
    title: 'My first article',
    article_preview: "This is my first article. I'm writing it to learn about blogging. I would like to become a more proficient writer. I don't anticipate this blah blah yadda yadda doesn't matter just need some more length"
  }
]

class Description extends React.Component {
  trimDate (dateStr) {
    const dateArr = (
      dateStr // Tue Nov 09 2021
        .split(' ') // ['Tue', 'Nov', '09', '2021']
        .slice(1) // ['Nov', '09', '2021']
    )

    dateArr[1] = dateArr[1] + ',' // ['Nov', '09,', '2021']
    return dateArr.join(' ')
  }

  mapArticles (articles) {
    if (articles && articles.length) {
      // if there are any articles
      return articles.map(article => {
        const articleDateStr = new Date(article.posted_dt).toDateString()
        const articleDateStrTrimmed = this.trimDate(articleDateStr)
        return (
          <article key={article.id} className='Article'>
            <sup>Posted on: {articleDateStrTrimmed}</sup>
            <h1>{article.title}</h1>
            <p>{article.article_preview}...</p>
          </article>
        )
      })
    }
  }

  render () {
    const articleList = this.mapArticles(articles)
    return (
      <section className='ArticleArea'>
        {articleList}
      </section>
    )
  }
}

export default Description
