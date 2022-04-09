/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useEffect, useState } from 'react';
import axiosInstance from '../../../api-config';
import { tripWrap, tripList } from '../../../assets/css/main/nearTripStyle';

import NearTripItem from './NearTripItem';

function NearTrip() {
  const [nearTrip, setNearTrip] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axiosInstance.get('dummy/data.json');
        setNearTrip([...response.data.nearTripList]);
      } catch (error) {
        console.error(error);
      }
    }
    getData();

    return () => {};
  }, []);

  return (
    <article css={tripWrap}>
      <h2>가까운 여행지 둘러보기</h2>
      <ul css={tripList}>
        {nearTrip.map((item, idx) => (
          <NearTripItem key={`${item.title}-${idx}`} item={item} />
        ))}
      </ul>
    </article>
  );
}

export default NearTrip;
