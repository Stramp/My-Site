import styled, { css } from 'styled-components'

export const Box = styled.div`
  ${({ theme }) => css`
    width: 100%;
    color: ${theme.colors.white};
    text-align: center;
    flex-direction: column;
    h1 {
      font-size: 2rem;
      line-height: 1.5rem;
      letter-spacing: 0.01em;
      text-transform: uppercase;
      margin-bottom: ${theme.spacings.xxsmall};
      span {
        font-weight: bold;
        font-size: 2.3rem;
        line-height: 1.5rem;
        color: ${theme.colors.primary};
      }
    }
    h3 {
      font-weight: normal;
      font-size: ${theme.font.sizes.xxmedium};
      line-height: ${theme.font.sizes.small};
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: ${theme.spacings.xsmall};
    }
  `}
`
