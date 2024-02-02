import { Box, Stack, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'

import { Header } from 'src/components/organisms'

export interface LayoutProps {
  hideHeader?: boolean
  title?: string
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const theme = useTheme()
  const isPC = useMediaQuery(theme.breakpoints.up('md'))
  return (
    <Stack sx={{ height: '100vh', overflow: 'hidden' }}>
      <Header />
      <Box
        sx={{
          backgroundColor: theme => theme.palette.background.default,
          width: 1,
          height: 1,
          display: 'flex',
          overflow: 'hidden'
        }}
      >
        <Box sx={{ mx: 'auto', mt: isPC ? '20px' : '16px', width: '100%' }}>{children}</Box>
      </Box>
    </Stack>
  )
}
