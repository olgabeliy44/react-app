import React, { Component } from 'react';
import axios from 'axios';
import CSVReader from 'react-csv-reader';

export default class Index extends Component {

  constructor(props) {
      super(props);
      this.state = {data: [], csvData: []};


    }

    
    componentDidMount(){

        axios.get('http://localhost:4000/business/')
          .then(res => console.log(res.data))
          .catch(function (err) {
            console.log(err);
          });
     
    }

    onSubmit = (e) => {      
      const arrData = [];
      
      let l = this.state.csvData.length;
      let tempData = this.state.csvData;

      let totalConfirmed = 0;
      let totalDeaths = 0;
      let totalRecovered = 0;
      let totalActive = 0;

      let date, month, year;
      
      let today = new Date(tempData[1][2]);
      today.setDate(today.getDate() - 1);
      for(let index = 1;index < l-1; index++)
      {
        date = today.getDate();
        month = today.getMonth() + 1;
        if(month < 10) month = '0' + month;
        year = today.getFullYear();

        let temp = {
          Province_State: tempData[index][0],
          Country_Region: tempData[index][1],
          Last_Update: tempData[index][2],
          Lat: tempData[index][3],
          Long_: tempData[index][4],
          Confirmed: tempData[index][5],
          Deaths: tempData[index][6],
          Recovered: tempData[index][7],
          Active: tempData[index][8],
          FIPS: tempData[index][9],
          Incident_Rate: tempData[index][10],
          People_Tested: tempData[index][11],
          People_Hospitalized: tempData[index][12],
          Mortality_Rate: tempData[index][13],
          UID: tempData[index][14],
          ISO3: tempData[index][15],
          Testing_Rate: tempData[index][16],
          Hospitalization_Rate: tempData[index][17]
        }

        totalConfirmed = Number(totalConfirmed) + Number(tempData[index][5]);
        totalDeaths = Number(totalDeaths) + Number(tempData[index][6]);
        totalRecovered = Number(totalRecovered) + Number(tempData[index][7]);
        totalActive = Number(totalActive) + Number(tempData[index][8]);

        arrData.push(temp);

      }
   
      let obj = {
        date: year + '-' + month + '-' + date,
        confirmed: totalConfirmed,
        deaths: totalDeaths,
        recovered: totalRecovered,
        active: totalActive,
        data: arrData
      }
      axios.post('http://localhost:4000/business/add', obj)
      .then(res => alert("Successfully uploaded!"));
      
    }

    render() {
      return (      
        <div>
          <CSVReader onFileLoaded={(data, fileInfo) => {            
            this.setState({csvData: data});
          }} />
          <button onClick={this.onSubmit}>Push to my server</button>
          <table>
            <tbody>
              {
                    this.state.csvData.map((numList,i) =>(
                      <tr key={i}>
                        {
                          numList.map((num,j)=>
                            <td key={j} style={{border: '1px solid black', textAlign: 'center'}}>{num}</td>
                          )
                        }
                      </tr>
                    ))
              }
            </tbody>
          </table>
        </div>
      );
    }
  }