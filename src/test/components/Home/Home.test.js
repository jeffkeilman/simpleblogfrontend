import React from 'react'
import renderer from 'react-test-renderer'
import Home from '../../../components/Home/Home'
import { render } from '@testing-library/react'

describe('Home', () => {
  // snapshot test
  it('renders correctly', () => {
    const home = renderer.create(<Home />).toJSON()
    expect(home).toMatchSnapshot()
  })

  it('renders TitleBar', () => {
    const { container } = render(<Home />)
    expect(container.querySelector('.TitleBar')).toBeInTheDocument()
  })

  it('renders ArticleArea', () => {
    const { container } = render(<Home />)
    expect(container.querySelector('.ArticleArea')).toBeInTheDocument()
  })
})
