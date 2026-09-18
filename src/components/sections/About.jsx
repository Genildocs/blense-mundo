import styled from 'styled-components';
import { Container, Section, Title, Text, Card, CardHeader, CardBody, Badge } from '../ui';
import { aboutData } from '../../data/portfolioData';


const SectionHeader = styled.div`
  max-width: 700px;
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const PillarsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.lg};

  ${({ theme }) => theme.media.md} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export function About() {
  return (
    <Section id="sobre">
      <Container>
        <SectionHeader>
          <Badge $variant="primary">Sobre a blense</Badge>
          <Title as="h2" $size="3xl">
            {aboutData.title}
          </Title>
          <Text $size="lg" $variant="secondary">
            {aboutData.subtitle}
          </Text>
          {aboutData.paragraphs.map((p, idx) => (
            <Text key={idx} $variant="secondary">
              {p}
            </Text>
          ))}
        </SectionHeader>

        <PillarsGrid>
          {aboutData.pillars.map((pillar, idx) => (
            <Card key={idx} $interactive>
              <CardHeader>
                <Badge $variant={idx % 2 === 0 ? 'primary' : 'secondary'}>
                  {pillar.badge}
                </Badge>
              </CardHeader>
              <CardBody>
                <Title as="h3" $size="xl" $weight="semibold">
                  {pillar.title}
                </Title>
                <Text $variant="secondary">
                  {pillar.desc}
                </Text>
              </CardBody>
            </Card>
          ))}
        </PillarsGrid>
      </Container>
    </Section>
  );
}
