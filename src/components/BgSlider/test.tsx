import { renderWithTheme } from 'utils/tests/helpers'

import BgSlider from '.'

describe('<BgSlider />', () => {
  it('should render element', () => {
    const { container } = renderWithTheme(<BgSlider />)

    expect(container.firstChild).toBeInTheDocument()
  })
})
