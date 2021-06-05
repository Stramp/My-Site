import styled, { css } from 'styled-components'

export const Box = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    overflow: hidden;
  `}
`
export const Overlay = styled.div`
  ${({ theme }) => css`
    overflow: hidden;
    opacity: 0.95;
    .black-alpha {
      width: 100vw;
      height: 100vh;
      background-color: ${theme.colors.black};
      opacity: 0.7;
      position: absolute;
    }
    .primary-color {
      width: 100vw;
      height: 100vh;
      background-color: ${theme.colors.primary};
      position: absolute;
    }
  `}
`
export const Imagem = styled.img`
  ${() => css`
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
  `}
`
