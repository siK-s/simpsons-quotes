import React, { Component } from 'react';
import './QuoteCard.css';

class QuoteCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { favorite: false };
    }
    render() {

        const tagFaforite = (e) => {
            const newFavorite = !this.state.favorite;
            this.setState({favorite: newFavorite});
        };

        return (
            <figure className='QuoteCard'>
                <img src={this.props.image} alt={this.props.character} />
                <figcaption>
                    <blockquote>{this.props.quote}</blockquote>
                    <p>
                        <cite>{this.props.character}</cite>
                        <span className = {this.state.favorite ? 'is-favorite' : ''} onClick={tagFaforite}>&#9733;</span>
                    </p>
                </figcaption>
            </figure>
        );
    }
}
/*
function QuoteCard(props) {
    return (
        <figure className='QuoteCard'>
            <img src={props.image} alt={props.character} />
            <figcaption>
                <blockquote>{props.quote}</blockquote>
                <cite>{props.character}</cite>
            </figcaption>
        </figure>
    );
}
*/
export default QuoteCard;