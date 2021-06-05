import * as S from './styles'

const BgSlider = () => {
  return (
    <S.Box>
      <S.Overlay>
        <div className="primary-color" />
        <div className="black-alpha" />
      </S.Overlay>
      <S.Imagem
        src="https://strapi-my-site.s3.us-east-2.amazonaws.com/922196_10201240149469054_812651790_o_c17a5f87db.jpg"
        alt=""
      />
    </S.Box>
  )
}

export default BgSlider
