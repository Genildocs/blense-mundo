import { useState } from 'react';
import styled from 'styled-components';
import {
  Container,
  Section,
  Flex,
  Title,
  Text,
  Badge,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from '../ui';
import { projectsData } from '../../data/portfolioData';

const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const FilterGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  flex-wrap: wrap;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const FilterButton = styled.button`
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  border-radius: ${({ theme }) => theme.radii.full};
  border: 1px solid
    ${({ theme, $active }) => ($active ? theme.colors.primary : theme.colors.border)};
  background-color: ${({ theme, $active }) =>
    $active ? theme.colors.primary : theme.colors.surfaceAlt};
  color: ${({ theme, $active }) =>
    $active ? theme.colors.primaryText : theme.colors.textSecondary};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme, $active }) =>
      $active ? theme.colors.primaryText : theme.colors.primary};
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.xl};

  ${({ theme }) => theme.media.md} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

const TechTag = styled.span`
  font-family: ${({ theme }) => theme.fonts.code};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  padding: 0.2rem 0.5rem;
  background-color: ${({ theme }) => theme.colors.surfaceAlt};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export function Projects() {
  const [activeFilter, setActiveFilter] = useState('Todos');

  const categories = ['Todos', 'Design System', 'Frontend', 'Backend'];

  const filteredProjects =
    activeFilter === 'Todos'
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  return (
    <Section id="projetos">
      <Container>
        <SectionHeader>
          <Badge $variant="secondary">Showcase</Badge>
          <Title as="h2" $size="3xl">
            Projetos em Destaque
          </Title>
          <Text $size="lg" $variant="secondary">
            Uma seleção de aplicações, sistemas de design e microsserviços desenvolvidos com foco em excelência.
          </Text>
        </SectionHeader>

        <FilterGroup>
          {categories.map((cat) => (
            <FilterButton
              key={cat}
              $active={activeFilter === cat}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </FilterButton>
          ))}
        </FilterGroup>

        <ProjectsGrid>
          {filteredProjects.map((project) => (
            <Card key={project.id} $interactive>
              <CardHeader>
                <Badge $variant="primary">{project.category}</Badge>
                {project.featured && <Badge $variant="secondary">Destaque</Badge>}
              </CardHeader>

              <CardBody>
                <Title as="h3" $size="xl" $weight="semibold">
                  {project.title}
                </Title>
                <Text $variant="secondary">{project.description}</Text>

                <TagsContainer>
                  {project.tags.map((tag, idx) => (
                    <TechTag key={idx}>{tag}</TechTag>
                  ))}
                </TagsContainer>
              </CardBody>

              <CardFooter>
                <Flex $gap="sm" $wrap>
                  <Button
                    as="a"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    $variant="outline"
                    $size="sm"
                  >
                    GitHub ↗
                  </Button>
                  <Button
                    as="a"
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    $variant="primary"
                    $size="sm"
                  >
                    Ver Projeto
                  </Button>
                </Flex>
              </CardFooter>
            </Card>
          ))}
        </ProjectsGrid>
      </Container>
    </Section>
  );
}
