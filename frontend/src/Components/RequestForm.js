import React from 'react';
import requests from "../lib/requests";
import SelectList from "./SelectList";
import { Fragment } from "react";
import FoodList from "./FoodList";


class RequestForm extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            routeNm: null,
            stdRestNm: null,
            routeNms: [],
            stdRestNms: [],
            foodList: []
        }

        this.onChangeRouteNm = this.onChangeRouteNm.bind(this)
        this.onChangeRestNm = this.onChangeRestNm.bind(this)
        this.submit = this.submit.bind(this)
    }


     componentDidMount() {
        let myList=[]

        requests.getRouteNmList().then(result => {
            myList= result.map(obj => ( {
                value: obj, label: obj }))
            this.setState({routeNms: myList });
        });
    }


    //노선명 저장 및 해당 노선의 휴게소목록 얻기
    async onChangeRouteNm(e) {

        this.setState({stdRestNm: ""});
        this.setState({routeNm: e.target.value});

        let restNmList = await requests.getStdRestNmList(e.target.value);

        restNmList= restNmList.map(obj => ( {
            value: obj["stdRestNm"], label: obj["stdRestNm"] }))

        const unique_restNm = restNmList.reduce((prev,now) => {
            if(!prev.some(obj => obj["label"] === now["label"])){
                prev.push(now);
            }
            return prev;
        },[]);
        this.setState( {stdRestNms: unique_restNm} );
    };

    //해당 휴게소명 저장
    onChangeRestNm(e) {
        this.setState({stdRestNm: e.target.value});
    }


    //Form 제출 시
    async submit(e){
        e.preventDefault();

        const result = await requests.getFoodList( this.state.routeNm, this.state.stdRestNm);
        this.setState({foodList: result});
    }



    render() {
        return (
            <Fragment>
                <form className="restList">
                    <h3>노선 목록</h3>
                    <select onChange={this.onChangeRouteNm}>
                        <option key="default-empty" hidden></option>
                        {this.state.routeNms.map( (list, index) =>
                            <SelectList value={list.value} key={index}/>
                        )}
                    </select>

                    <h3>휴게소 목록</h3>
                    <select onChange={this.onChangeRestNm}>
                        <option key="default-empty" hidden></option>
                        {this.state.stdRestNms.map( (list, index) =>
                            <SelectList value={list.value} key={index}/>
                        )}
                    </select>

                    <button onClick={this.submit}>Send</button>
                </form>
                <ul>
                    {this.state.foodList.map( (list,index) =>
                        <FoodList
                            key = {index}
                            foodNm = {list.foodNm}
                            foodCost = {list.foodCost}
                        />
                    )}
                </ul>
            </Fragment>
        );
    }
}

export default RequestForm;