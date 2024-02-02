import React from 'react'
import { Box, Stack } from '@mui/material'
import { Layout } from 'src/components/common'
import { PriceList } from 'src/components/organisms/PriceList'

type InitialProps = {}

type Props = {} & InitialProps

const Index = (_: Props) => {
  return (
    <Layout>
      <Box mx="auto">
        <Stack sx={{ mx: 'auto', width: '100%', px: '32px' }}>
          <PriceList />
        </Stack>
      </Box>
    </Layout>
  )
}

export default Index
