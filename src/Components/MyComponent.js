import React, { useState } from 'react';

const ChildComponent = (props) => {
    const {state, setState} = useState("아기사자");
    console.log(state);
    console.log(setState);
    setState("사자22");
    
    return(
        <p>
            {props.name} 자식 컴포넌트 입니다.
            {state}
        </p>
    )
}

const MyComponent =() => {
    return (
        <>
            <p>
                컴포넌트입니다
            </p>
            <ChildComponent />
        </>
    );
};

export default MyComponent;