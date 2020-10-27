import React, { Component } from 'react';
import axios from 'axios';

class TableRow extends Component {

    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.get('http://localhost:4000/business/delete/'+this.props.obj._id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <tr>
            <td>
                {this.props.obj.date}
            </td>

            <td>
                {this.props.obj.dateChecked}
            </td>
            
            <td>
                {this.props.obj.death}
            </td>
            <td>
                {this.props.obj.deathIncrease}
            </td>
            <td>
                {this.props.obj.hospitalized}
            </td>
            <td>
                {this.props.obj.hospitalizedCumulative}
            </td>
            <td>
                {this.props.obj.hospitalizedCurrently}
            </td>
            <td>
                {this.props.obj.hospitalizedIncrease}
            </td>

            <td>
                {this.props.obj.inIcuCumulative}
            </td>
            <td>
                {this.props.obj.inIcuCurrently}
            </td>

            <td>
                {this.props.obj.negative}
            </td>
            <td>
                {this.props.obj.negativeIncrease}
            </td>

            <td>
                {this.props.obj.onVentilatorCumulative}
            </td>
            <td>
                {this.props.obj.onVentilatorCurrently}
            </td>

            <td>
                {this.props.obj.pending}
            </td>
            <td>
                {this.props.obj.posNeg}
            </td>

            <td>
                {this.props.obj.positive}
            </td>
            <td>
                {this.props.obj.positiveIncrease}
            </td>

            <td>
                {this.props.obj.recovered}
            </td>

            <td>
                {this.props.obj.total}
            </td>
            <td>
                {this.props.obj.totalTestResults}
            </td>
            <td>
                {this.props.obj.totalTestResultsIncrease}
            </td>

            
            <td>
                <button onClick={this.delete} className="btn btn-info">Push</button>
            </td>
            </tr>
        );
    }
}

export default TableRow;
