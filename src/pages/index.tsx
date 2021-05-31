import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

import Section from 'components/Section'

export default function Home() {
  const text = useRef<HTMLHeadingElement>(null)
  console.log('text.current', text.current)
  return (
    <div>
      <Section ref={text} id="teste" />
      <Section id="teste2" />
    </div>
  )
}
