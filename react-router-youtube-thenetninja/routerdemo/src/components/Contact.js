import React from 'react';

const Contact = (props) => {
    setTimeout(()=>{
        props.history.push('/about');
    }, 2000);
    return (
        <div className="container">
            <h4 className="center">
                This is the Contact page
            </h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt doloribus a sapiente fuga, fugit odit suscipit soluta culpa temporibus commodi voluptatum eos inventore totam perferendis, nobis iste accusamus debitis ab.</p>
        </div>
    )
}

export default Contact;