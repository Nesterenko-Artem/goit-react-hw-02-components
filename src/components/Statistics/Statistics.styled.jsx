import styled from '@emotion/styled';
// import { RandomHexColor } from '../../helper/randomColor';






export const List = styled.ul`
  display: flex;
  width: 75%;
  height: 50px;
  border: none;
  justify-content: space-evenly;
`;

export const Item = styled.li`
  width: 100%;
  height: 85px;
  margin-right: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 2px;
  border: 1px solid white;
  box-shadow: 5px 7px 10px 1px rgba(0, 0, 0, 0.2);
      justify-content: space-around;
      text-align: center;
  
`;
export const Percentage = styled.span`
  font-size: x-large;
  font-weight: bold;
`;
export const Label = styled.span`
  /* text-decoration: underline; */
`;