import styled from 'styled-components';
import SpotDetail from '../SpotDetail';
import { FetchedStayDataType } from '../../apis/publicAPI';
import noimg from '../../assets/noimg.png';
import Slider from 'react-slick';
import { useInfiniteQuery, useQuery } from 'react-query';
import { fetchSpotData } from '../../apis/publicAPI';
import { useRecoilValue } from 'recoil';
import { regionSelectionState } from '../../recoil/apiDataAtoms';
import Loader from '../Loader/Loader';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useState } from 'react';

const SelectionResult = () => {
  const region = useRecoilValue(regionSelectionState);
  const [curPage, setCurPage] = useState(1);
  // const { data, isLoading } = useQuery(['spot_data', region], () =>
  //   fetchSpotData({ region })
  // );

  const { data, isLoading, hasNextPage, fetchNextPage } = useInfiniteQuery(
    ['spot_data', region],
    ({ pageParam = 1 }) => fetchSpotData({ region, pageParam }),
    {
      getNextPageParam: (lastPage, allPages) => {
        // !lastPage.isLast ? lastPage.nextPage : undefined
        console.log('lastPage:', lastPage);
        console.log('all pages:', allPages);
        return lastPage?.pageNo ===
          Math.ceil(lastPage?.totalCount / lastPage?.numOfRows)
          ? undefined
          : lastPage?.pageNo + 1;
      },
      getPreviousPageParam: (lastPage, allPages) => {
        return lastPage?.pageNo < 1 ? undefined : lastPage?.pageNo - 1;
      },
    }
  );

  if (data) {
    console.log('인피닛 쿼리 데이터', data);
  }
  useEffect(() => {
    fetchNextPage();
  }, [curPage]);

  console.log('현재페이지', curPage);
  // const settings = {
  //   dots: true,
  //   arrow: true,
  //   inifinite: true,
  //   speed: 500,
  //   slidesToShow: 10,
  //   slidesToScroll: 10,
  //   autoplay: false,
  // };
  if (data) {
    return (
      <>
        {isLoading ? (
          <Loader />
        ) : (
          <SearchOverallResultContainer>
            <ListItemCount>
              총 {data.pages[curPage - 1].totalCount} 개의 결과
            </ListItemCount>
            {/* <CustomSlider {...settings}></CustomSlider> */}
            <ResultWrapper>
              {data.pages[curPage - 1].items.item.map(
                (e: FetchedStayDataType) => {
                  return (
                    <SpotDetail
                      key={e.contentid}
                      id={e.contentid}
                      img={e.firstimage || noimg}
                    >
                      {e.title}
                    </SpotDetail>
                  );
                }
              )}
              <button onClick={() => setCurPage(curPage - 1)}>
                이전페이지
              </button>
              <button onClick={() => setCurPage(curPage + 1)}>
                다음페이지
              </button>
            </ResultWrapper>
            <SearchListWrapper></SearchListWrapper>
          </SearchOverallResultContainer>
        )}
      </>
    );
  }
  return <div>데이터가 없습니다.</div>;
};

export default SelectionResult;

const SearchOverallResultContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ListItemCount = styled.div`
  margin-top: 30px;
  margin-left: 30px;
`;

const SearchListWrapper = styled.div`
  width: 100%;
  /* height: 300px; */
  /* background-color: #f6d6d6; */
  display: flex;
  flex-direction: column;
  /* margin: 10px 10px 10px 10px; */
`;

const ResultWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const CustomSlider = styled(Slider)`
  .slick-l {
    width: 100%;
  }
`;
