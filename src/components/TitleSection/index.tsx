import * as S from './styles'

const TitleSection = ({ title = 'Meus Serviços' }) => {
  const titleSplited = title.split(' ')
  return (
    <S.Box>
      <h2>
        {titleSplited[0]} <span>{titleSplited[1]}</span>
      </h2>
      <div className="shadow">{titleSplited[1]}</div>
      <S.Bar />
    </S.Box>
  )
}

export default TitleSection
