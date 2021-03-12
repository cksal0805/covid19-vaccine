import React from 'react';
import styled from 'styled-components';

const VaccineKindWrapper = styled.div`
  width: 90%;
`;
const VaccineKindTitle = styled.h2`
  text-align: center;
`;
const VaccineKindItem = styled.div`
  background-color: #505462;
  width: 100%;
  padding: 30px 20px;
  border-radius: 5px;
  box-sizing: border-box;
  margin: 15px 0;
`;
function VaccineKind({vaccineKindData}) {
  return (
    <VaccineKindWrapper>
      <VaccineKindTitle>백신종류 및 접종 현황</VaccineKindTitle>
      {vaccineKindData.map((v, i) =>
        <VaccineKindItem key={i}>
          {v}
        </VaccineKindItem>
      )}
    </VaccineKindWrapper>
  )
}

export default VaccineKind;
