import React from 'react'
import renderer from 'react-test-renderer'
import Face from '../../../components/Face/Face'
import { render } from '@testing-library/react'

describe('Face', () => {
  // snapshot test
  it('renders correctly', () => {
    const face = renderer.create(<Face />).toJSON()
    expect(face).toMatchSnapshot()
  })

  it('renders face image', () => {
    const { queryByAltText } = render(<Face />)
    expect(queryByAltText(/Author's face/i)).toBeInTheDocument()
  })
})
