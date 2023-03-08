import { Box, Divider, IconButton, Typography, useTheme } from '@mui/material'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FlexBetween from '@/components/FlexBetween'
import WidgetWrapper from '@/components/WidgetWrapper'
import { setPost } from '@/state'

function ContactFormWidget() {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.token)

  const { palette } = useTheme()
  const { main } = palette.neutral
  const primary = palette.primary.main

  return <WidgetWrapper>ContactFormWidget</WidgetWrapper>
}

export default ContactFormWidget
