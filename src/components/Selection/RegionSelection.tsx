import styled from 'styled-components';
import SelectRegionBtn from './SelectRegionBtn';
import { AREA_CODE } from '../../apis/apiCodes';

const RegionSelection = () => {
  return (
    <SelectRegionBtnWrapper>
      {/* <MainImg src={mainImg} alt='이미지' /> */}
      {AREA_CODE.map((e) => {
        return <SelectRegionBtn key={e.id}>{e.area}</SelectRegionBtn>;
      })}
    </SelectRegionBtnWrapper>
  );
};

export default RegionSelection;

const SelectRegionBtnWrapper = styled.div`
  width: 60%;
  height: 100px;
  padding-top: 10px;
  background-size: cover;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
`;
