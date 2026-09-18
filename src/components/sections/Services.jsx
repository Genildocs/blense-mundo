import styled from 'styled-components';
import {
  Container,
  Section,
  Title,
  Text,
  Badge,
  Card,
  CardHeader,
  CardBody,
} from '../ui';
import { servicesData, skillsList } from '../../data/portfolioData';

const SectionHeader = styled.div`
  max-width: 700px;
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.xl};

  ${({ theme }) => theme.media.md} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const SkillsSection = styled.div`
  margin-top: ${({ theme }) => theme.spacing['3xl']};
  padding: ${({ theme }) => theme.spacing.xl};
  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.lg};

  ${({ theme }) => theme.media.sm} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const SkillCard = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.surfaceAlt};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const SkillName = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const SkillLevel = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

export function Services() {
  return (
    <Section id="servicos">
      <Container>
        <SectionHeader>
          <Badge $variant="primary">Expertise</Badge>
          <Title as="h2" $size="3xl">
            Serviços & Habilidades
          </Title>
          <Text $size="lg" $variant="secondary">
            Soluções completas desde a concepção do design system até a engenharia de software frontend e integrações back-end.
          </Text>
        </SectionHeader>

        <ServicesGrid>
          {servicesData.map((service) => (
            <Card key={service.id} $interactive>
              <CardHeader>
                <Badge $variant="secondary">Serviço #{service.id}</Badge>
              </CardHeader>
              <CardBody>
                <Title as="h3" $size="xl" $weight="semibold">
                  {service.title}
                </Title>
                <Text $variant="secondary">{service.description}</Text>

                <div style={{ marginTop: '0.75rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {service.technologies.map((tech, idx) => (
                    <Badge key={idx} $variant="primary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardBody>
            </Card>
          ))}
        </ServicesGrid>

        <SkillsSection>
          <Title as="h3" $size="xl">
            Stack Tecnológica & Domínio
          </Title>
          <Text $variant="secondary">
            Tecnologias modernas aplicadas diariamente para criar softwares robustos e performáticos.
          </Text>

          <SkillsGrid>
            {skillsList.map((skill, idx) => (
              <SkillCard key={idx}>
                <SkillName>{skill.name}</SkillName>
                <SkillLevel>{skill.level}</SkillLevel>
              </SkillCard>
            ))}
          </SkillsGrid>
        </SkillsSection>
      </Container>
    </Section>
  );
}
