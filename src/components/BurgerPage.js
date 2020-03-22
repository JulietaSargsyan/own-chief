import React from 'react';
import {food} from '../data/data';
import CategoryList from './CategoryList';


class BurgerPage extends React.Component {
    state = {
      categories: food[0].categories
    }
  
    constructor(props) {
      super(props);
    }

    render() {  
        return <CategoryList
          category={this.state.categories} 
          />
      }
}

export default BurgerPage;