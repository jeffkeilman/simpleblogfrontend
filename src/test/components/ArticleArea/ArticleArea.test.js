import React from 'react'
import renderer from 'react-test-renderer'
import ArticleArea from '../../../components/ArticleArea/ArticleArea'
import { render } from '@testing-library/react'

describe('ArticleArea', () => {
  // snapshot test
  it('renders correctly', () => {
    const aa = renderer.create(<ArticleArea />).toJSON()
    expect(aa).toMatchSnapshot()
  })

  // TODO: mock actual API calls and test that real articles are created
  // for now, just test mocked articles
  it('renders articles', () => {
    const { container } = render(<ArticleArea />)
    const articles = container.querySelectorAll('.Article')
    // should have rendered 3 articles
    expect(articles.length).toBe(3)

    // check dates
    expect(articles[0].querySelector('sup').innerHTML).toBe('Posted on: Nov 09, 2021')
    expect(articles[1].querySelector('sup').innerHTML).toBe('Posted on: Oct 21, 2021')
    expect(articles[2].querySelector('sup').innerHTML).toBe('Posted on: Oct 03, 2021')

    // check titles
    expect(articles[0].querySelector('h1').innerHTML).toBe('My first article')
    expect(articles[1].querySelector('h1').innerHTML).toBe('My second article')
    expect(articles[2].querySelector('h1').innerHTML).toBe('My third article')

    // check article preview
    const article1Preview = articles[0].querySelector('p').innerHTML
    const article2Preview = articles[1].querySelector('p').innerHTML
    const article3Preview = articles[2].querySelector('p').innerHTML
    // these will be much smaller once mocked
    const expectedArticle1 = "This is my first article. I'm writing it to learn about blogging. I would like to become a more proficient writer. " +
      "I don't anticipate this blah blah yadda yadda doesn't matter just need some more length..."
    const expectedArticle2 = "This is my second article. I'm writing it to learn about blogging. I would like to become a more proficient writer. " +
      "I don't anticipate this blah blah yadda yadda doesn't matter just need some more length..."
    const expectedArticle3 = "This is my third article. I'm writing it to learn about blogging. I would like to become a more proficient writer. " +
      "I don't anticipate this blah blah yadda yadda doesn't matter just need some more length..."

    expect(article1Preview).toBe(expectedArticle1)
    expect(article2Preview).toBe(expectedArticle2)
    expect(article3Preview).toBe(expectedArticle3)
  })
})
