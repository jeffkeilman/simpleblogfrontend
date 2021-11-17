import React from 'react'
import renderer from 'react-test-renderer'
import Banner from '../../../components/Banner/Banner'
import { render } from '@testing-library/react'

describe('Banner', () => {
  // snapshot test
  it('renders correctly', () => {
    const banner = renderer.create(<Banner />).toJSON()
    expect(banner).toMatchSnapshot()
  })

  it('renders the banner', () => {
    const { container } = render(<Banner />)
    expect(container.querySelector('.Banner')).toBeInTheDocument()
  })
})
