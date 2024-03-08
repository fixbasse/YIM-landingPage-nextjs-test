import React from 'react'

interface ButtonProps {
    title: string;
}

const Button = ({
    title
}: ButtonProps) => {
    return (
        <button
            className=' bg-green-950'
        >
            {title}
        </button>
    )
}

export default Button