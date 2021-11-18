import React from 'react'
import renderer from 'react-test-renderer'
import NoMatch from '../../../components/NoMatch/NoMatch'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

describe('NoMatch', () => {
  // snapshot test
  it('renders correctly', () => {
    const nomatch = renderer.create(
      <MemoryRouter>
        <NoMatch />
      </MemoryRouter>
    ).toJSON()
    expect(nomatch).toMatchSnapshot()
  })

  it('renders the 404 copy', () => {
    const { queryByText } = render(
      <MemoryRouter>
        <NoMatch />
      </MemoryRouter>
    )
    expect(queryByText(/404! We didn't find anything at that link!/i)).toBeInTheDocument()
  })

  it('renders the home link', () => {
    const { queryByText } = render(
      <MemoryRouter>
        <NoMatch />
      </MemoryRouter>
    )
    expect(queryByText(/Take me home!/i)).toBeInTheDocument()
  })
})
