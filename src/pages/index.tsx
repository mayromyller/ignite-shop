import Image from 'next/future/image'

import Shirt1 from '../assets/shirts/1.png'
import Shirt2 from '../assets/shirts/2.png'
import Shirt3 from '../assets/shirts/3.png'

import * as S from '../styles/pages/home'

export default function Home() {
  return (
    <S.Container>
      <S.Product>
        <Image src={Shirt1} width={520} height={480} alt="" />

        <S.Footer>
          <strong>Camiseta Premier League</strong>
          <span>R$ 79,90</span>
        </S.Footer>
      </S.Product>

      <S.Product>
        <Image src={Shirt2} width={520} height={480} alt="" />

        <S.Footer>
          <strong>Camiseta Premier League</strong>
          <span>R$ 79,90</span>
        </S.Footer>
      </S.Product>
    </S.Container>
  )
}
