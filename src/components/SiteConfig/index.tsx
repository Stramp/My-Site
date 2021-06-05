import * as S from './styles'

const SiteConfig = () => {
  return (
    <S.Box>
      <S.Btn>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
          <defs />
          <path
            fill="currentColor"
            d="M13.821 8.682l-1.256-.694a5.208 5.208 0 000-1.982l1.256-.694a.335.335 0 00.162-.395 6.964 6.964 0 00-1.613-2.67.366.366 0 00-.436-.065l-1.256.694a5.63 5.63 0 00-1.793-.99V.5a.342.342 0 00-.277-.33 7.735 7.735 0 00-3.22 0 .342.342 0 00-.277.33v1.388a5.807 5.807 0 00-1.792.991l-1.253-.694a.362.362 0 00-.437.065A6.924 6.924 0 00.016 4.92a.332.332 0 00.163.395l1.256.694a5.208 5.208 0 000 1.982l-1.256.694a.335.335 0 00-.163.395 6.966 6.966 0 001.613 2.67.366.366 0 00.437.065l1.256-.694c.527.435 1.135.77 1.792.99v1.39c0 .157.115.296.277.33 1.083.231 2.191.22 3.22 0a.342.342 0 00.277-.33v-1.39a5.808 5.808 0 001.793-.99l1.256.694a.362.362 0 00.437-.065 6.923 6.923 0 001.612-2.67.342.342 0 00-.165-.398zm-6.823.573c-1.3 0-2.358-1.013-2.358-2.258S5.698 4.74 6.998 4.74s2.36 1.013 2.36 2.258-1.06 2.258-2.36 2.258z"
          />
        </svg>
      </S.Btn>

      <S.SettingsBox>
        <S.Colors>
          <p>Cor Principal</p>
          <ul>
            <li style={{ backgroundColor: 'red' }} />
            <li style={{ backgroundColor: 'green' }} />
            <li style={{ backgroundColor: 'yellow' }} />
            <li style={{ backgroundColor: 'black' }} />
            <li style={{ backgroundColor: 'orange' }} />
            <li style={{ backgroundColor: 'pink' }} />
          </ul>
        </S.Colors>
        <S.Languages>
          <p>Idioma</p>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 25">
              <defs />
              <path fill="#666" d="M12.5 17.3a4.8 4.8 0 010-9.6v9.6z" />
              <path
                fill="#666"
                fillRule="evenodd"
                d="M12.5.5c6.628 0 12 5.372 12 12s-5.372 12-12 12-12-5.372-12-12 5.372-12 12-12zm0 2.4v4.8a4.8 4.8 0 010 9.6v4.8a9.6 9.6 0 110-19.2z"
                clipRule="evenodd"
              />
            </svg>
            <select name="Languages" id="lg">
              <option value="pt-BR">pt-BR</option>
              <option value="en-US">en-US</option>
            </select>
          </div>
        </S.Languages>
        <S.DarkMode>
          <p>Modo Noturno</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 25">
            <defs />
            <path fill="#666" d="M12.5 17.3a4.8 4.8 0 010-9.6v9.6z" />
            <path
              fill="#666"
              fillRule="evenodd"
              d="M12.5.5c6.628 0 12 5.372 12 12s-5.372 12-12 12-12-5.372-12-12 5.372-12 12-12zm0 2.4v4.8a4.8 4.8 0 010 9.6v4.8a9.6 9.6 0 110-19.2z"
              clipRule="evenodd"
            />
          </svg>
        </S.DarkMode>
      </S.SettingsBox>
    </S.Box>
  )
}

export default SiteConfig
