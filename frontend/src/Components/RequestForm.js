import React from 'react';
import requests from "../lib/requests";
import TestForm from "./TestForm";


class RequestForm extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            routeNms: [],
            stdRestNms: []
        }
        this.form = {
            routeNm:React.createRef(),
            stdRestNm:React.createRef()
        }
        this.onChangeRouteNm = this.onChangeRouteNm.bind(this)
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


    //해당 route의 휴게소 리스트 얻기
    async onChangeRouteNm(selectedOption) {

        console.log(selectedOption.value);
        let restNmList = await requests.getStdRestNmList(selectedOption.value);

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



    //Form 제출 시
    async submit(){

        const data = {
            routeNm: this.form.routeNm.current.value,
            stdRestNm: this.form.stdRestNm.current.value
        }
        const re = await requests.getStdRestNmList;
    }




    render() {


        return (

                <form>
                    <label>노선 목록</label>
                    <select onChange={this.onChangeRouteNm}>
                        {this.state.routeNms.map( (todo, index) =>
                            <TestForm value={todo.value} key={index}/>
                        )}
                    </select>
                    <button onClick={this.submit}>Send</button>
                </form>
        );
    }
}

export default RequestForm;