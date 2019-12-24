// ./src/components/Faq/FaqItem.js
import React from 'react';

const FaqItem = props => {
    const {header, content, isOpen} = props;

    const style = { display: isOpen ? 'block' : 'none' };
    return (
        <>
            <header>{ header }</header>
            <article style={style}>{ content }</article>
        </>
    )
}

export default FaqItem;