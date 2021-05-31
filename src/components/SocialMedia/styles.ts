import styled, { css } from 'styled-components'
import { BoxProps } from './index'
export const Box = styled.nav<BoxProps>`
  ${({ theme, justifyFlex }) => css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: ${justifyFlex};
  `}
`

export const Item = styled.a`
  ${({ theme }) => css`
    svg {
      color: ${theme.colors.black};
      width: 2.6rem;
      height: 2.6rem;
      margin-right: ${theme.spacings.xxsmall};
    }
  `}
`
