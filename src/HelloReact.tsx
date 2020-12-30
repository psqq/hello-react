
import * as React from 'react';

const HelloReact: React.FC<{
    name?: string
}> = ({ name = "React" }) => {
    return (
        <span>Hello, {name}!</span>
    );
}

export default HelloReact;
