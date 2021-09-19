/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { FaInstagram, FaFacebookSquare, FaTwitter, FaGlobe, FaWonSign } from 'react-icons/fa';
import { companyDescription, footer, icons, sections } from '../../assets/css/common/footerStyle';

function Footer() {
  return (
    <footer css={footer}>
      <div css={sections}>
        <section>
          <h3>소개</h3>
          <ul>
            <li>에어비앤비 이용 방법</li>
            <li>뉴스룸</li>
            <li>에어비앤비 2021</li>
            <li>투자자 정보</li>
            <li>에어비앤비 플러스</li>
            <li>에어비앤비 Luxe</li>
            <li>호텔투나잇</li>
            <li>에어비앤비 비즈니스 프로그램</li>
            <li>호스트 분들이 있기에 가능합니다</li>
            <li>채용정보</li>
            <li>창립자 편지</li>
          </ul>
        </section>
        <section>
          <h3>커뮤니티</h3>
          <ul>
            <li>다양성 및 소속감</li>
            <li>접근성</li>
            <li>에어비앤비 어소시에이트</li>
            <li>아프간 난민 호스팅하기</li>
            <li>게스트 추천</li>
            <li>Airbnb.org</li>
          </ul>
        </section>
        <section>
          <h3>호스팅하기</h3>
          <ul>
            <li>숙소 호스팅</li>
            <li>온라인 체험 호스팅하기</li>
            <li>체험 호스팅하기</li>
            <li>책임감 있는 호스팅</li>
            <li>자료 센터</li>
            <li>커뮤니티 센터</li>
          </ul>
        </section>
        <section>
          <h3>에어비앤비 지원</h3>
          <ul>
            <li>에어비앤비의 코로나19 대응 방안</li>
            <li>도움말 센터</li>
            <li>예약 취소 옵션</li>
            <li>에어비앤비 이웃 민원 지원</li>
            <li>신뢰와 안전</li>
          </ul>
        </section>
      </div>
      <div css={companyDescription}>
        <div>
          © 2021 Jiseong, Inc.<span>·</span>
          <a href="#">개인정보 처리방침</a>
          <span>·</span>
          <a href="#">이용약관</a>
          <span>·</span>
          <a href="#">사이트맵</a>
          <span>·</span>
          <a href="#">한국의 변경된 환불 정책</a>
          <span>·</span>
          <a href="#">회사 세부정보</a>
        </div>
        <div css={icons}>
          <div>
            <button>
              <FaGlobe />
              <div>한국어 (KR)</div>
            </button>
            <button>
              <FaWonSign />
              <div>KRW</div>
            </button>
          </div>
          <div>
            <div>
              <FaInstagram />
            </div>
            <div>
              <FaFacebookSquare />
            </div>
            <div>
              <FaTwitter />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
