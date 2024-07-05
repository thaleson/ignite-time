import styled from "styled-components";


// layout container


export const LayoutContainer = styled.div`
  max-width: 74rem;
  height:580%;
  margin: 5rem auto;
  padding: 2.5rem;


  background: ${props => props.theme['gray-800']};
  border-radius:8px;



  display: flex;
  flex-direction: column;

 

`;




