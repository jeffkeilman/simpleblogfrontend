import React from 'react'
import renderer from 'react-test-renderer'
import App from '../../../components/App/App'
import { render } from '@testing-library/react'

describe('App', () => {
  it('renders correctly', () => {
    const app = renderer.create(<App />).toJSON()
    expect(app).toMatchSnapshot()
  })

  it('renders TitleBar', () => {
    const { container } = render(<App />)
    expect(container.querySelector('.TitleBar')).toBeInTheDocument()
  })

  it('renders ArticleArea', () => {
    const { container } = render(<App />)
    expect(container.querySelector('.ArticleArea')).toBeInTheDocument()
  })
})
