import React from 'react'

function PrimaryButton(props) {
    return (
        <button
            type={props.type}
            className='w-full py-3 px-4 rounded-xl font-semibold bg-black text-white hover:bg-orange-500 hover:text-black transition-all duration-500'
        >
            {props.text}
        </button>
    )
}

export default PrimaryButton