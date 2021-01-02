import styled from 'styled-components'
import theme from '@config/theme'

export const Container = styled.div`
  height: 60px;
  width: 100%;
  position: relative;

  padding: 15px;

  display: flex;
  align-items: center;

  background-color: #ffffff;
`

export const Logo = styled.img`
  width: 200px;
  height: 100%;

  justify-self: start;
`

export const Nav = styled.nav`
  position: absolute;
  top: calc(50%-15px);
  left: calc(50% - 250px);
  width: 500px;
  height: 100%;

  display: flex;
  justify-self: center;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 800px) {
    display: none;
  }
`

type INavItem = { active?: boolean }
export const NavItem = styled.a<INavItem>`
  font-weight: 700;
  margin: auto;

  color: ${props => (props.active ? theme.linkActive : theme.linkColor)};
  text-decoration: none;

  &:hover {
    font-weight: 700;
    color: ${theme.linkActive};
  }
`
export const MainContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px;
`
