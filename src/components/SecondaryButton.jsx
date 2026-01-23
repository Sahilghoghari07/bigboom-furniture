import React from 'react'

function SecondaryButton(props) {
    return (
        <button
            type={props.type}
            onClick={props.onClick}
            className={`${props.className} py-2 px-4 rounded-xl font-semibold text-black cursor-pointer bg-orange-500 hover:-translate-y-1 transition-all duration-500`}
        >
            {props.text}
        </button>
    )
}

export default SecondaryButton