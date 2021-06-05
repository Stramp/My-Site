import styled, { css } from 'styled-components'

export const Box = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 24.6rem;
    overflow: hidden;
  `}
`

export const Btn = styled.button`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    width: 26px;
    height: 26px;
    padding: 0.6rem;
    border-radius: 5px 0px 0px 5px;
    cursor: pointer;
    border: none;
    svg {
      color: ${theme.colors.white};
    }
    background-color: ${theme.colors.primary};
  `}
`

export const SettingsBox = styled.div`
  ${({ theme }) => css`
    p {
      color: ${theme.colors.primaryText};
      font-weight: normal;
      font-size: 12px;
      line-height: 11px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: ${theme.spacings.xxsmall};
    }
    background-color: ${theme.colors.white};
    border: 0.5px solid #404040;
    box-sizing: border-box;
    width: 24.6rem;
    border-radius: 5px 0px 0px 5px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    padding: ${theme.spacings.xxsmall};
  `}
`
export const Colors = styled.div`
  ${({ theme }) => css`
    grid-column-start: 1;
    grid-column-end: 3;
    margin-bottom: ${theme.spacings.xsmall};
    ul {
      list-style: none;
      display: flex;
      justify-content: space-between;
      li {
        width: 25px;
        height: 25px;
        background: #b2ac00;
        border-radius: 5px;
      }
    }
  `}
`
export const Languages = styled.div`
  ${({ theme }) => css`
    div {
      display: flex;
      align-items: center;
    }
    svg {
      width: 2.4rem;
      height: 2.4rem;
      margin-right: ${theme.spacings.xxsmall};
    }
  `}
`
export const DarkMode = styled.div`
  ${() => css`
    svg {
      width: 2.4rem;
      height: 2.4rem;
    }
  `}
`
