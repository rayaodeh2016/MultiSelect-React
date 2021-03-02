import React from 'react';
import MultiSelect from './components/myselect';
import './index.css'

const options = [
  { name: 'Budget', value: 'Budget' },
  { name: 'Food allgeries', value: 'Food allgeries' },
  { name: 'Number of pepole', value: 'Number of pepole' },
  { name: 'Special restrictions', value: 'Special restrictions' },

]


class App extends React.Component {
  state = {
    selectedOptions: []
  }
  handleChange = (options) => {
    this.setState(() => {
      return {
        selectedOptions: options
      }
    });
  }
  render() {
    return (
    
    <div>
              
          <MultiSelect 
            options={options}
    
           
            onChange={this.handleChange}
            />
         
       
 </div>
    );
  }
}

export default App;
