import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './styles';
import {
  Title,
  Text,
  Badge,
  CodeSnippet,
  Button,
  Container,
  Section,
  Flex,
  Grid,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from './components/ui';
import heroImg from './assets/hero.png';

const Header = styled.header`
  padding: ${({ theme }) => `${theme.spacing.md} 0`};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.surface};
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(8px);
`;

const HeroBanner = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};
  padding: ${({ theme }) => `${theme.spacing['2xl']} 0`};

  ${({ theme }) => theme.media.md} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const HeroContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const HeroImageWrapper = styled.div`
  flex: 1;
  max-width: 380px;
  border-radius: ${({ theme }) => theme.radii.xl};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.colors.cardShadowHover};
  border: 2px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surfaceAlt};
  transition: transform ${({ theme }) => theme.transitions.default};

  &:hover {
    transform: scale(1.02);
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

const CounterBox = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  background-color: ${({ theme }) => theme.colors.surfaceAlt};
  border-radius: ${({ theme }) => theme.radii.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [count, setCount] = useState(0);

  const currentTheme = isDarkMode ? darkTheme : lightTheme;

  const practices = [
    {
      title: '1. ThemeProvider & Tokens',
      tag: 'Arquitetura',
      desc: 'Centraliza paleta de cores, tipografia, espaçamentos e breakpoints em tokens reutilizáveis acessados via props do tema.',
      code: '${({ theme }) => theme.colors.primary}',
    },
    {
      title: '2. Transient Props ($prop)',
      tag: 'Boas Práticas',
      desc: 'Props de estilização com prefixo "$" não vazam para o DOM HTML, evitando warnings do React e erros de atributos inválidos.',
      code: '<Button $variant="primary" $size="lg" />',
    },
    {
      title: '3. CSS Mixins & Helper css',
      tag: 'Performance',
      desc: 'Uso do template tag "css" do styled-components para interpolar blocos dinâmicos e variantes de forma segura e limpa.',
      code: 'import { css } from "styled-components";',
    },
    {
      title: '4. createGlobalStyle',
      tag: 'Padronização',
      desc: 'Reset CSS unificado e estilos básicos integrados dinamicamente ao tema selecionado (suporte instantâneo a Dark/Light mode).',
      code: 'export const GlobalStyles = createGlobalStyle`...`',
    },
    {
      title: '5. Polimorfismo com "as"',
      tag: 'Flexibilidade',
      desc: 'Permite alterar a tag semântica renderizada sem perder ou duplicar regras de estilo (ex: Title renderizado como h1, h2 ou span).',
      code: '<Title as="h2" $size="2xl">Subtítulo</Title>',
    },
    {
      title: '6. Media Queries Centralizadas',
      tag: 'Responsividade',
      desc: 'Breakpoints padronizados organizados no tema para layouts fluidos em qualquer dispositivo.',
      code: '${({ theme }) => theme.media.md} { ... }',
    },
  ];

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <Header>
        <Container>
          <Flex $align="center" $justify="space-between">
            <Flex $align="center" $gap="sm">
              <Badge $variant="primary">blense-mundo</Badge>
              <Text $weight="bold">Styled System</Text>
            </Flex>

            <Button
              $variant="outline"
              $size="sm"
              onClick={() => setIsDarkMode((prev) => !prev)}
              aria-label="Alternar tema"
            >
              {isDarkMode ? '☀️ Modo Claro' : '🌙 Modo Escuro'}
            </Button>
          </Flex>
        </Container>
      </Header>

      <main>
        <Container>
          {/* Hero Section */}
          <HeroBanner>
            <HeroContent>
              <Badge $variant="secondary">Modern CSS-in-JS</Badge>
              <Title as="h1" $size="4xl" $gradient>
                Melhor uso de Styled Components
              </Title>
              <Text $size="lg" $variant="secondary">
                Estrutura profissional com Design Tokens, ThemeProvider, Transient Props,
                GlobalStyles e componentes modulares totalmente reutilizáveis.
              </Text>

              <Flex $gap="md" $wrap style={{ marginTop: '0.5rem' }}>
                <Button $variant="primary" $size="md" onClick={() => setCount((c) => c + 1)}>
                  Interagir (Clique: {count})
                </Button>
                <Button $variant="outline" $size="md" onClick={() => setCount(0)}>
                  Resetar
                </Button>
              </Flex>
            </HeroContent>

            <HeroImageWrapper>
              <img src={heroImg} alt="Ilustração Hero" />
            </HeroImageWrapper>
          </HeroBanner>

          {/* Melhores Práticas Grid */}
          <Section>
            <Flex $direction="column" $gap="xs" style={{ marginBottom: '2rem' }}>
              <Badge $variant="primary">Padrões da Indústria</Badge>
              <Title as="h2" $size="2xl">
                O que mudou e por que foi melhorado?
              </Title>
              <Text $variant="muted">
                Antes havia apenas um arquivo isolado com tamanho fixo. Veja a evolução arquitetural:
              </Text>
            </Flex>

            <Grid $columns={2} $columnsLg={3}>
              {practices.map((item, idx) => (
                <Card key={idx} $interactive>
                  <CardHeader>
                    <Badge $variant={idx % 2 === 0 ? 'primary' : 'secondary'}>{item.tag}</Badge>
                  </CardHeader>
                  <CardBody>
                    <Title as="h3" $size="lg" $weight="semibold">
                      {item.title}
                    </Title>
                    <Text $size="sm" $variant="secondary">
                      {item.desc}
                    </Text>
                  </CardBody>
                  <CardFooter>
                    <CodeSnippet>{item.code}</CodeSnippet>
                  </CardFooter>
                </Card>
              ))}
            </Grid>
          </Section>

          {/* Demonstração de Componentes e Variantes */}
          <Section $py="xl">
            <Card>
              <CardHeader>
                <Title as="h3" $size="xl">
                  Galeria de Componentes Prontos
                </Title>
              </CardHeader>
              <CardBody>
                <Text $variant="secondary">
                  Exemplos de botões com variantes (primary, secondary, outline, ghost) e tamanhos:
                </Text>

                <Flex $gap="md" $wrap $align="center" style={{ marginTop: '1rem' }}>
                  <Button $variant="primary" $size="sm">
                    Primary Small
                  </Button>
                  <Button $variant="primary" $size="md">
                    Primary Medium
                  </Button>
                  <Button $variant="primary" $size="lg">
                    Primary Large
                  </Button>
                  <Button $variant="secondary" $size="md">
                    Secondary
                  </Button>
                  <Button $variant="outline" $size="md">
                    Outline
                  </Button>
                  <Button $variant="ghost" $size="md">
                    Ghost
                  </Button>
                  <Button $variant="primary" $size="md" disabled>
                    Disabled
                  </Button>
                </Flex>

                <Flex $gap="md" $align="center" style={{ marginTop: '1.5rem' }}>
                  <Text $weight="medium">Estado reativo integrado:</Text>
                  <CounterBox>
                    <Text $size="sm" $weight="semibold">
                      Contador: {count}
                    </Text>
                  </CounterBox>
                </Flex>
              </CardBody>
            </Card>
          </Section>
        </Container>
      </main>
    </ThemeProvider>
  );
}

export default App;
