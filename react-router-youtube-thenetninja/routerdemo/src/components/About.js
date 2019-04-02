import React from 'react';
import Rainbow from '../hoc/Rainbow';

const About = () => {
    return (
        <div className="container">
            <h4 className="center">
                This is the About page
            </h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt doloribus a sapiente fuga, fugit odit suscipit soluta culpa temporibus commodi voluptatum eos inventore totam perferendis, nobis iste accusamus debitis ab.</p>
        </div>
    )
}

export default Rainbow(About);