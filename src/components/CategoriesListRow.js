import React from 'react';

class CategoriesListRow extends React.Component {
    render() {
        return (
            <div className='item'>
                {this.props.categories}
            </div>
        )
    }
}

export default CategoriesListRow;