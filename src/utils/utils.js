const test = 'hello my name is Arlo.';
const test2 = '안녕하세요 저의 이름은 알로입니다.';

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
