import styled, { css } from 'styled-components';

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: ${({ theme, $size = '3xl' }) => theme.fontSizes[$size] || $size};
  font-weight: ${({ theme, $weight = 'bold' }) => theme.fontWeights[$weight] || $weight};
  color: ${({ theme, $color }) => ($color ? theme.colors[$color] || $color : theme.colors.textPrimary)};
  text-align: ${({ $align }) => $align || 'left'};
  line-height: 1.25;
  letter-spacing: -0.02em;

  ${({ $gradient, theme }) =>
    $gradient &&
    css`
      background: linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary});
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    `}
`;

export const Text = styled.p`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: ${({ theme, $size = 'md' }) => theme.fontSizes[$size] || $size};
  font-weight: ${({ theme, $weight = 'regular' }) => theme.fontWeights[$weight] || $weight};
  color: ${({ theme, $variant = 'body', $color }) => {
    if ($color) return theme.colors[$color] || $color;
    if ($variant === 'muted') return theme.colors.textMuted;
    if ($variant === 'secondary') return theme.colors.textSecondary;
    return theme.colors.textPrimary;
  }};
  text-align: ${({ $align }) => $align || 'left'};
  line-height: 1.6;
`;

export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  border-radius: ${({ theme }) => theme.radii.full};
  background-color: ${({ theme, $variant = 'primary' }) =>
    $variant === 'secondary' ? theme.colors.secondaryLight : theme.colors.primaryLight};
  color: ${({ theme, $variant = 'secondary' }) =>
    $variant === 'secondary' ? theme.colors.secondary : theme.colors.primary};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  width: fit-content;
`;

export const CodeSnippet = styled.code`
  font-family: ${({ theme }) => theme.fonts.code};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  padding: 0.2rem 0.4rem;
  background-color: ${({ theme }) => theme.colors.surfaceAlt};
  color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radii.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
`;
