import styled from 'styled-components';
import { Container, Flex, Button, Badge } from '../ui';
import { brandData } from '../../data/portfolioData';

const NavWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: ${({ theme }) =>
    theme.name === 'dark' ? 'rgba(11, 15, 25, 0.85)' : 'rgba(255, 255, 255, 0.85)'};
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  transition: background-color ${({ theme }) => theme.transitions.default};
`;

const NavInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
`;

const LogoLink = styled.a`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.extrabold};
  letter-spacing: -0.04em;
  color: ${({ theme }) => theme.colors.textPrimary};

  span.accent {
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const NavLinks = styled.nav`
  display: none;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};

  ${({ theme }) => theme.media.md} {
    display: flex;
  }
`;

const NavItem = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export function Navbar({ isDarkMode, onToggleTheme }) {
  return (
    <NavWrapper>
      <Container>
        <NavInner>
          <LogoLink href="#inicio">
            <span className="accent">{brandData.name}</span>
            <Badge $variant="primary">mundo</Badge>
          </LogoLink>

          <NavLinks>
            <NavItem href="#inicio">Início</NavItem>
            <NavItem href="#sobre">Sobre</NavItem>
            <NavItem href="#projetos">Projetos</NavItem>
            <NavItem href="#servicos">Serviços</NavItem>
            <NavItem href="#contato">Contato</NavItem>
          </NavLinks>

          <Flex $align="center" $gap="sm">
            <Button
              $variant="outline"
              $size="sm"
              onClick={onToggleTheme}
              aria-label="Alternar tema claro e escuro"
              title={isDarkMode ? 'Mudar para modo claro' : 'Mudar para modo escuro'}
            >
              {isDarkMode ? '☀️ Claro' : '🌙 Escuro'}
            </Button>

            <Button
              as="a"
              href={brandData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              $variant="primary"
              $size="sm"
            >
              GitHub ↗
            </Button>
          </Flex>
        </NavInner>
      </Container>
    </NavWrapper>
  );
}
