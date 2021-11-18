import React from 'react'
import renderer from 'react-test-renderer'
import InfoPanel from '../../../components/InfoPanel/InfoPanel'
import { render } from '@testing-library/react'

describe('InfoPanel', () => {
  // snapshot test
  it('renders with links correctly', () => {
    const ip = renderer.create(<InfoPanel name='foobar' linkedinurl='foo' githuburl='bar' />).toJSON()
    expect(ip).toMatchSnapshot()
  })

  // snapshot test
  it('renders without links correctly', () => {
    const ip = renderer.create(<InfoPanel name='foobar' />).toJSON()
    expect(ip).toMatchSnapshot()
  })

  it('renders the description section', () => {
    const { container } = render(<InfoPanel name='foobar' linkedinurl='foo' githuburl='bar' />)
    expect(container.querySelector('.Description')).toBeInTheDocument()
  })

  describe('with links', () => {
    // TODO: I can't seem to do all of these with one render. Would like that
    it('renders the link paragraph', () => {
      const { container } = render(<InfoPanel name='foobar' linkedinurl='foo' githuburl='bar' />)
      expect(container.querySelector('.LinkParagraph')).toBeInTheDocument()
    })

    it('renders the GitHub link', () => {
      const { queryByAltText } = render(<InfoPanel name='foobar' linkedinurl='foo' githuburl='bar' />)
      const githubIcon = queryByAltText(/GitHub link/i)
      const a = githubIcon.closest('a')

      expect(a).toHaveAttribute('href', 'bar')
      expect(githubIcon).toBeInTheDocument()
    })

    it('renders the LinkedIn link', () => {
      const { queryByAltText } = render(<InfoPanel name='foobar' linkedinurl='foo' githuburl='bar' />)
      const linkedinIcon = queryByAltText(/LinkedIn link/i)
      const a = linkedinIcon.closest('a')

      expect(a).toHaveAttribute('href', 'foo')
      expect(linkedinIcon).toBeInTheDocument()
    })
  })

  describe('without links', () => {
    // TODO: I can't seem to do all of these with one render. Would like that
    it('does not render the link paragraph', () => {
      const { container } = render(<InfoPanel name='foobar' />)
      expect(container.querySelector('.LinkParagraph')).toBeFalsy()
    })

    it('does not render any links', () => {
      const { container } = render(<InfoPanel name='foobar' />)
      expect(container.querySelector('a')).toBeFalsy()
    })
  })
})
