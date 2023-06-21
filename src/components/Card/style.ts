import styled from 'styled-components';

export const LiProduct = styled.li`
  display: flex;
  flex-flow: column;
  min-width: 300px;
  height: 346px;
  background-color: #f5f5f5;
  border: 2px solid #dfdfdf;
  border-radius: 4px;
justify-content:center;
gap:10px;
padding-left:25px;
padding-bottom:25px;
&:hover {
      border-color: #219653;
    }
`;


export const ImgCard = styled.img`
width:177px;
height:177px;
`
