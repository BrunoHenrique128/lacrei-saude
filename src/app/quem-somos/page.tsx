'use client'

import Header from '@/app/quem-somos/headerquemsomos'
import styled from 'styled-components'
import { theme } from '@/app/theme'
import Link from 'next/link'

const HeroSection = styled.section`
  background: ${theme.colors.gradientPrimary};
  padding: ${theme.spacing.xl};
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.md};

  @media (max-width: 768px) {
    padding: ${theme.spacing.xl} ${theme.spacing.sm};
  }
`

const HeroTitle = styled.h1`
  font-size: ${theme.fonts.sizes.headlineXl};
  font-weight: 800;
  color: ${theme.colors.white};
  line-height: 120%;

  @media (max-width: 768px) {
    font-size: ${theme.fonts.sizes.headlineLg};
  }
`

const HeroSubtitle = styled.p`
  font-size: ${theme.fonts.sizes.textXl};
  color: ${theme.colors.emerald10};
  max-width: 600px;
  line-height: 150%;
`

const Section = styled.section`
  padding: ${theme.spacing.xl};
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
`

const SectionText = styled.p`
  font-size: ${theme.fonts.sizes.textBase};
  color: ${theme.colors.text};
  line-height: 150%;
  margin-bottom: ${theme.spacing.sm};
`

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${theme.spacing.md};
  margin-top: ${theme.spacing.md};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const ValueCard = styled.div`
  background: ${theme.colors.emerald10};
  border-radius: 12px;
  padding: ${theme.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xs};
`

const ValueTitle = styled.h3`
  font-size: ${theme.fonts.sizes.textXl};
  font-weight: 700;
  color: #006666;
`

const ValueText = styled.p`
  font-size: ${theme.fonts.sizes.textBase};
  color: ${theme.colors.text};
  line-height: 150%;
`

const CTASection = styled.section`
  background: ${theme.colors.gradientSubtle};
  border-top: 1px solid ${theme.colors.emerald20};
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
  color: ${theme.colors.emerald50};
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

export default function QuemSomos() {
  return (
    <main>
        <Header />
      <HeroSection>
        <HeroTitle>Quem somos</HeroTitle>
        <HeroSubtitle>
          Somos uma plataforma de saúde criada para conectar pessoas LGBTQIA+ a profissionais comprometidos com o cuidado afirmativo.
        </HeroSubtitle>
      </HeroSection>

      <Section>
        <SectionTitle>Nossa missão</SectionTitle>
        <SectionText>
          A Lacrei Saúde nasceu da necessidade de criar um espaço seguro onde pessoas LGBTQIA+ possam acessar serviços de saúde sem medo de discriminação ou julgamento.
        </SectionText>
        <SectionText>
          Acreditamos que toda pessoa merece ser tratada com respeito, dignidade e cuidado, independente de sua identidade de gênero ou orientação sexual.
        </SectionText>
      </Section>

      <Section>
        <SectionTitle>Nossos valores</SectionTitle>
        <ValuesGrid>
          <ValueCard>
            <ValueTitle>🏳️‍🌈 Inclusão</ValueTitle>
            <ValueText>
              Criamos um ambiente acolhedor para todas as identidades e expressões de gênero.
            </ValueText>
          </ValueCard>
          <ValueCard>
            <ValueTitle>💚 Cuidado</ValueTitle>
            <ValueText>
              Colocamos o bem-estar das pessoas no centro de tudo que fazemos.
            </ValueText>
          </ValueCard>
          <ValueCard>
            <ValueTitle>🔒 Privacidade</ValueTitle>
            <ValueText>
              Protegemos seus dados e garantimos sigilo em todos os atendimentos.
            </ValueText>
          </ValueCard>
          <ValueCard>
            <ValueTitle>🤝 Respeito</ValueTitle>
            <ValueText>
              Todos os profissionais são capacitados para oferecer atendimento livre de preconceitos.
            </ValueText>
          </ValueCard>
        </ValuesGrid>
      </Section>

      <CTASection>
        <CTATitle>Faça parte da Lacrei Saúde</CTATitle>
        <ButtonPrimary href="/entrar" aria-label="Cadastrar na Lacrei Saúde">
          Cadastre-se gratuitamente
        </ButtonPrimary>
      </CTASection>
    </main>
  )
}