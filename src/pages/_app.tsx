import Image from 'next/future/image'

import { globalStyle } from '../styles/global'

import * as S from '../styles/pages/app'

import logoSVG from '../assets/logo.svg'

globalStyle()

export default function App({ Component, pageProps }) {
  return (
    <S.Container>
      <S.Header>
        <Image src={logoSVG} alt="" />
      </S.Header>

      <Component {...pageProps} />
    </S.Container>
  )
}
