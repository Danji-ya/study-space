import React, {Fragment} from 'react';
import requests from "../lib/requests";
import OptionList from "./OptionList";


class SelectList extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            routeNm: "",
            stdRestNm: "",
            stdRestNms: [],
        }
        this.onChangeRouteNm = this.onChangeRouteNm.bind(this)
        this.onChangeRestNm = this.onChangeRestNm.bind(this)
    }


    //노선명 저장 및 해당 노선의 휴게소목록 얻기
    async onChangeRouteNm(e) {
        this.setState({stdRestNm: ""});
        this.setState({ [e.target.name]: e.target.value});


        this.props.onSelect(e); //RequestForm 으로 전달

        let restNmList = await requests.getStdRestNmList(e.target.value);

        restNmList= restNmList.map(obj => ( {
            value: obj["stdRestNm"], label: obj["stdRestNm"] }))


        //유니크한 휴게소명 선택
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
        this.setState( {[e.target.name]: e.target.value});
        this.props.onSelect(e); //RequestForm 으로 전달
    }


    render() {
        return (
            <Fragment>
                <h3>노선 목록</h3>

                <select name="routeNm" onChange={this.onChangeRouteNm}>
                    <option key="default-empty" hidden></option>
                    {this.props.routeNms.map((list, index) =>
                        <OptionList value={list.value} key={index}/>
                    )}
                </select>

                <h3>휴게소 목록</h3>
                <select name="stdRestNm" onChange={this.onChangeRestNm}>
                    <option key="default-empty" hidden></option>
                    {this.state.stdRestNms.map((list, index) =>
                        <OptionList value={list.value} key={index}/>
                    )}
                </select>
            </Fragment>
        );
    }
}

export default SelectList;