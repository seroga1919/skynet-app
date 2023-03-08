/** @format */
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined'
import { Box, Typography, Divider, useTheme, Button } from '@mui/material'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import WidgetWrapper from '@/components/WidgetWrapper'
import FlexBetween from '@/components/FlexBetween'
import { ReactComponent as Harju } from '@/assets/harju.svg'
import { ReactComponent as Harmet } from '@/assets/harmet.svg'

function PartnersWidget() {
  const { palette } = useTheme()
  const navigate = useNavigate()
  const token = useSelector((state) => state.token)
  const { dark } = palette.neutral
  const { medium } = palette.neutral
  const { main } = palette.neutral

  return (
    <WidgetWrapper>
      {/* FIRST ROW */}
      <FlexBetween gap="0.5rem" pb="1.1rem">
        <FlexBetween gap="1rem">
          <HandshakeOutlinedIcon />
          <Box>
            <Typography variant="h4" color={dark} fontWeight="500">
              Partners
            </Typography>
          </Box>
        </FlexBetween>
      </FlexBetween>

      <Divider />

      {/* SECOND ROW */}
      <Box p="1rem 0">
        <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
          <Harju width="100%" />
        </Box>
      </Box>

      <Divider />

      {/* THIRD ROW */}
      <Box p="1rem 0">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap="1rem"
          mb="0.5rem"
        >
          <Harmet width="35%" />
        </Box>
      </Box>

      <Divider />

      {/* FOURTH ROW */}
      <Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap="1rem"
        >
          <h3>RANDERS OÜ</h3>
        </Box>
      </Box>

      <Divider />

      {/* FIFTH ROW */}
      <Box p="1rem 0">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap="1rem"
        >
          <Button variant="contained" size="large">
            Become one
          </Button>
        </Box>
      </Box>
    </WidgetWrapper>
  )
}

export default PartnersWidget
