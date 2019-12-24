// ./src/components/Faq/Faq.js
import React from 'react';
import FaqItem from './FaqItem';

export default class Faq extends React.Component {
    render() {
        return (
            <section>
                <FaqItem 
                    header={"Jak programwać?"} 
                    content={"Lorem ipsum dolor..."}
                    isOpen={ true }
                />
                <FaqItem 
                    header={"Dlaczego JavaScript?"} 
                    content={"Lorem ipsum dolor..."} 
                    isOpen={ false }
                />
            </section>
        )
    }
}

