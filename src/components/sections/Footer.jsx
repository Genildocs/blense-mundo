import styled from 'styled-components';
import { Container, Flex, Text, Button, Badge } from '../ui';
import { brandData } from '../../data/portfolioData';

const FooterWrapper = styled.footer`
  margin-top: auto;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => `${theme.spacing.xl} 0`};
`;

const FooterInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};

  ${({ theme }) => theme.media.md} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;

  a {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.textSecondary};
    transition: color ${({ theme }) => theme.transitions.fast};

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <FooterWrapper>
      <Container>
        <FooterInner>
          <Flex $direction="column" $gap="xs">
            <Flex $align="center" $gap="xs">
              <Text $weight="bold" $size="lg">
                {brandData.name}
              </Text>
              <Badge $variant="primary">mundo</Badge>
            </Flex>
            <Text $size="xs" $variant="muted">
              © {new Date().getFullYear()} {brandData.name}. Construído com React 19 & Styled Components.
            </Text>
          </Flex>

          <FooterLinks>
            <a href="#inicio">Início</a>
            <a href="#sobre">Sobre</a>
            <a href="#projetos">Projetos</a>
            <a href="#servicos">Serviços</a>
            <a href="#contato">Contato</a>
            <Button $variant="outline" $size="sm" onClick={scrollToTop}>
              ↑ Topo
            </Button>
          </FooterLinks>
        </FooterInner>
      </Container>
    </FooterWrapper>
  );
}
