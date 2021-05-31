import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

import Menu from 'components/Menu'

import Btn from 'components/Btn'
import SocialMedia from 'components/SocialMedia'

export default function Home() {
  const text = useRef<HTMLHeadingElement>(null)
  console.log('text.current', text.current)
  return (
    <div>
      <Menu />
      <Btn />
      <SocialMedia />
    </div>
  )
}
