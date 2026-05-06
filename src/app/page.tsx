'use client'

import Header from '@/app/header'
import styled from 'styled-components'
import { theme } from '@/app/theme'
import Link from 'next/link'

const HeroSection = styled.section`
  background: ${theme.colors.gradientSubtle};
  padding: ${theme.spacing.xl} ${theme.spacing.xl};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: ${theme.spacing.md};

  @media (max-width: 768px) {
    padding: ${theme.spacing.xl} ${theme.spacing.sm};
  }
`

const HeroTitle = styled.h1`
  font-size: ${theme.fonts.sizes.headlineXl};
  font-weight: 800;
  color: ${theme.colors.emerald50};
  line-height: 120%;
  max-width: 700px;

  @media (max-width: 768px) {
    font-size: ${theme.fonts.sizes.headlineLg};
  }
`

const HeroSubtitle = styled.p`
  font-size: ${theme.fonts.sizes.textXl};
  color: ${theme.colors.text};
  max-width: 600px;
  line-height: 150%;
`

const ButtonGroup = styled.div`
  display: flex;
  gap: ${theme.spacing.sm};
  flex-wrap: wrap;
  justify-content: center;
  margin-top: ${theme.spacing.sm};
`

const ButtonPrimary = styled(Link)`
  background: ${theme.colors.emerald50};
  color: ${theme.colors.white};
  padding: 14px 32px;
  border-radius: 8px;
  text-decoration: none;
  font-size: ${theme.fonts.sizes.textBase};
  font-weight: 700;
  transition: background 0.2s;

  &:hover {
    background: ${theme.colors.primary};
  }
`

const ButtonOutline = styled(Link)`
  background: transparent;
  color: ${theme.colors.emerald50};
  padding: 14px 32px;
  border-radius: 8px;
  border: 2px solid ${theme.colors.emerald50};
  text-decoration: none;
  font-size: ${theme.fonts.sizes.textBase};
  font-weight: 700;
  transition: all 0.2s;

  &:hover {
    background: ${theme.colors.emerald10};
  }
`

const Section = styled.section`
  padding: ${theme.spacing.xl} ${theme.spacing.xl};
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: ${theme.spacing.xl} ${theme.spacing.sm};
  }
`

const SectionTitle = styled.h2`
  font-size: ${theme.fonts.sizes.headlineBase};
  font-weight: 800;
  color: ${theme.colors.emerald50};
  margin-bottom: ${theme.spacing.md};
  text-align: center;
`

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.spacing.md};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const Card = styled.div`
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.emerald20};
  border-radius: 12px;
  padding: ${theme.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xs};
`

const CardTitle = styled.h3`
  font-size: ${theme.fonts.sizes.textXl};
  font-weight: 700;
  color: ${theme.colors.emerald50};
`

const CardText = styled.p`
  font-size: ${theme.fonts.sizes.textBase};
  color: ${theme.colors.text};
  line-height: 150%;
`

const ButtonSecondary = styled(Link)`
  background: ${theme.colors.gradientSecondary};
  color: ${theme.colors.white};
  padding: 14px 32px;
  border-radius: 8px;
  text-decoration: none;
  font-size: ${theme.fonts.sizes.textBase};
  font-weight: 700;
  display: inline-block;
  margin-top: ${theme.spacing.md};
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`

const CTASection = styled.section`
  background: ${theme.colors.gradientPrimary};
  padding: ${theme.spacing.xl};
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.md};
`

const CTATitle = styled.h2`
  font-size: ${theme.fonts.sizes.headlineBase};
  font-weight: 800;
  color: ${theme.colors.white};
`

const CTAText = styled.p`
  font-size: ${theme.fonts.sizes.textXl};
  color: ${theme.colors.emerald10};
  max-width: 600px;
`

const ButtonWhite = styled(Link)`
  background: ${theme.colors.white};
  color: ${theme.colors.emerald50};
  padding: 14px 32px;
  border-radius: 8px;
  text-decoration: none;
  font-size: ${theme.fonts.sizes.textBase};
  font-weight: 700;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection>
        <HeroTitle>
          Saúde inclusiva para todas as pessoas
        </HeroTitle>
        <HeroSubtitle>
          Conectamos você a profissionais de saúde comprometidos com o cuidado respeitoso e afirmativo da população LGBTQIA+.
        </HeroSubtitle>
        <ButtonGroup>
          <ButtonPrimary href="/entrar" aria-label="Encontrar profissional de saúde">
            Encontrar profissional
          </ButtonPrimary>
          <ButtonOutline href="/quem-somos" aria-label="Saiba mais sobre a Lacrei Saúde">
            Saiba mais
          </ButtonOutline>
        </ButtonGroup>
      </HeroSection>

      <Section>
        <SectionTitle>Por que escolher a Lacrei Saúde?</SectionTitle>
        <CardsGrid>
          <Card>
            <CardTitle>🏳️‍🌈 Cuidado afirmativo</CardTitle>
            <CardText>
              Todos os profissionais são comprometidos com o atendimento respeitoso e inclusivo para pessoas LGBTQIA+.
            </CardText>
          </Card>
          <Card>
            <CardTitle>🔒 Segurança e privacidade</CardTitle>
            <CardText>
              Seus dados são protegidos e sua privacidade é nossa prioridade em todos os atendimentos.
            </CardText>
          </Card>
          <Card>
            <CardTitle>🩺 Diversas especialidades</CardTitle>
            <CardText>
              Encontre médicos, psicólogos, nutricionistas e muito mais, tudo em um só lugar.
            </CardText>
          </Card>
        </CardsGrid>
        <div style={{ textAlign: 'center' }}>
          <ButtonSecondary href="/quem-somos" aria-label="Conhecer mais sobre a Lacrei">
            Conheça nossa história
          </ButtonSecondary>
        </div>
      </Section>

      <CTASection>
        <CTATitle>Pronto para cuidar da sua saúde?</CTATitle>
        <CTAText>
          Cadastre-se gratuitamente e encontre o profissional ideal para você.
        </CTAText>
        <ButtonWhite href="/entrar" aria-label="Cadastrar na Lacrei Saúde">
          Cadastre-se agora
        </ButtonWhite>
      </CTASection>
    </main>
  )
}