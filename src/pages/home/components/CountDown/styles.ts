import { styled } from "styled-components";

export const CountdownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10vw; /* Usar unidades relativas para o tamanho da fonte */
  line-height: 8vw;
  color: ${props => props.theme['gray-100']};

  display: flex;
  gap: 1rem;
  flex-wrap: wrap; /* Permitir que os elementos se ajustem em telas menores */

  span {
    background: ${props => props.theme['gray-700']};
    padding: 2rem 1rem;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    font-size: 8vw; /* Ajustar tamanho da fonte para telas menores */
    line-height: 6vw;

    span {
      padding: 1.5rem 0.5rem;
    }
  }
`;

export const Separator = styled.div`
  padding: 2rem 0;
  color: ${props => props.theme['green-500']};
  width: 4vw; /* Usar unidades relativas para largura */
  overflow: hidden;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    width: 3vw; /* Ajustar largura para telas menores */
    padding: 1.5rem 0;
  }
`;
