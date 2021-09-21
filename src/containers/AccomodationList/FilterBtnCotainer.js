import React, { useState } from 'react';
import FilterBtns from '../../components/AccomodationList/FilterBtns';

function FilterBtnCotainer() {
  const [btnList, setBtnList] = useState([
    '취소 수수료 없음',
    '숙소 유형',
    '요금',
    '침실과 침대',
    '필터 추가하기',
  ]);

  return <FilterBtns btnList={btnList} />;
}

export default FilterBtnCotainer;
