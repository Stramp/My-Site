import DateIco from 'components/icos/DateIco'
import InstituIco from 'components/icos/InstituIco'
import * as S from './styles'

const listEducation = [
  {
    title: 'Ciencias da computação',
    institu: 'Faculdade Pitogoras',
    initDate: 'Fev 2004',
    endDate: 'Fev 2004',
    description:
      'Projeto meu site profissional, curriculum, fotosprofissional, curriculum, fotos, historico, projetos '
  },
  {
    title: 'Ciencias da comptação2',
    institu: 'Faculdade Pitogoras',
    initDate: 'Fev 2004',
    endDate: 'Fev 2004',
    description:
      'Projeto meu site profissional, profissional, curriculum, fotos, historico, projetos  Projeto meu site profissional, curriculum, fotos, historico, projetos '
  }
]

const Card = ({
  title = '',
  institu = '',
  initDate = '',
  endDate = '',
  description = ''
}) => {
  return (
    <S.Card>
      <div className="indicate"></div>
      <div className="body">
        <h4>{title}</h4>
        <div className="institu">
          <i>
            <InstituIco />
          </i>
          <span>{institu}</span>
        </div>
        <div className="date">
          <i>
            <DateIco />
          </i>
          <span>
            {initDate} - {endDate}
          </span>
        </div>
        <div className="description">{description}</div>
      </div>
    </S.Card>
  )
}

const Timeline = ({ title = 'Formação', list = listEducation }) => {
  return (
    <S.Box>
      <h3>{title}</h3>
      <div className="geral">
        {list.map((item, ind) => (
          <Card
            title={item.title}
            institu={item.institu}
            initDate={item.initDate}
            endDate={item.endDate}
            description={item.description}
            key={ind}
          />
        ))}
      </div>
    </S.Box>
  )
}

export default Timeline
