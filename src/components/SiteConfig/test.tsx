import { renderWithTheme } from 'utils/tests/helpers'

import SiteConfig from '.'

describe('<SiteConfig />', () => {
  it('should render element', () => {
    const { container } = renderWithTheme(<SiteConfig />)

    expect(container.firstChild).toBeInTheDocument()
  })
})
