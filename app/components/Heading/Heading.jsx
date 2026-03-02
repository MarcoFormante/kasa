/**
 * @module Components
 */

/**
 * Heading component for titles.
 * @param {Object} props - Component props.
 * @param {string} props.text - The text to display.
 * @param {string} [props.styles=""] - Additional CSS classes.
 * @returns {JSX.Element}
 */
export function Heading({text,styles=""}){
    return (
        <h1 className={"heading-h1 " + styles}>{text}</h1>
    )
}