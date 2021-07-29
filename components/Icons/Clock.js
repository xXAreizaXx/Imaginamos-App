import * as React from "react"

export default function Clock(props) {
    return (
        <svg
            height={props.height}
            width={props.width}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 60 60"
            {...props}>
            <path
                d="M30 0C13.458 0 0 13.458 0 30s13.458 30 30 30 30-13.458 30-30S46.542 0 30 0zm0 58C14.561 58 2 45.439 2 30S14.561 2 30 2s28 12.561 28 28-12.561 28-28 28z"
                fill={props.fill} />
            <path
                d="M30 6a1 1 0 00-1 1v23H14a1 1 0 100 2h16a1 1 0 001-1V7a1 1 0 00-1-1z"
                fill={props.fill} />
        </svg>
    )
}