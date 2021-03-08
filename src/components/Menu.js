import React from 'react';
import styled from 'styled-components';

const MenuList = styled.ul`
  display: flex;
  justify-content: space-around;
  font-size: 15px;
  margin-top: auto;
  z-index: 100;
  position: absolute;
  background-color: inherit;
  bottom: 0;
  right: 0;
  left: 0;
`;
const MenuItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  & img {
    width: 30px;
    margin-bottom: 10px;
  }
`
function Menu() {
  return (
    <MenuList>
      <MenuItem>
        <img src= "/images/map.png"/>
        <span>백신접종센터</span>
      </MenuItem>
      <MenuItem>
        <img src= "/images/mymap.png"/>
        <span>접종현황</span>
      </MenuItem>
      <MenuItem>
        <img src= "/images/me.png"/>
        <span>나의백신순서</span>
      </MenuItem>
    </MenuList>
  )
}

export default Menu;
