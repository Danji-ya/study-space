import React, { Component } from 'react';
import ReviewStar from "./ReviewStar";
import requests from "../lib/requests";

class MainContent extends Component {

    state = { bestMenu: [],  randomMenu: [], seasonMenu: [] }

    componentDidMount(){
        requests.getMainList().then(result => {
            this.setState({ bestMenu: result.bestMenu, randomMenu: result.randomMenu, seasonMenu: result.seasonMenu })
        })
    }

    render() {
        return (
            <div id="content">
                <ul className="content-ul">
                    <li>
                        {this.state.bestMenu ?
                            <>
                                <p className="content-title">베스트 메뉴<b>01</b></p>
                                <img className="food-img" src={this.state.bestMenu["url"]} alt="profile"/>
                                <h3>{this.state.bestMenu["routeNm"]}</h3>
                                <h3>{this.state.bestMenu["stdRestNm"]}</h3>
                                <p className="content-top-p"> {this.state.bestMenu["foodNm"]}</p>
                                <p>{this.state.bestMenu["foodCost"]}원</p>
                                <p>{this.state.bestMenu["ratingAvg"] ? `평균평점:${this.state.bestMenu["ratingAvg"]} \u00A0\u00A0 (리뷰: ${this.state.bestMenu["reviewList"].length}개)`  : "첫 리뷰를 작성해주세요"}</p>
                                <ReviewStar number={this.state.bestMenu["ratingAvg"]} />
                            </>
                        : null }
                    </li>
                    <li>
                        <p className="content-title">랜덤 메뉴<b>02</b></p>
                        <img className="food-img" src={this.state.randomMenu["url"]} alt="profile"/>
                        <h3>{this.state.randomMenu["routeNm"]}</h3>
                        <h3>{this.state.randomMenu["stdRestNm"]}</h3>
                        <p className="content-top-p">{this.state.randomMenu["foodNm"]}</p>
                        <p>{this.state.randomMenu["foodCost"]}원</p>
                        <p>{this.state.randomMenu["ratingAvg"] ? `평균평점:${this.state.randomMenu["ratingAvg"]} \u00A0\u00A0 (리뷰: ${this.state.randomMenu["reviewList"].length}개)`: "첫 리뷰를 작성해주세요"}</p>
                        <ReviewStar number={this.state.randomMenu["ratingAvg"]} />
                    </li>
                    <li>
                        <p className="content-title">계절 메뉴<b>03</b></p>
                        <img className="food-img" src={this.state.seasonMenu["url"]} alt="profile"/>
                        <h3>{this.state.seasonMenu["routeNm"]}</h3>
                        <h3>{this.state.seasonMenu["stdRestNm"]}</h3>
                        <p className="content-top-p">{this.state.seasonMenu["foodNm"]}</p>
                        <p>{this.state.seasonMenu["foodCost"]}원</p>
                        <p>{this.state.seasonMenu["ratingAvg"] ? `평균평점:${this.state.seasonMenu["ratingAvg"]} \u00A0\u00A0 (리뷰: ${this.state.seasonMenu["reviewList"].length}개)`: "첫 리뷰를 작성해주세요" }</p>
                        <ReviewStar number={this.state.seasonMenu["ratingAvg"]} />
                    </li>
                </ul>
            </div>
        )}
}

export default MainContent;