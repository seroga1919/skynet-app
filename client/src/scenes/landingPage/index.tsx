import { Box } from '@mui/material'
import LandingNavbar from '@/scenes/landingNavbar'
import FlexBetween from '@/components/FlexBetween'
import LandingBody from '@/scenes/landingPage/LandingBody'

function LandingPage() {
  return (
    <div>
      <Box>
        <LandingNavbar />
        <LandingBody />
      </Box>
    </div>
  )
}

export default LandingPage
