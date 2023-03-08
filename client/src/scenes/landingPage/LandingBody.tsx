import React from 'react'
import { Container, Grid, Box, useMediaQuery } from '@mui/material'
import { useTranslation } from 'react-i18next'
import i18n from 'i18next'
import FlexBetween from '@/components/FlexBetween'
import ContactFormWidget from '@/scenes/widgets/ContactFormWidget'
import LandingContentWidget from '@/scenes/widgets/LandingContentWidget'
import PartnersWidget from '@/scenes/widgets/PartnersWidget'
import TrustNumbersWidget from '@/scenes/widgets/TrustNumbersWidget'

function LandingBody() {
  const isNonMobileScreens = useMediaQuery('(min-width:1000px)')
  const { t } = useTranslation()

  return (
    <Box
      width="100%"
      padding="2rem 6%"
      display={isNonMobileScreens ? 'flex' : 'block'}
      gap="0.5rem"
      justifyContent="space-between"
    >
      <Box flexBasis={isNonMobileScreens ? '68%' : undefined}>
        <LandingContentWidget />
      </Box>
      <Box
        flexBasis={isNonMobileScreens ? '26%' : undefined}
        mt={isNonMobileScreens ? undefined : '2rem'}
      >
        <Box flexBasis="26%">
          <ContactFormWidget />
          <Box m="2rem 0" />
          <TrustNumbersWidget />
          <Box m="2rem 0" />
          <PartnersWidget />
        </Box>
      </Box>
    </Box>
  )
}

export default LandingBody
