/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useEffect, useState } from 'react';
import axiosInstance from '../../../api-config';
import { tripList, tripWrap } from '../../../assets/css/main/anywhereTripStyle';
import AnywhereTripItem from './AnywhereTripItem';

function AnywhereTrip() {
  const [anyWhereList, setAnyWhereList] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axiosInstance.get('dummy/data.json');
        setAnyWhereList([...response.data.anywhereTripList]);
      } catch (error) {
        console.error(error);
      }
    }
    getData();

    return () => {};
  }, []);

  return (
    <article css={tripWrap}>
      <h2>어디에서나, 여행은 살아보는 거야!</h2>
      <ul css={tripList}>
        {anyWhereList.map((item, idx) => (
          <AnywhereTripItem key={`${item.title}-${idx}`} item={item} />
        ))}
      </ul>
    </article>
  );
}

export default AnywhereTrip;
