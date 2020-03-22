import React from 'react';
import CategoriesListRow from './CategoriesListRow';


class CategoryList extends React.Component {
    constructor(props) {
        super(props);
      }

    render() {
        return (
            <div>
                <h1>Categories</h1>
                <div>
               {
                    this.props.category.map(categories => {
                        return (
                            <CategoriesListRow 
                                key={categories._id} 
                                category={categories}
                            />
                        )
                    })
                } 
                </div>
          </div>
        )
    }
}

export default CategoryList;