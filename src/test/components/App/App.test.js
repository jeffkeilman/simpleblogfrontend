import React from 'react'
import renderer from 'react-test-renderer'
import App from '../../../components/App/App'
import { render } from '@testing-library/react'

describe('App', () => {
  // snapshot test
  it('renders correctly', () => {
    const app = renderer.create(<App />).toJSON()
    expect(app).toMatchSnapshot()
  })

  it('renders Banner', () => {
    const { container } = render(<App />)
    expect(container.querySelector('.Banner')).toBeInTheDocument()
  })
})
