import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import {useSpring, animated, interpolate} from 'react-spring'
import {getCovidvaccine} from "../apis/getCovidApi";

const LocationListWrapper = styled(animated.div)`
  position: absolute;
  z-index: 200;
  width: 80%;
  height: 40%;
  margin: 0 auto;
  left: 0;
  right: 0;
  padding: 10px;
  border-radius: 0 0 10px 10px;
  background-color: #343640;
  box-shadow: 0 0 3px 3px gray ;
  text-align: center;
  font-size: 18px;
  overflow: scroll;
`;
const VaccineLocationList = styled.ul`
  text-align: left;
  color: #e4e4e4;
`;
const VaccineLocationItem = styled.li`
  padding: 15px;
  border-bottom: 1px solid #5a5a5a;
`
const LocationListOpenBox = styled(animated.div)`
  position: absolute;
  z-index: 200;
  width: 200px;
  padding: 10px;
  border-radius: 20px;
  margin: auto;
  left: 0;
  right: 0;
  text-align: center;
  background-color: #343640;
  box-shadow: 3px 3px 3px gray;
`;

function LocationList() {
  const [locationList, getLocationList] = useState([]);
  const [isOpenList, setIsOpenList,] = useState(false);

  const handleClickModal = useCallback(() => {
    setIsOpenList(!isOpenList);
  }, [isOpenList]);

  const slideListAnimation = useSpring({
      top: isOpenList? "0%" : "-100%",
      config: {
        tension: 80,
        friction: 20,
      },
  });
  const listOpenBoxAnimation = useSpring({
    top: isOpenList? "55%" : "5%",
    config: {
      tension: 150,
      friction: 20,
    },
  });
  useEffect(() => {
    getCovidvaccine().then((response) => getLocationList(response.data));
  }, []);

  return (
    <>
      <LocationListWrapper isOpenList={isOpenList} style={slideListAnimation}>
        <VaccineLocationList>
          {locationList.map((v) => (
            <VaccineLocationItem key={v.id}>
              <div>{v.facilityName}</div>
              <div>{v.address}</div>
            </VaccineLocationItem>
            )
          )}
        </VaccineLocationList>
      </LocationListWrapper>
      <LocationListOpenBox isOpenList={isOpenList} onClick={handleClickModal} style={listOpenBoxAnimation}>
        {isOpenList ? "닫기" : "백신접종센터 자세히 보기"}
      </LocationListOpenBox>
      </>
  )
}

export default LocationList;
