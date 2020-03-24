import React from 'react';
import logo from './logo.svg';
import './App.css';
import './css/page_accueil.css';
import Header from './component/header';


class App extends React.Component {
  constructor() {
     super();
     this.state = {
        data: 
        [
           {
              "id":1,
              "name":"Foo",
              "age":"20"
           },
           {
              "id":2,
              "name":"Bar",
              "age":"30"
           },
           {
              "id":3,
              "name":"Baz",
              "age":"40"
           }
        ]
     }
  }
  render() {
     return (
        <div>
           <Header/>
           <table>
              <tbody>
                 {this.state.data.map((person, i) => <TableRow key = {i} 
                    data = {person} />)}
              </tbody>
           </table>
        </div>
     );
  }
}

class TableRow extends React.Component {
  render() {
     return (
        <tr>
           <td>{this.props.data.id}</td>
           <td>{this.props.data.name}</td>
           <td>{this.props.data.age}</td>
        </tr>
     );
  }
}
export default App;