import React from 'react';
import OptionList from "./OptionList";
import MyStarRating from "./MyStarRating";



class CreateReview extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            disabled: false, //send 중복 방지
            foodNm: "",
            reviewText: "",
            rating: 0
        }
    }


    //***********input null시 처리 해줘야함.***************
    //각 input에 대한 값 저장.
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value});
    }


    //Form 제출 시 부모에게 props 전달
    submit = e => {
        this.setState( {disabled: true});
        e.preventDefault();
        this.setState( {disabled: false});
        console.log(this.state.foodNm);
        console.log(this.state.reviewText);
        console.log(this.state.rating);
    }



    render() {
        return (
            <div id="reviewForm">
            <form className="foodList">
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
                <button onClick={this.submit} disabled={this.state.disabled}>Send</button>
            </form>
            </div>
        );
    }
}

export default CreateReview;
