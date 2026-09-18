import styled from 'styled-components';
import { Container, Flex, Button, Badge, Title, Text } from '../ui';
import { brandData } from '../../data/portfolioData';
import heroImg from '../../assets/hero.png';

const HeroSection = styled.section`
  padding: ${({ theme }) => `${theme.spacing['3xl']} 0`};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -20%;
    left: 50%;
    transform: translateX(-50%);
    width: 600px;
    height: 400px;
    background: radial-gradient(
      circle,
      ${({ theme }) => theme.colors.glow} 0%,
      transparent 70%
    );
    pointer-events: none;
    z-index: 0;
  }
`;

const HeroGrid = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: ${({ theme }) => theme.spacing['2xl']};
  position: relative;
  z-index: 1;

  ${({ theme }) => theme.media.lg} {
    display: grid;
    grid-template-columns: 1.15fr 0.85fr;
    gap: ${({ theme }) => theme.spacing['3xl']};
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const MetricsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.xl};
  padding-top: ${({ theme }) => theme.spacing.lg};
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  ${({ theme }) => theme.media.sm} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const MetricItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const MetricValue = styled.span`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.extrabold};
  color: ${({ theme }) => theme.colors.primary};
  letter-spacing: -0.03em;
`;

const MetricLabel = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textMuted};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

const HeroVisual = styled.div`
  position: relative;
  width: 100%;
  max-width: 420px;
  border-radius: ${({ theme }) => theme.radii.xl};
  background: linear-gradient(
    145deg,
    ${({ theme }) => theme.colors.surfaceAlt},
    ${({ theme }) => theme.colors.surface}
  );
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.colors.cardShadowHover};
  transition: transform ${({ theme }) => theme.transitions.default};

  &:hover {
    transform: translateY(-4px);
  }

  img {
    width: 100%;
    height: auto;
    border-radius: ${({ theme }) => theme.radii.lg};
    display: block;
    object-fit: cover;
  }
`;

export function Hero() {
  return (
    <HeroSection id="inicio">
      <Container>
        <HeroGrid>
          <HeroContent>
            <Flex $align="center" $gap="sm">
              <Badge $variant="secondary">Modern Web Studio</Badge>
              <Badge $variant="primary">React 19 Ready</Badge>
            </Flex>

            <Title as="h1" $size="5xl" $gradient>
              {brandData.tagline}
            </Title>

            <Text $size="lg" $variant="secondary">
              {brandData.description}
            </Text>

            <Flex $gap="md" $wrap style={{ marginTop: '0.5rem' }}>
              <Button as="a" href="#projetos" $variant="primary" $size="lg">
                Explorar Projetos ⚡
              </Button>
              <Button as="a" href="#contato" $variant="outline" $size="lg">
                Iniciar um Projeto
              </Button>
            </Flex>

            <MetricsContainer>
              {brandData.metrics.map((metric, idx) => (
                <MetricItem key={idx}>
                  <MetricValue>{metric.value}</MetricValue>
                  <MetricLabel>{metric.label}</MetricLabel>
                </MetricItem>
              ))}
            </MetricsContainer>
          </HeroContent>

          <HeroVisual>
            <img src={heroImg} alt="Blense Mundo Showcase" />
          </HeroVisual>
        </HeroGrid>
      </Container>
    </HeroSection>
  );
}
