import styled, { css } from 'styled-components';

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const baseInputStyles = css`
  width: 100%;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.textPrimary};
  background-color: ${({ theme }) => theme.colors.surfaceAlt};
  border: 1px solid
    ${({ theme, $hasError }) => ($hasError ? theme.colors.error : theme.colors.border)};
  border-radius: ${({ theme }) => theme.radii.md};
  outline: none;
  transition: all ${({ theme }) => theme.transitions.fast};

  &::placeholder {
    color: ${({ theme }) => theme.colors.textMuted};
  }

  &:focus {
    border-color: ${({ theme, $hasError }) =>
      $hasError ? theme.colors.error : theme.colors.primary};
    box-shadow: 0 0 0 3px
      ${({ theme, $hasError }) =>
        $hasError ? 'rgba(239, 68, 68, 0.2)' : theme.colors.glow};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const Input = styled.input`
  ${baseInputStyles}
`;

export const Textarea = styled.textarea`
  ${baseInputStyles}
  resize: vertical;
  min-height: 120px;
`;

export const FormError = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.error};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

export const AlertBanner = styled.div`
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.lg}`};
  border-radius: ${({ theme }) => theme.radii.md};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};

  ${({ $type = 'success', theme }) =>
    $type === 'success'
      ? css`
          background-color: rgba(16, 185, 129, 0.12);
          color: ${theme.colors.success};
          border: 1px solid ${theme.colors.success};
        `
      : css`
          background-color: rgba(239, 68, 68, 0.12);
          color: ${theme.colors.error};
          border: 1px solid ${theme.colors.error};
        `}
`;
