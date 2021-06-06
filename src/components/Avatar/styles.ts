import styled, { css } from 'styled-components'

export const Box = styled.div`
  ${({ theme }) => css`
    width: 11.7rem;
    height: 11.7rem;
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 99px;
  `}
`
export const Avatar = styled.div`
  ${({ theme }) => css`
    width: 10.7rem;
    height: 10.7rem;
    img {
      object-fit: cover;
      width: 11.7rem;
      height: 11.7rem;
    }
    background-color: ${theme.colors.primary};
    border-radius: 99px;
    overflow: hidden;
  `}
`
