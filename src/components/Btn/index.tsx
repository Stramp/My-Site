import ContactIco from 'components/icos/ContactIco'
import DownloadICo from 'components/icos/DownloadICo'
import HomeIco from 'components/icos/HomeIco'
import PortifolioIco from 'components/icos/PortifolioIco'
import ProfileIco from 'components/icos/ProfileIco'
import ServicesIco from 'components/icos/ServicesIco'
import Whatsapp from 'components/icos/Whatsapp'
import * as S from './styles'

export type ButtonProps = {
  label?: string
  ico?: string
  color?: string
  size?: string
  action?: () => void
}

const Btn = ({
  label = 'Btn',
  ico = 'download',
  action,
  color = 'red',
  size = 'large'
}: ButtonProps) => {
  return (
    <S.Box onClick={action} ico={ico} color={color} size={size}>
      {ico == 'download' ? (
        <DownloadICo />
      ) : ico == 'home' ? (
        <HomeIco />
      ) : ico == 'whatsapp' ? (
        <Whatsapp />
      ) : ico == 'portifolio' ? (
        <PortifolioIco />
      ) : ico == 'contact' ? (
        <ContactIco />
      ) : ico == 'services' ? (
        <ServicesIco />
      ) : (
        <ProfileIco />
      )}
      {label}
    </S.Box>
  )
}

export default Btn
