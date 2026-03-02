'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";

export function MessageButton({id,fakeImage,text,sentTime,userName,paramId}){

    const router = useRouter()

    return (
        <button onClick={()=>router.push("/messagerie?id=" + id)}>
            <div className={`message-item-container ${id == paramId ? "message-item-container-selected" : ""}`}>
                <div className="message-item-left-container">
                    <Image className="message-user-image" src={fakeImage} width={44.5} height={45.05} alt=""/>
                    <div className="message-info-right-container">
                        <div className="message-info-mid-container">
                            <span className="user-name">{userName}</span>
                            <p className="user-message-short">{text}</p>
                        </div>
                        <div className="message-time-info-container">
                            <span className="sent-time">{sentTime}</span>
                            <span className={`message-checked message-checked-false`}></span>
                        </div>               
                    </div>
                </div>
            </div>
        </button>
    )
}