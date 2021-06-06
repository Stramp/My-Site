import { renderWithTheme } from 'utils/tests/helpers'

import Avatar from '.'

describe('<Avatar />', () => {
  it('should render element', () => {
    const { container } = renderWithTheme(<Avatar />)

    expect(container.firstChild).toBeInTheDocument()
  })
})
