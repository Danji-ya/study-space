import React from 'react';
import requests from "../lib/requests";
import SelectList from "./SelectList";
import swal from "sweetalert";


class RequestForm extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            disabled: false, //send 중복 방지
            routeNm: null,
            stdRestNm: null,
            routeNms: [],
            stdRestNms: []
        }
        this.onSelect = this.onSelect.bind(this)
        this.submit = this.submit.bind(this)
    }


    componentDidMount() {
        let myList = []
        requests.getRouteNmList().then(result => {
            myList = result.map(obj => ({
                value: obj, label: obj
            }))
            this.setState({routeNms: myList});
        });
    }


    onSelect(e) {
        if(e.target.name === "routeNm" )
            this.setState({stdRestNm: null})
        this.setState({ [e.target.name] : e.target.value})
    }

    //Form 제출 시 부모에게 props 전달
    async submit(e){
        console.log(this.state.routeNm)
        console.log(this.state.stdRestNm)

        e.preventDefault();
        this.setState({disabled: true});

        if( this.state.routeNm && this.state.stdRestNm ) {

            const result = await requests.getFoodList(this.state.routeNm, this.state.stdRestNm);
            this.setState({disabled: false});
            this.setState({routeNm: null, stdRestNm: null})
            this.props.onSubmit(result);
        }
        else {
            swal("노선을 선택해주세요", "", "error");
            this.setState({disabled: false});
        }
    }



    render() {
        return (
            <div className="restList">
                <form>
                    <SelectList routeNms={this.state.routeNms} onSelect={this.onSelect}/>
                    <button onClick={this.submit} disabled={this.state.disabled}>Send</button>
                </form>
            </div>
        );
    }
}

export default RequestForm;