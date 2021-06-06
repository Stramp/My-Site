import { renderWithTheme } from 'utils/tests/helpers'

import TitleSection from '.'

describe('<TitleSection />', () => {
  it('should render element', () => {
    const { container } = renderWithTheme(<TitleSection />)

    expect(container.firstChild).toBeInTheDocument()
  })
})
