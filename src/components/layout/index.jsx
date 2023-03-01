import { Header } from './Header.jsx'
import { Footer } from './Footer.jsx'

import Box from '@mui/material/Box';

export const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight : '100vh',
        backgroundColor: 'primary.dark',
      }}
    >
      <Header />
      <main>{children}</main>
      <Footer />
    </Box>
  )
}