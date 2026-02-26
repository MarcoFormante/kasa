export function Heading({text,styles=""}){
    return (
        <h1 className={"heading-h1 " + styles}>{text}</h1>
    )
}