'use client'

import { FiSun, FiMoon} from "react-icons/fi"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import Image from "next/image"

export default function ThemeSwitch(){
  const [mounted, setMounted] = useState(false)
  const {resolvedTheme, setTheme} = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return (
    <Image
      src=""
      width={36}
      height={36}
      sizes="36x36"
      alt="Loading Light/Dark toggle"
      priority={false}
    />
  )

  if (resolvedTheme === 'dark'){
    return <FiSun onClick={() => setTheme('light')} />
  }
  if (resolvedTheme === 'light'){
    return <FiMoon onClick={() => setTheme('dark')} />
  }
}