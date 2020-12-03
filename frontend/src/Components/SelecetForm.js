import React, {Component} from 'react'
import requests from "../lib/requests";
import TestForm from "./TestForm";


class SelectForm extends Component{

    constructor(props) {
        super(props);
        this.state={
            starList: []
        }
    }


    componentDidMount() {
        let myList=[]

        requests.getRouteNmList().then(result => {
            myList= result.map(obj => ( {
                value: obj, label: obj }))
            this.setState({starList: myList });
        });
    }






    render(){
        console.log(this.state.starList);

        return (
        <select >
            {this.state.starList.map( (todo) =>
                <TestForm value={todo.value}/>
            )}
        </select>
        )
    }

}

export default SelectForm;



