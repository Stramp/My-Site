import { renderWithTheme } from 'utils/tests/helpers'

import Btn from '.'

describe('<Btn />', () => {
  it('should render element', () => {
    const { container } = renderWithTheme(<Btn />)

    expect(container.firstChild).toBeInTheDocument()
  })
})
