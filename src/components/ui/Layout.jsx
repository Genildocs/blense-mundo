import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: ${({ theme }) => theme.spacing.md};
  padding-right: ${({ theme }) => theme.spacing.md};

  ${({ theme }) => theme.media.sm} {
    max-width: 640px;
  }

  ${({ theme }) => theme.media.md} {
    max-width: 768px;
    padding-left: ${({ theme }) => theme.spacing.lg};
    padding-right: ${({ theme }) => theme.spacing.lg};
  }

  ${({ theme }) => theme.media.lg} {
    max-width: 1024px;
    padding-left: ${({ theme }) => theme.spacing.xl};
    padding-right: ${({ theme }) => theme.spacing.xl};
  }

  ${({ theme }) => theme.media.xl} {
    max-width: 1200px;
  }
`;

export const Section = styled.section`
  padding: ${({ theme, $py }) => ($py ? `${theme.spacing[$py] || $py} 0` : `${theme.spacing['3xl']} 0`)};
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: ${({ $direction = 'row' }) => $direction};
  align-items: ${({ $align = 'stretch' }) => $align};
  justify-content: ${({ $justify = 'flex-start' }) => $justify};
  gap: ${({ theme, $gap = 'md' }) => theme.spacing[$gap] || $gap};
  flex-wrap: ${({ $wrap }) => ($wrap ? 'wrap' : 'nowrap')};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme, $gap = 'lg' }) => theme.spacing[$gap] || $gap};

  ${({ theme }) => theme.media.md} {
    grid-template-columns: repeat(${({ $columns = 2 }) => $columns}, 1fr);
  }

  ${({ theme, $columnsLg }) =>
    $columnsLg &&
    `${theme.media.lg} {
      grid-template-columns: repeat(${$columnsLg}, 1fr);
    }`}
`;
