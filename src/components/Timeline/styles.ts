import styled, { css } from 'styled-components'

export const Box = styled.div`
  ${({ theme }) => css`
    h3 {
      font-weight: 500;
      font-size: 18px;
      line-height: 16px;
      text-transform: uppercase;
      color: ${theme.colors.primaryText};
      margin-bottom: ${theme.spacings.xsmall};
    }
    .geral {
      border-left: 2px solid ${theme.colors.primaryText};
      margin-left: 0.5rem;
    }
  `}
`
export const Card = styled.article`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xsmall};
    position: relative;
    right: 0.6rem;
    display: flex;
    .indicate {
      display: flex;
      align-items: center;
      position: relative;
      bottom: 7rem;
      &::before {
        content: '';
        width: 10px;
        height: 10px;
        left: 14px;
        top: 414px;
        background: #ffffff;
        border: 1px solid #709c3f;
        box-sizing: border-box;
        border-radius: 5px;
        display: block;
      }
      &::after {
        content: '';
        height: 2px;
        width: 10px;
        left: 27px;
        top: 605px;
        border: 1px solid #709c3f;
        box-sizing: border-box;
        border-radius: 5px;
        display: block;eee
      }
    }
    .body {
      padding: ${theme.spacings.xsmall};
      padding-right: ${theme.spacings.xxsmall};
      background: #ffffff;
      border: solid #a6a6a6;
      border-width: 1px 2px;
      box-sizing: border-box;
      border-left: solid #709c3f;
      box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
      border-radius: 6px;
      width: 290px;
    }
    h4 {
      font-weight: 500;
      font-size: 18px;
      line-height: 16px;
      text-transform: uppercase;
      color: ${theme.colors.primaryText};
      margin-bottom: ${theme.spacings.xxsmall};
    }
    div {
      span {
        font-weight: 300;
        font-size: 10px;
        line-height: 17px;
        letter-spacing: 0.01em;
        color: ${theme.colors.primaryText};
      }
    }
    .description {
      color: ${theme.colors.primaryText};
      font-weight: 300;
      font-size: 12px;
      line-height: 17px;
      display: flex;
      align-items: center;
      letter-spacing: 0.01em;
      margin-top: ${theme.spacings.xsmall};
    }
  `}
`
