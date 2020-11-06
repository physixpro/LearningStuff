import React, {Component} from 'react';

class Yes extends Component {

    constructor(props){super();
    this.state={value: "Nothing"}}

    render(){
        return(
            <div>

                <h1 className="header-one" onClick={()=>this.setState({value: "create"})}>
{this.state.value}
                </h1>

            </div>
        );
    }
}

export default Yes;