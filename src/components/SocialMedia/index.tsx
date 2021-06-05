/* eslint-disable react/display-name */
import * as S from './styles'
import Instagram from 'components/icos/Instagram'
import Github from 'components/icos/Github'
import Whatsapp from 'components/icos/Whatsapp'
import Linkedin from 'components/icos/Linkedin'
export type BoxProps = {
  justifyFlex?: string
}

const SocialMedia = ({ justifyFlex = 'center' }: BoxProps) => {
  const proviSocialData = [
    {
      id: 1,
      link: 'http://instagram.com/rafaelcostart2',
      name: null,
      list: 'instagram'
    },
    {
      id: 2,
      link: 'http://github.com/stramp',
      name: null,
      list: 'github'
    },
    {
      id: 3,
      link: 'http://linkedin.com/in/rafaelcostart2',
      name: null,
      list: 'linkedin'
    },
    {
      id: 4,
      link: 'http://linkedin.com/in/rafaelcostart2',
      name: null,
      list: 'whatsapp'
    }
  ]

  return (
    <S.Box justifyFlex={justifyFlex}>
      {proviSocialData.map(item => (
        <S.Item key={item.id} href={item.link} target="_blank">
          {item.list == 'instagram' ? (
            <Instagram />
          ) : item.list == 'github' ? (
            <Github />
          ) : item.list == 'whatsapp' ? (
            <Whatsapp />
          ) : (
            <Linkedin />
          )}
        </S.Item>
      ))}
    </S.Box>
  )
}

export default SocialMedia
