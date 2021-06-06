import { renderWithTheme } from 'utils/tests/helpers'

import Timeline from '.'

describe('<Timeline />', () => {
  it('should render element', () => {
    const { container } = renderWithTheme(<Timeline />)

    expect(container.firstChild).toBeInTheDocument()
  })
})
