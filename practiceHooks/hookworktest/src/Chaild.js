import React from 'react'

const Chaild = (props) => {
    const sun = "sun"
    return (
        <div>{props.data}
            <button onClick={() => { props.data("sun") }}>aaa</button>
        </div>
    )
}

export default Chaild