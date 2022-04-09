/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useEffect, useState } from 'react';
import axiosInstance from '../../../api-config';
import { stList, stWrap } from '../../../assets/css/main/specialTripStyle';
import SpecialTripItem from './SpecialTripItem';

function SpecialTrip() {
  const [speicalTrip, setSpecialTrip] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axiosInstance.get('dummy/data.json');
        setSpecialTrip([...response.data.specialTripList]);
      } catch (error) {
        console.error(error);
      }
    }
    getData();

    return () => {};
  }, []);

  return (
    <article css={stWrap}>
      <h2>특별한 즐길 거리를 찾아보세요</h2>
      <ul css={stList}>
        {speicalTrip.map((item, idx) => (
          <SpecialTripItem key={`${item.title}-${idx}`} item={item} />
        ))}
      </ul>
    </article>
  );
}

export default SpecialTrip;
