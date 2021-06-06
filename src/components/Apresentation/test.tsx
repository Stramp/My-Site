import { renderWithTheme } from 'utils/tests/helpers'

import Apresentation from '.'

describe('<Apresentation />', () => {
  it('should render element', () => {
    const { container } = renderWithTheme(<Apresentation />)

    expect(container.firstChild).toBeInTheDocument()
  })
})
