'use client'

import Link from "next/link"

/**
 * 
 * A reusable Alert component for displaying feedback messages.
 * @function Alert
 * @memberof module:Components
 * @description
 * Renders a clickable notification bar. It is typically managed by the {@link AlertHandlerContext}.
 * The alert automatically adapts its styling based on the severity (success or error) 
 * and can include a contextual link for login errors.
 * Usage:
 * - Click anywhere on the alert to trigger the `onClose` callback inside a client component.
 * - If `isLoginError` is true, an additional link to the login page is displayed.
 * @param {Object} props - Component props.
 * @param {('green'|'red')} [props.color="green"] - The visual theme of the alert.
 * @param {string} props.text - The message to be displayed. If empty, the component renders nothing.
 * @param {boolean} [props.isLoginError=false] - If true, shows a "Connectez-vous" link.
 * @param {function} props.onClose - Callback function executed when the alert is clicked.
 * @returns {JSX.Element|null} The rendered alert or null if no text is provided.
 */
export function Alert({color = "green",text,isLoginError = false,onClose}){

    return text && (
        <div role="button" onClick={onClose} className={`pointer alert alert-${color === "red" ? "red" : "green"}`}>
            {text}
            {isLoginError && 
                <div className="mt-40">
                    <Link className="underline" href="/login">Connectez-vous</Link>
                </div>
            }
        </div>
    )
}