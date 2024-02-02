import React, { useState, useCallback } from 'react'
import { useRouter } from 'next/router'
import { invoke } from '@tauri-apps/api/tauri'
import Box from '@mui/material/Box'
import { Button, TextField, FormControl, FormLabel, Stack } from '@mui/material'

export const Login = () => {
  const router = useRouter()
  const [senderCompId, setSenderCompId] = useState('')
  const [senderSubId, setSenderSubId] = useState('')
  const [targetCompId, setTargetCompId] = useState('')
  const [targetSubId, setTargetSubId] = useState('')
  const [securityExchange, setSecurityExchange] = useState('')
  const [symbol, setSymbol] = useState('')
  const [ordType, setOrdType] = useState('')
  const [timeInForce, setTimeInForce] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const login = useCallback(async () => {
    try {
      setErrorMessage('')
      await invoke('login', {
        senderCompId,
        senderSubId,
        targetCompId,
        targetSubId,
        securityExchange,
        symbol,
        ordType,
        timeInForce,
      })
      // When the screen changes, isSubmitting is not returned.
      router.replace('/')
    } catch (e: unknown) {
      console.error(e)
      setErrorMessage(e instanceof Error ? e.message : `${e}`)
      setIsSubmitting(false)
    }
  }, [senderCompId, senderSubId, router, setErrorMessage, setIsSubmitting])

  const isDisplayError = useCallback(() => (errorMessage ? true : false), [errorMessage])

  const canSubmit = useCallback(
    () => !isSubmitting && !!senderCompId,
    [isSubmitting, senderCompId]
  )

  return (
    <>
      <Stack
        sx={{
          width: '100%',
          height: 1,
          bgcolor: 'white',
          p: '16px',
          px: '32px'
        }}
      >
        <Box>
          <Box sx={{ pt: '4px', pb: '32px', fontWeight: 'bold' }}>Input login info.</Box>
          <TextField
            label="SenderCompID"
            name="senderCompId"
            value={senderCompId}
            onChange={event => setSenderCompId(event.target.value)}
            placeholder="Please input SenderCompID"
            autoComplete="on"
            variant="outlined"
          />
          <TextField
            label="SenderSubID (optional)"
            name="senderSubId"
            value={senderSubId}
            onChange={event => setSenderSubId(event.target.value)}
            placeholder="Please input SenderSubID"
            autoComplete="on"
            variant="outlined"
          />
          <hr />

          <TextField
            label="TargetCompID"
            name="targetCompId"
            value={targetCompId}
            onChange={event => setTargetCompId(event.target.value)}
            placeholder="Please input TargetCompID"
            autoComplete="on"
            variant="outlined"
          />
          <TextField
            label="TargetSubID (optional)"
            name="targetSubId"
            value={targetSubId}
            onChange={event => setTargetSubId(event.target.value)}
            placeholder="Please input TargetSubID"
            autoComplete="on"
            variant="outlined"
          />
          <hr />

          <TextField
            label="SecurityExchange"
            name="securityExchange"
            value={securityExchange}
            onChange={event => setSecurityExchange(event.target.value)}
            placeholder="Please input SecurityExchange"
            autoComplete="on"
            variant="outlined"
          />
          <TextField
            label="Symbol"
            name="symbol"
            value={symbol}
            onChange={event => setSymbol(event.target.value)}
            placeholder="Please input Symbol"
            autoComplete="on"
            variant="outlined"
          />
          <hr />

          <TextField
            label="OrdType"
            name="ordType"
            value={ordType}
            onChange={event => setOrdType(event.target.value)}
            placeholder="Please input OrdType"
            autoComplete="on"
            variant="outlined"
          />
          <TextField
            label="TimeInForce"
            name="timeInForce"
            value={timeInForce}
            onChange={event => setTimeInForce(event.target.value)}
            placeholder="Please input TimeInForce"
            autoComplete="on"
            variant="outlined"
          />

          <Box mb="14px" sx={{ display: () => (isDisplayError() ? 'block' : 'none'), border: 'none' }}>
            <FormControl sx={{ width: 500 }}>
              <FormLabel error>Error: {errorMessage}</FormLabel>
            </FormControl>
          </Box>

          <Box sx={{ bgcolor: 'white', pb: '16px', pl: '16px' }}>
            <Button
              variant="contained"
              onClick={() => {
                setIsSubmitting(true)
                login()
              }}
              disabled={!canSubmit()}
            >
              Login
            </Button>
          </Box>
        </Box>
      </Stack>
    </>
  )
}
