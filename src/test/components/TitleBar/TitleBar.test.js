import React from 'react'
import renderer from 'react-test-renderer'
import TitleBar from '../../../components/TitleBar/TitleBar'
import { render } from '@testing-library/react'

describe('TitleBar', () => {
  // snapshot test
  it('renders correctly', () => {
    const tb = renderer.create(<TitleBar />).toJSON()
    expect(tb).toMatchSnapshot()
  })

  it('renders InfoPanel', () => {
    const { container } = render(<TitleBar />)
    expect(container.querySelector('.InfoPanel')).toBeInTheDocument()
  })

  it('renders Face', () => {
    const { container } = render(<TitleBar />)
    expect(container.querySelector('.Face')).toBeInTheDocument()
  })
})
