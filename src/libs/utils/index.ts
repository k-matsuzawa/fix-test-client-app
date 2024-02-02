import { useMediaQuery, useTheme } from '@mui/material'

export const useIsPC = () => {
  const theme = useTheme()
  const isPC = useMediaQuery(theme.breakpoints.up('md'))
  return isPC
}

export const isJson = (text: string) => {
  try {
    JSON.parse(text)
  } catch (e) {
    return false
  }
  return true
}
