import styled, { css } from 'styled-components'

type MenuProps = {
  isOpen?: boolean
}

export const BtnOpen = styled.div`
  ${({ theme }) => css`
    width: 3.5rem;
    height: 3.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: ${theme.colors.primary};
    border-radius: ${theme.border.radius};
    position: absolute;
    top: ${theme.spacings.xsmall};
    left: ${theme.spacings.xsmall};
  `}
`
export const BtnClose = styled.div`
  ${({ theme }) => css`
    width: 3.5rem;
    padding: 0.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: absolute;
    top: ${theme.spacings.xsmall};
    left: ${theme.spacings.xsmall};
  `}
`
export const Navigation = styled.nav<MenuProps>`
  ${({ theme, isOpen }) => css`
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    padding-top: 10vh;
    background-color: ${theme.colors.mainBg};
    padding-left: ${theme.spacings.small};
    z-index: ${theme.layers.menu};
    opacity: ${isOpen ? 1 : 0};
    pointer-events: ${isOpen ? 'all' : 'none'};
    font-size: 14px;
    line-height: 11px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${theme.colors.primaryText};
    > ul {
      list-style: none;
      li {
        margin-bottom: ${theme.spacings.xsmall};
      }
    }
  `}
`
