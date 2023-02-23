import styled, { keyframes } from 'styled-components';

const SkeletonTestFrame = () => {
  return (
    <>
      <ListItemCount>
        <TotalCountArea></TotalCountArea>
      </ListItemCount>
      <SearchListWrapper>
        <BtnWrapper></BtnWrapper>
        <ResultWrapper>
          {/* {Array(8)
            .fill('')
            .map((e) => {
              return <SpotEachItemWrapper></SpotEachItemWrapper>;
            })} */}
        </ResultWrapper>
        <BtnWrapper></BtnWrapper>
      </SearchListWrapper>
      <PaginationDotsWrapper></PaginationDotsWrapper>
    </>
  );
};

export default SkeletonTestFrame;

const ListItemCount = styled.div`
  margin-top: 30px;
  margin-left: 30px;
`;

const SearchListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const ResultWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const BtnWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 30px;
`;

const TotalCountArea = styled.div`
  width: 500px;
  height: 30px;
`;

const PaginationDotsWrapper = styled.div`
  margin-top: 10px;
  width: 500px;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

// const SkeletonLoadingAnimation = keyframes`
//    0% {
//     transform: translateX(0);
//   }
//   50%,
//   100% {
//     transform: translateX(100%);
//   }
// `;

// const SpotEachItemWrapper = styled.div`
//   width: 20%;
//   height: 350px;
//   background-color: #f2f2f2;
//   border-radius: 10px;
//   margin: 20px 20px 20px 20px;
//   border-radius: 10px;
//   overflow: hidden;
//   position: relative;
//   &::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 60%;
//     height: 100%;
//     background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
//     animation: ${SkeletonLoadingAnimation} 1s infinite linear;
//   }
// `;