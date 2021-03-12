import React, { useRef, useState, useEffect } from 'react';
import { csv } from 'd3';
import styled from 'styled-components';
import CondtionGraph from "../components/ConditionGraph";
import VaccineKind from "../components/VaccineKind";

const ConditionWrapper = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`;

function Condition() {
  const csvLink = '/SouthKorea.csv';
  const [vaccineKindData, setVaccineKindData] = useState(['바이오엔텍, 화이자 백신', '옥스포드대학교, 아스트라제네카 백신']);
  const [data, setData] = useState([]);
  useEffect(() => {
    csv(csvLink).then((data) => {
      setData(data);
    });
  }, []);
  return (
    <ConditionWrapper>
      <VaccineKind vaccineKindData={vaccineKindData} />
      { data.length !== 0 && <CondtionGraph data={data}/> }
    </ConditionWrapper>
  )
}
export default Condition;

