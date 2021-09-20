/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { images } from '../../constants';

const listContainer = props => `
  width: 840px;
  color: black;
  padding: 0 24px;
  min-width: 0;
`;

function AccomdationListMain() {
  return (
    <main
      css={css`
        padding-top: 80px;
        display: flex;
        background: orange;
        position: relative;
        width: 100%;
        height: 100%;
      `}
    >
      <article css={listContainer}>
        <section class="title-wrap">
          <div>
            <p class="search-result-subtitle">
              300개 이상의 숙소<span>·</span>10월 5일 - 10월 7일<span>·</span>게스트 1명
            </p>
            <h2 class="search-result-title">종로구의 숙소</h2>
          </div>
          <ul class="option-btns">
            <li class="btn-item">
              <button>
                <span>취소 수수료 없음</span>
              </button>
            </li>
            <li class="btn-item">
              <button>
                <span>숙소 유형</span>
              </button>
            </li>
            <li class="btn-item">
              <button>
                <span>요금</span>
              </button>
            </li>
            <li>
              <button>
                <span>침실과 침대</span>
              </button>
            </li>
            <li>
              <button>
                <span>필터 추가하기</span>
              </button>
            </li>
          </ul>
        </section>
        <section class="list-wrap">
          <div class="list-item-cotainer">
            <div class="list-item">
              <div class="img-slider-container">
                <div class="img-slider-row">
                  <div class="img-slider-col">
                    <img
                      src="https://a0.muscache.com/im/pictures/6edce0dc-bafb-4361-b532-0a80d7639d4f.jpg?im_w=480"
                      alt=""
                    />
                  </div>
                  <div class="img-slider-col">
                    <img
                      src="https://a0.muscache.com/im/pictures/185f0dab-1a87-489d-95ff-bb50270f3682.jpg?im_w=480"
                      alt=""
                    />
                  </div>
                  <div class="img-slider-col">
                    <img
                      src="https://a0.muscache.com/im/pictures/ae903604-2f87-4471-92d0-3ff9da6c724b.jpg?im_w=480"
                      alt=""
                    />
                  </div>
                </div>
                <a class="prev">&#10094;</a>
                <a class="next">&#10095;</a>
                <div class="dot-wrap">
                  <span class="dot active" data-value="0"></span>
                  <span class="dot" data-value="100"></span>
                  <span class="dot" data-value="200"></span>
                </div>
              </div>
              <div class="text-wrap">
                <div class="top">
                  <div class="title">
                    <div class="title-left">
                      <p>용산의 주거용 공간 전체</p>
                      <h3>
                        ⭐️N타워전망⭐️단독주택+수영장[유료]⛱16명 OK🎉So Seoulish Stay【써울스테이】
                      </h3>
                    </div>
                    <div class="title-right">
                      <button>
                        <svg viewBox="0 0 32 32">
                          <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div class="divide"></div>
                  <div class="subtitle">
                    <p>최대 인원 8명 · 침실 4개 · 침대 11개 · 욕실 2개</p>
                    <p>에어컨 · 주방 · 무선 인터넷 · 세탁기</p>
                  </div>
                </div>
                <div class="bottom">
                  <div class="grade">
                    <i class="fas fa-star"></i>4.86<span>(후기124개)</span>
                  </div>
                  <div class="price">
                    <div class="each-price">
                      <i class="fas fa-won-sign">263,090</i>
                      <span>/박</span>
                    </div>
                    <div class="total-price">
                      <span>총액</span>
                      <i class="fas fa-won-sign">263,090</i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="pages">
          <div class="pagination-wrap">
            <div class="pagination">
              <a class="prev">&#10094;</a>
              <div class="page-list">
                <div class="page active">1</div>
                <div class="page inactive">2</div>
                <div class="page inactive">3</div>
                <div class="page inactive">4</div>
                <div class="page inactive">5</div>
                <div class="page ellipsis">...</div>
                <div class="page inactive">15</div>
              </div>
              <a class="next active">&#10095;</a>
            </div>
            <div class="total-page">총 300개 이상의 숙소 중 1 ~20번째</div>
          </div>
          <div class="help-text">
            여행 날짜와 게스트 인원수를 입력하면 1박당 총 요금을 확인할 수 있습니다.
          </div>
        </section>
      </article>
      <article
        class="accommodation-map-wrap"
        css={css`
          flex: 1;
        `}
      >
        <img
          css={css`
            height: 100vh;
            width: 100%;
            position: sticky;
            top: 80px;
          `}
          src={images.test2.default}
        ></img>
      </article>
    </main>
  );
}

export default AccomdationListMain;
