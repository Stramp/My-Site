import styled, { css } from 'styled-components'

export const Box = styled.div`
  ${({ theme }) => css`
    h2 {
      font-weight: bold;
      font-size: 2.2rem;
      line-height: 1.5rem;
      text-align: center;
      letter-spacing: 0.01em;
      text-transform: uppercase;
      color: ${theme.colors.primaryText};
      margin-top: ${theme.spacings.small};
    }
    span {
      color: ${theme.colors.primary};
    }
    div.shadow {
      color: ${theme.colors.primaryText};
      opacity: 0.1;
      position: relative;
      font-weight: bold;
      font-size: 46px;
      line-height: 28px;
      text-align: center;
      letter-spacing: 0.01em;
      text-transform: uppercase;
      bottom: 2.1rem;
    }
  `}
`
export const Bar = styled.div`
  ${({ theme }) => css`
    width: 12.2rem;
    height: 0.3rem;
    background: ${theme.colors.primaryText};
    position: relative;
    bottom: 1.5rem;
    margin: auto;
    &::after {
      content: '';
      position: relative;
      left: 13%;
      width: 8.2rem;
      height: 0.3rem;
      display: block;
      background: ${theme.colors.primary};
    }
  `}
`
