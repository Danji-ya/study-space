import React from 'react';
import OptionList from "./OptionList";
import MyStarRating from "./MyStarRating";
import requests from "../lib/requests";
import swal from 'sweetalert';



class MakeReview extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            disabled: false, //send 중복 방지
            foodNm: "",
            reviewText: "",
            rating: 0
        }
    }

    //각 input에 대한 값 저장.
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value});
    }


    //Form 제출 시 부모에게 props 전달
    submit = e => {
        this.setState( {disabled: true});
        e.preventDefault();

        //모든 값들이 정상적으로 들어왔을 때만 요청
        if( this.state.foodNm && this.state.reviewText && (this.state.rating !==0) ){
            //객체로 전달
            let foodReview = {
                email: this.props.user.email,
                foodNm: this.state.foodNm,
                reviewText: this.state.reviewText,
                rating: this.state.rating
            }

            requests.postReview(this.props.foodList[0].routeNm, this.props.foodList[0].stdRestNm, foodReview).then( result => {
                this.setState( {disabled: false})
                swal({
                    title: "저장 완료",
                    text: "소중한 리뷰 감사합니다",
                    icon: "success",
                    button: "확인",
                })
                this.props.onSubmit();
            })
        }
        else {
            swal("모든 정보를 입력해주세요", "", "error");
            this.setState( {disabled: false});
        }
    }



    render() {
        return (
            <div id="reviewForm">
            <form className="foodList">
                <div className="h3-top"></div><h3>메뉴를 골라주세요</h3>
                <select name= "foodNm" onChange={this.handleChange}>
                    <option key="default-empty" hidden></option>
                    {this.props.foodList.map( (list, index) =>
                        <OptionList value={list.foodNm} key={index}/>
                    )}
                </select>
                <textarea
                    className= "review-text"
                    value={this.state.reviewText}
                    onChange={this.handleChange}
                    name="reviewText"
                    placeholder="리뷰는 솔직하게 작성해주세요"
               />
                <MyStarRating hadnleRating={this.handleChange}/>
                <button className="button-cancel" onClick={(e)=> {
                    e.preventDefault();
                    this.props.onSubmit()} }>취소</button>
                <button className="button-ok" onClick={this.submit} disabled={this.state.disabled}>완료</button>
            </form>
            </div>
        );
    }
}

export default MakeReview;
