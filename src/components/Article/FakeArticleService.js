const articles = [
  {
    id: 1,
    posted_dt: '2021-11-09T22:15:41.118Z',
    title: 'My first article',
    body: "This is my first article. I'm writing it to learn about blogging. I would like to become a more proficient writer. I don't anticipate this blah blah yadda yadda doesn't matter just need some more length."
  },
  {
    id: 2,
    posted_dt: '2021-10-21T22:15:41.118Z',
    title: 'My second article',
    body: "This is my second article. I'm writing it to learn about blogging. I would like to become a more proficient writer. I don't anticipate this blah blah yadda yadda doesn't matter just need some more length."
  },
  {
    id: 3,
    posted_dt: '2021-10-03T22:15:41.118Z',
    title: 'My third article',
    body: "This is my third article. I'm writing it to learn about blogging. I would like to become a more proficient writer. I don't anticipate this blah blah yadda yadda doesn't matter just need some more length."
  }
]

const GetArticle = (id) => {
  const article = articles.find(article => {
    return article.id === id
  })
  return Promise.resolve({
    body: JSON.stringify(article),
    ok: !!article,
    statusText: article ? 'Success' : '404: No article found'
  })
}

export default GetArticle
