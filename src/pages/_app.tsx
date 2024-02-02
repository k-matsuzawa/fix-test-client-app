import React, { useEffect, useState } from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { ThemeProvider } from '@mui/material/styles'
import { ToastContainer } from 'react-toastify'
import CssBaseline from '@mui/material/CssBaseline'
import { theme } from 'src/components/theme'

import '../style.css'
import '../App.css'

// https://github.com/tauri-apps/tauri-plugin-log#usage
// import { trace, info, error, attachConsole } from "tauri-plugin-log";

const MyApp = (props: AppProps) => {
  const { Component, pageProps } = props
  const router = useRouter()
  const [isInitilaize, setIsInitialize] = useState(false)

  useEffect(() => {
    if (!isInitilaize) {
      const pathname = router.pathname?.split('/')?.[0]
      if (pathname === 'login') {
        setIsInitialize(true)
        return
      }
      router.replace(pathname ? `/login?redirect=${pathname}` : '/login').then(() => setIsInitialize(true))
    }
  }, [isInitilaize, router])

  //useEffect(() => {
  //  const jssStyles = document.querySelector('#jss-server-side')
  //  if (jssStyles && jssStyles.parentNode) jssStyles.parentNode.removeChild(jssStyles)
  //}, [])

  return (
    <>
      <Head>
        <title>FIX test client App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <ThemeProvider theme={theme}>
        <CssBaseline />
        {isInitilaize && <Component {...pageProps} />}
        <ToastContainer style={{ width: 'auto', minWidth: '144px' }} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
