import React from 'react'
import { AppBar, Box, ButtonBase, Typography } from '@mui/material'

export interface HeaderProps {
  title?: string
}
export const Header = ({ title = 'FIX test client app' }: HeaderProps) => {
  return (
    <AppBar
      elevation={0}
      position="static"
      variant="outlined"
      sx={{
        backgroundColor: '#001529',
        height: '48px',
        '.MuiToolbar-root': {
          height: '48px !important'
        }
      }}
    >
      <Box
        sx={{
          display: 'flex',
          height: '48px',
          alignItems: 'center',
          px: '16px'
        }}
      >
        <Typography variant="h6">{title}</Typography>
        <ButtonBase></ButtonBase>
      </Box>
    </AppBar>
  )
}
