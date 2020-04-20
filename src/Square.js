import React from 'react';
    // handleClick() {
    //     this.setState({ value: 'X' });
    // }

class Square extends React.Component {
    componentDidUpdate() {
        console.log('square update:', this.props.value);
    }
    render() {
        return (
            <button 
                className="square" 
                onClick={this.props.handleClick}
            >
                {this.props.value}
            </button>
        )
    }
}

// const Square = props => {
//     return (
//         <button 
//             className="square" 
//             onClick={props.handleClick}
//         >
//             {props.value}
//         </button>
//     )
    
// }

export default Square;

