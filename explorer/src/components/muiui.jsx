import { useState } from 'react'
import { Button, Typography, Container, Box } from '@mui/material'

const MuiUi = () => {
  const [showHeading, setShowHeading] = useState(false)

  const eventhandler = () => {
    setShowHeading(!showHeading)
  }

  return (
    <Box
      sx={{
        minHeight: '50vh',
        background: 'linear-gradient(to right,rgb(170, 239, 248),rgb(45, 116, 125))',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 4,
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          backgroundColor: 'white',
          p: 4,
          borderRadius: 4,
          boxShadow: 3,
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" gutterBottom color="primary">
          Welcome to MUI UI Component
        </Typography>

        <Button onClick={eventhandler} variant="contained" color="primary" size="large">
          {showHeading ? 'Hide Message' : 'Show Message'}
        </Button>

        <Box mt={3}>
          {showHeading && (
            <Typography variant="h6" color="secondary">
              You clicked the button!
            </Typography>
          )}
        </Box>
      </Container>
    </Box>
  )
}

export default MuiUi
