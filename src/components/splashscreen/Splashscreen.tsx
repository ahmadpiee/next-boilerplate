import Image from 'next/image'
import anime from 'animejs'
import { useEffect, useState } from 'react'
import LogoBlack from '@public/assets/images/LogoBlack.png'

export interface SplashscreenProps {
  finishLoading?: any
}

const Splashscreen: React.FC<SplashscreenProps> = ({
  finishLoading,
}): JSX.Element => {
  const [isMounted, setIsMounted] = useState<Boolean>(false)

  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    })
    loader.add({
      targets: '#logo',
      delay: 0,
      scale: 1.25,
      duration: 1000,
      easing: 'easeInOutExpo',
    })
  }

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10)
    animate()
    return () => clearTimeout(timeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="flex-center">
      <Image
        id="logo"
        alt="asof-logo"
        src={LogoBlack}
        width={100}
        height={100}
      />
    </div>
  )
}

export default Splashscreen
