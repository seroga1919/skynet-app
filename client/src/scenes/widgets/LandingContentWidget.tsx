import {
  Box,
  Divider,
  IconButton,
  Typography,
  useTheme,
  Button,
  Grid,
} from '@mui/material'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined'
import FindInPageOutlinedIcon from '@mui/icons-material/FindInPageOutlined'
import ToggleOnOutlinedIcon from '@mui/icons-material/ToggleOnOutlined'
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined'
import { Feather } from 'feather-icons-react'
import { setPost } from '@/state'
import WidgetWrapper from '@/components/WidgetWrapper'
import FlexBetween from '@/components/FlexBetween'
import { ReactComponent as AppStoreDark } from '@/assets/app-store-dark.svg'
import { ReactComponent as PlayStoreDark } from '@/assets/play-store-dark.svg'

function LandingContentWidget() {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.token)
  const { t } = useTranslation()

  const { palette } = useTheme()
  const { medium } = palette.neutral
  const primary = palette.primary.main

  return (
    <WidgetWrapper>
      <FlexBetween container spacing={1}>
        <Box p="1rem 0">
          <Typography
            variant="h2"
            component="h2"
            color={medium}
            sx={{ mb: 2, fontSize: '1.5rem' }}
          >
            {t('home_right_talent')}
          </Typography>
          <Typography
            variant="h1"
            component="h1"
            sx={{ fontWeight: 700, mb: 2, fontSize: '3rem' }}
          >
            {t('home_heading')}
          </Typography>
          <Box display="flex" alignItems="center" sx={{ mb: 2 }} gap="1rem">
            <SpeedOutlinedIcon />
            <Typography
              variant="h3"
              component="h3"
              color={medium}
              sx={{ fontSize: '1rem' }}
            >
              {t('home_subheading')}
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" sx={{ mb: 2 }} gap="1rem">
            <FindInPageOutlinedIcon />
            <Typography
              variant="h3"
              component="h3"
              color={medium}
              sx={{ fontSize: '1rem' }}
            >
              {t('home_subheading2')}
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" sx={{ mb: 2 }} gap="1rem">
            <Feather />
            <Typography
              variant="h3"
              component="h3"
              color={medium}
              sx={{ fontSize: '1rem' }}
            >
              {t('home_subheading3')}
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" sx={{ mb: 2 }} gap="1rem">
            <NotificationsActiveOutlinedIcon />
            <Typography
              variant="h3"
              component="h3"
              color={medium}
              sx={{ fontSize: '1rem' }}
            >
              {t('home_subheading4')}
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" sx={{ mb: 2 }} gap="1rem">
            <ToggleOnOutlinedIcon />
            <Typography
              variant="h3"
              component="h3"
              color={medium}
              sx={{ fontSize: '1rem' }}
            >
              {t('home_subheading5')}
            </Typography>
          </Box>
          <Box height="3vh" />
          <Typography
            variant="h2"
            component="h2"
            fontWeight="bold"
            sx={{ mb: 2, fontSize: '1.2rem' }}
          >
            {t('home_try')}
          </Typography>
          <Box display="flex" alignItems="center" sx={{ my: 2 }} gap="0.5rem">
            <AppStoreDark />
            <PlayStoreDark />
          </Box>
          <Typography
            variant="h3"
            component="h3"
            color={medium}
            sx={{ fontSize: '1rem' }}
          >
            {t('home_subheading6')}
          </Typography>
        </Box>
        <Box p="1rem 0" alignItems="center" justifyContent="center" width="50%">
          {/* <Deal width="25vw" alignItems="center" justifyContent="center" /> */}
          <img src="./assets/man.png" alt="man" height="390vh" />
        </Box>
      </FlexBetween>

      <Divider />

      {/* BUTTONS */}
      <Box p="1rem 0">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap="1rem"
        >
          <Button variant="contained" size="large">
            {t('home_button1')}
          </Button>
          <Button variant="contained" size="large">
            {t('home_button2')}
          </Button>
        </Box>
      </Box>
    </WidgetWrapper>
  )
}

export default LandingContentWidget
