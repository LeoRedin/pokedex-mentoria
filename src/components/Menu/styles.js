import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

export const Container = styled.div`
  display: flex;
`
export const Content = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
`
export const Logout = styled.div`
  display: flex;
  margin-left: 50%;
  cursor: pointer;
`

export const LogoutButton = styled.a`
  display: flex;
  text-decoration: none;
  color: #fff;
  margin: 0 15px;
  font-size: 1.1em;
  font-weight: bold;

  &::active {
    text-decoration: none;
    color: #fff;
  }
`

export const Link = styled(NavLink)`
  display: flex;
  text-decoration: none;
  color: #fff;
  margin: 0 15px;
  font-size: 1.1em;
  font-weight: bold;

  &::active {
    text-decoration: none;
    color: #fff;
  }
`
