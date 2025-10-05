'use client'

import Script from 'next/script'
import {useEffect} from 'react'

export default function SenderEmbed() {
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).sender) {
      ;(window as any).sender('fb8f4a73416263')
    }
  }, [])

  return (
    <>
      <Script src="/sender.js" strategy="afterInteractive" />
      <div style={{textAlign: 'center'}} className="sender-form-field" data-sender-form-id="aKrGWR" />
    </>
  )
}
