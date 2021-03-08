import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { getGeolocation } from "../utils/getGeolocation";
import { getCovidvaccine } from "../apis/getCovidApi";
const { kakao } = window;

const MapViewContent = styled.div`
   width: 100%;
   height: 100%;
`
function MapContent(getvaccineLoacation) {
  const [userLocation, setUserLocation] = useState('');
  const [vaccineLoacation, setVaccineLoacation] = useState([]);
  const kakaoMap = (data) => {
    const SelectMapContent = document.getElementById('kakao_map');
    const options = {
      center: new kakao.maps.LatLng(34.4068681, 127.9505909),
      level: 13,
    }
    const map = new kakao.maps.Map(SelectMapContent, options);
    data.forEach((el) => {
      new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(el.lng, el.lat),
        title: el.org,
      })
    })
  }
  const getUserlocation = async () => {
    const responseData = await getGeolocation();
    setUserLocation(responseData);
  }
  useEffect(() => {
    getUserlocation();
    getCovidvaccine().then((response) => kakaoMap(response.data));
  }, []);

  return (
    <MapViewContent id="kakao_map" />
  )
}

export default MapContent;
