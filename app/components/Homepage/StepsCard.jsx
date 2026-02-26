export function StepsCard({title,desc}){
    return (
        <div className="step-card">
            <div className="flex-container">
                <span>{title}</span>
                <p>{desc}</p>
            </div>
        </div>
    )
}