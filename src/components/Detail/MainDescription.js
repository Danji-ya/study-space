/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import {
  descLeftContainer,
  descRightContainer,
  descriptionContainer,
} from '../../assets/css/detail/mainDescriptionStyle';
import AmenityDescription from './AmenityDescription';
import CalendarDescription from './CalendarDescription';
import FeeBox from './FeeBox';
import HostDescription from './HostDescription';
import ProsDescription from './ProsDescription';

function MainDescription() {
  return (
    <section css={descriptionContainer}>
      <div css={descLeftContainer}>
        <HostDescription />
        <ProsDescription />
        <AmenityDescription />
        <CalendarDescription />
        {/* <ProsDescription /> */}
      </div>
      <div css={descRightContainer}>
        <FeeBox />
      </div>
    </section>
  );
}

export default MainDescription;
