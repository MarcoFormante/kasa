import Link from "next/link"

export function LinkButton({label,href,styles,type = "btn-main-red"}){
    return (
        <div className={`btn-container ${styles}`}>
            <Link className={"btn " + type} href={href}>{label}</Link>
        </div>
    )
}