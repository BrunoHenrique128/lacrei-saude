'use client'

import styled from 'styled-components'
import { theme } from '@/app/theme'
import Link from 'next/link'

const FooterWrapper = styled.footer`
  background: ${theme.colors.white};
  border-top: 1px solid ${theme.colors.emerald20};
  padding: ${theme.spacing.lg} ${theme.spacing.xl};

  @media (max-width: 768px) {
    padding: ${theme.spacing.lg} ${theme.spacing.sm};
  }
`

const FooterTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${theme.spacing.sm};
  margin-bottom: ${theme.spacing.sm};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  font-weight: 800;
  color: ${theme.colors.emerald50};
`

const FooterLinks = styled.nav`
  display: flex;
  gap: ${theme.spacing.lg};
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: ${theme.spacing.sm};
  }
`

const FooterLink = styled(Link)`
  text-decoration: none;
  color: ${theme.colors.emerald50};
  font-size: ${theme.fonts.sizes.textSm};
  font-weight: 600;

  &:hover {
    color: ${theme.colors.primary};
  }
`

const FooterBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${theme.spacing.sm};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

const SocialLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.sm};
`

const SocialLink = styled.a`
  color: ${theme.colors.emerald50};
  font-size: 20px;
  text-decoration: none;

  &:hover {
    color: ${theme.colors.primary};
  }
`

const CNPJ = styled.p`
  color: ${theme.colors.gray30};
  font-size: ${theme.fonts.sizes.textXs};
`

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterTop>
        <Logo href="/" aria-label="Lacrei Saúde - Página inicial">
          LS Lacrei Saúde
        </Logo>

        <FooterLinks aria-label="Links do rodapé">
          <FooterLink href="/">Lacrei Saúde</FooterLink>
          <FooterLink href="/quem-somos">Pessoas Profissionais</FooterLink>
          <FooterLink href="/privacidade">Política de Privacidade</FooterLink>
          <FooterLink href="/termos">Termos de Uso</FooterLink>
        </FooterLinks>
      </FooterTop>

      <FooterBottom>
        <SocialLinks aria-label="Redes sociais">
          <SocialLink
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook da Lacrei Saúde"
          >
            f
          </SocialLink>
          <SocialLink
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram da Lacrei Saúde"
          >
            ◎
          </SocialLink>
          <SocialLink
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn da Lacrei Saúde"
          >
            in
          </SocialLink>
          <SocialLink
            href="mailto:contato@lacreisaude.com.br"
            aria-label="Email da Lacrei Saúde"
          >
            ✉
          </SocialLink>
        </SocialLinks>

        <CNPJ>CNPJ: 51.265.351/0001-65</CNPJ>
      </FooterBottom>
    </FooterWrapper>
  )
}