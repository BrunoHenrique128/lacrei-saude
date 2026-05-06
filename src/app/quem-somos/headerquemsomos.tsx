'use client'

import styled from 'styled-components'
import { theme } from '@/app/theme'
import Link from 'next/link'
import { useState } from 'react'

const HeaderWrapper = styled.header`
  background: ${theme.colors.gradientSubtle};
  border-bottom: 1px solid ${theme.colors.emerald20};
  padding: 0 ${theme.spacing.xl};
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 100;

  @media (max-width: 768px) {
    padding: 0 ${theme.spacing.sm};
    background: ${theme.colors.gradientSubtle};
  }
`

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  font-size: 20px;
  font-weight: 800;
  color: ${theme.colors.emerald50};
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.lg};

  @media (max-width: 768px) {
    display: none;
  }
`

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${theme.colors.emerald50};
  font-size: ${theme.fonts.sizes.textBase};
  font-weight: 600;

  &:hover {
    color: ${theme.colors.primary};
  }
`

const ButtonEntrar = styled(Link)`
  background: ${theme.colors.emerald50};
  color: ${theme.colors.white};
  padding: 10px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-size: ${theme.fonts.sizes.textBase};
  font-weight: 700;
  transition: background 0.2s;

  &:hover {
    background: ${theme.colors.primary};
  }
`

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  color: ${theme.colors.emerald50};
  font-size: 24px;

  @media (max-width: 768px) {
    display: block;
  }
`

const MobileMenu = styled.div<{ open: boolean }>`
  display: none;

  @media (max-width: 768px) {
    display: ${({ open }) => (open ? 'flex' : 'none')};
    flex-direction: column;
    gap: 16px;
    position: fixed;
    top: 72px;
    left: 0;
    right: 0;
    background: white;
    padding: ${theme.spacing.sm};
    border-bottom: 1px solid ${theme.colors.emerald20};
    z-index: 99;
  }
`

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <HeaderWrapper>
        <Logo href="/" aria-label="Lacrei Saúde - Página inicial">
          LS Lacrei Saúde
        </Logo>

        <Nav aria-label="Navegação principal">
          <NavLink href="/quem-somos">Quem somos</NavLink>
          <NavLink href="/ajuda">Ajuda</NavLink>
          <ButtonEntrar href="/entrar" aria-label="Entrar na plataforma">
            Entrar
          </ButtonEntrar>
        </Nav>

        <MenuButton
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu de navegação"
          aria-expanded={menuOpen}
        >
          {menuOpen ? '✕' : '☰'}
        </MenuButton>
      </HeaderWrapper>

      <MobileMenu open={menuOpen} role="navigation" aria-label="Menu mobile">
        <NavLink href="/quem-somos" onClick={() => setMenuOpen(false)}>Quem somos</NavLink>
        <NavLink href="/ajuda" onClick={() => setMenuOpen(false)}>Ajuda</NavLink>
        <ButtonEntrar href="/entrar" onClick={() => setMenuOpen(false)}>Entrar</ButtonEntrar>
      </MobileMenu>
    </>
  )
}