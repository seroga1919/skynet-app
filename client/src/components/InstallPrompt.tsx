import { useState, useEffect } from 'react'
import { Button, Box } from '@mui/material'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'

function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null)
  const [showInstallPrompt, setShowInstallPrompt] = useState(false)

  const { t } = useTranslation()

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault()
      setDeferredPrompt(event)
      setShowInstallPrompt(true)
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)

    return () => {
      window.removeEventListener(
        'beforeinstallprompt',
        handleBeforeInstallPrompt
      )
    }
  }, [])

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt()
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt')
        } else {
          console.log('User dismissed the install prompt')
        }
        setDeferredPrompt(null)
        setShowInstallPrompt(false)
      })
    }
  }

  return (
    <Box>
      {showInstallPrompt && (
        <Button
          style={{ whiteSpace: 'nowrap' }}
          onClick={handleInstallClick}
          variant="contained"
          size="large"
        >
          {t('link_install')}
        </Button>
      )}
    </Box>
  )
}

export default InstallPrompt
