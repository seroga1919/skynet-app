import React, { useState } from 'react'
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material'
import { useNavigate, Link } from 'react-router-dom'
import Form from './Form'

function LoginPage() {
  const theme = useTheme()
  const navigate = useNavigate()
  const isNonMobileScreens = useMediaQuery('(min-width: 1000px)')

  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
        display="flex"
        justifyContent="center"
      >
        <Typography
          fontWeight="bold"
          fontSize="clamp(1rem, 1.88rem, 2.25rem)"
          color="primary"
        >
          SKY
        </Typography>
        <Typography
          fontWeight="bold"
          fontSize="clamp(1rem, 1.88rem, 2.25rem)"
          color="neutral.dark"
        >
          NET
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? '50%' : '93%'}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.primary.darkMain}
      >
        <Form />
      </Box>
    </Box>
  )
}

export default LoginPage
