import { useLocation } from 'react-router-dom';

export function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export const getDateDiff = (startDate, endDate) =>
  (endDate.getTime() - startDate.getTime()) / 1000 / 60 / 60 / 24;

export function getTextTotalByte(str, maxByte) {
  let totalByte = 0;
  let maxLen = 0;

  const isKorean = char => escape(char).length > 4;

  [...str].forEach((oneChar, i) => {
    if (isKorean(oneChar)) {
      totalByte += 2;
    } else {
      totalByte += 1;
    }

    if (totalByte <= maxByte) maxLen += 1;
  });

  return { totalByte, maxLen };
}

export function textByteOverCut(text, maxByte = 20, lastText = '...') {
  let changeText = text;

  const { totalByte, maxLen } = getTextTotalByte(text, maxByte);

  if (totalByte > maxByte) {
    changeText = text.substr(0, maxLen) + lastText;
  }

  return changeText;
}

export const padding = value => `00${value}`.slice(-2);
