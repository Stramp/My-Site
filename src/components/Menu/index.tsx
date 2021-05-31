import { useState } from 'react'
import * as S from './styles'

const Menu = () => {
  const proviDataMenu = [
    {
      id: 1,
      label: 'Home',
      action: 'scroller=0',
      ico: null
    },
    {
      id: 2,
      label: 'Sobre Mim',
      action: 'teste',
      ico: null
    },
    {
      id: 3,
      label: 'Portifolio',
      action: 'scroller=0',
      ico: null
    },
    {
      id: 4,
      label: 'Contato',
      action: 'teste',
      ico: null
    }
  ]
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <S.BtnOpen aria-label="Open Menu" onClick={() => setIsOpen(true)}>
        <svg width="18" height="14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#fff"
            d="M.607 12.377H17.82v1.148H.607zM.607 6.639H17.82v1.148H.607zM.607.902H17.82V2.05H.607z"
          />
        </svg>
      </S.BtnOpen>
      <S.Navigation aria-hidden={!isOpen} isOpen={isOpen}>
        <S.BtnClose aria-label="Close Menu" onClick={() => setIsOpen(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <defs />
            <path fill="#666" d="M1 1l12.171 12.171-.811.812L.188 1.812z" />
            <path fill="#666" d="M0 13L12.171.829l.812.811L.812 13.812z" />
          </svg>
        </S.BtnClose>
        <ul>
          {proviDataMenu.map(item => (
            <li key={item.id}>{item.label}</li>
          ))}
        </ul>
      </S.Navigation>
    </>
  )
}

export default Menu
