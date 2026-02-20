import Link from "next/link"

export function LinkButton({label,href,styles}){
    return (
        <div className={`btn-container ${styles}`}>
            <Link className="btn" href={href}>{label}</Link>
        </div>
    )
}