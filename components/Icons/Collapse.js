import * as React from "react"

export default function Collapse(props) {
    return (
        <svg
            height={30}
            width={30}
            viewBox="0 0 21 21"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g
                fill="none"
                fillRule="evenodd"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M4.5 6.5h12M4.498 10.5h11.997M4.5 14.5h11.995" />
            </g>
        </svg>
    )
}