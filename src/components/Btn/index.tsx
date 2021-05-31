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
  ico = 'https://strapi-my-site.s3.us-east-2.amazonaws.com/image_fd257522c6.svg',
  action,
  color = 'red',
  size = 'large'
}: ButtonProps) => {
  return (
    <S.Box onClick={action} ico={ico} color={color} size={size}>
      {label}
    </S.Box>
  )
}

export default Btn
