import React from 'react'
import { Typography, Box, ButtonBase } from '@mui/material'

import { useIsPC } from 'src/libs/utils'
import { theme } from 'src/components/theme'
//import { Colors } from 'src/components/atoms'

export interface PriceListProps {
  width?: string | number
  disable?: boolean
}

const priceItems = [
  {
    buySell: '',
    price: '',
    qty: '',
    quoteId: '',
  }
]

// FIXME: reload button

export const PriceList = (_: PriceListProps) => {
  const isPC = useIsPC()
  return (
    <>
      <Box
        component={'nav'}
        sx={{
          bgcolor: '#F8F8FB',
          position: isPC ? 'absolute' : 'block',
          height: 'calc(100% - 48px)',
          borderRight: '1px solid #E3E8EE'
        }}
      >
        <Box display="flex" flexDirection="column" height="100%">
          <Box pb="32px" height="100%">
            {priceItems.map(({ buySell, price, qty, quoteId }, index) => {
              return (
                <ButtonBase
                  sx={{
                    position: 'relative',
                    color: theme.palette.text.primary,
                    padding: '15px 15px',
                    display: 'flex',
                    alignItems: 'center',
                    height: '44px',
                    width: '100%',
                    justifyContent: 'flex-start'
                  }}
                >
                  {buySell} : {price} : {qty}
                  <Box width="10px" />
                  <Typography variant="body2">{quoteId}</Typography>
                </ButtonBase>
              )
            })}
          </Box>
        </Box>
      </Box>
    </>
  )
}
