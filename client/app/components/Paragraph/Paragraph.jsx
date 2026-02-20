export function Paragraph({text,styles=""}){
    return (
        <p className={"paragraph " + styles}>{text}</p>
    )
}