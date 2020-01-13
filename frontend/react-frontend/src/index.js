import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './bootstrap-min.css';

// set CORS header for all requests
//axios.defaults.headers.common['Access-Control-Allow-Origin'] = "*";

// output field
function OutputField(props) {
    return (
        <div className="output">
            {props.value}
        </div>
    );
}

// list models button
function ListModelsBtn(props) {
    return (
        <button className="btn btn-info" onClick={props.onClick}>
            {"List models"}
        </button>
    );
}

// get model <val> button
function GetModelBtn(props) {
    return (
        <button className="btn btn-info" onClick={props.onClick}>
            {"Get model 1"}
        </button>
    );
}
// create new model

// delete model <val>

class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            output: "output goes here",
        };
    }

    render() {
        return (
            <div className="demo">
                <ListModelsBtn 
                    onClick={() => this.getModelList()}
                />
                <GetModelBtn 
                    onClick={() => this.getModel(1)}
                />
                <OutputField value={this.state.output}/>
            </div>
        );
    }

    getModelList() {
        // API call to backend
        axios({
            method: 'get',
            url: 'http://influx.bryanlearn.com:3001/model',
            headers: {'Access-Control-Allow-Origin': "*"}
        })
        .then(res => { // update state with returned data
            const data = res.data.map(obj => "{ID: "+ obj.id + ", name: " + obj.name + "} ");
            this.setState({output: data});
        });

    }

    getModel(id) {
        // API call to backend
        axios({
            method: 'get',
            url: `http://influx.bryanlearn.com:3001/model/${this.props.id}`,
            headers: {'Access-Control-Allow-Origin': "*"}
        })
        .then(res => { // update state with returned data
            const data = "{id: 1, name: test1}"
            this.setState({output: data});
        });

    }
}

ReactDOM.render(
    <Demo />,
    document.getElementById('root')
);
