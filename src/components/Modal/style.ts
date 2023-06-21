import styled from 'styled-components';

export const ContainerModal = styled.div`
  display: flex;
  padding-top:80px;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.25);
  z-index: 2;
  font-family: "Inter";
`;

export const ContainerContent = styled.div`
display:flex;
flex-direction:column;
width: 375px;
height:212px;
background-color:white;
align-items:center;
border-radius: 5px 5px 5px 5px;
gap:15px;
`

export const HeaderModal = styled.header`
border-radius: 5px 5px 0px 0px;
display:flex;
justify-content:space-between;
padding-right:22px;
padding-left:22px;
color:white;
font-size:18px;
height:54px;
width:100%;
align-items:center;
background-color: #27AE60;
`
