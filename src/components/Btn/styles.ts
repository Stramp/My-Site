/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components'
import { ButtonProps } from './index'

export const Box = styled.button<ButtonProps>`
  ${({ theme, color, size }) => css`
    width: 21.6rem;
    height: ${size === 'slim' ? '3.4rem' : '4.1rem'};
    border: none;
    border-radius: ${theme.border.radiusBtn};
    background-color: ${color};
    color: ${theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: ${theme.font.semiBold};
    font-size: ${theme.font.sizes.xxmedium};
    line-height: 11px;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    svg {
      width: 1.4rem;
      margin-right: ${theme.spacings.xxsmall};
    }
  `}
`
