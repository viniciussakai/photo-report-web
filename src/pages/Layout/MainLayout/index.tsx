import React from 'react'
import { Container, Logo, MainContent, Nav, NavItem } from './styles'

import { Outlet } from 'react-router-dom'
import logo from 'assets/logo.svg'

const MainLayout: React.FC = () => {
  return (
    <>
      <Container>
        <Logo src={logo} />
        <Nav>
          <NavItem active>Home</NavItem>
          <NavItem>Clientes</NavItem>
          <NavItem>Orçamentos</NavItem>
          <NavItem>Relatorios</NavItem>
        </Nav>
      </Container>
      <MainContent>
        <Outlet />
      </MainContent>
    </>
  )
}

export default MainLayout
