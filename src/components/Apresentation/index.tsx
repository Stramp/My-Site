import * as S from './styles'

const Animation = () => {
  return (
    <h1>
      EU SOU <span>RAFAEL</span>
    </h1>
  )
}

const Apresentation = ({
  saudation = 'salve pessoas!',
  description = `Projeto meu site profissional, curriculum, fotos, historico, projetos Projeto meu
site profissional, curriculum, fotos, historico, projetos Projeto meu site
profissional, curriculum, fotos, historico, projetos`
}) => {
  return (
    <S.Box>
      <h3>{saudation}</h3>
      <Animation />
      <p>{description}</p>
    </S.Box>
  )
}

export default Apresentation
