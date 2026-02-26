"use client"

export function Button({label,styles = "",onClick = ()=>{},type}){
    return (
        <div className={`btn-container ${styles}`}>
            <button onClick={onClick} className={"btn " + type}>{label}</button>
        </div>
    )
}