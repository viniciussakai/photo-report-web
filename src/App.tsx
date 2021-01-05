import React from 'react'
import GlobalStyle from 'styles/globalStyle'
import MainRoutes from './Routes'

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <MainRoutes />
    </>
  )
}

export default App
