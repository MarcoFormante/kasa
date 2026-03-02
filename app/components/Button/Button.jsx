"use client"

/**
 * Generic reusable Button component.
 * @function Button
 * @component
 * @memberof module:Components
 * @description
 * A versatile button wrapper that supports custom styling and click handlers.
 * @param {Object} props - Component props.
 * @param {string} props.label - The text displayed inside the button.
 * @param {string} [props.styles=""] - Additional CSS classes for the outer container.
 * @param {function} [props.onClick] - Function to execute on click.
 * @param {string} [props.type] - CSS class modifier to define the button's visual variant.
 * @returns {JSX.Element} A styled button wrapped in a container div.
 */
export function Button({label,styles = "",onClick = ()=>{},type}){
    return (
        <div className={`btn-container ${styles}`}>
            <button onClick={onClick} className={"btn " + type}>{label}</button>
        </div>
    )
}