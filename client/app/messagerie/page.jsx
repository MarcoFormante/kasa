import Image from "next/image";
import { LinkButton } from "../components/Button/LinkButton";
import fakeImage from "../assets/images/about-mission.webp"

export default function Messagerie(){
    return (
        <main className="messagerie-page">
            <div className="messagerie-page-left-container">
                <div className="retour-btn-container retour-btn-container-w-93">
                    <LinkButton
                        href={"/"} 
                        label={"Retour"}
                        type="btn-light-grey"
                    />
                </div>

                <section className="messages-section">
                    <h1>Messages</h1>
                    <div>
                        <ul className="message-list">
                            <li className="message-item">
                                <button>
                                    <div className="message-item-container message-item-container-selected">
                                        <div className="message-item-left-container">
                                            <Image className="message-user-image" src={fakeImage} width={44.5} height={45.05} alt=""/>
                                            <div className="message-info-right-container">
                                                <div className="message-info-mid-container">
                                                    <span className="user-name">{"Utilisateur"}</span>
                                                    <p className="user-message-short">{"Bonjour, votre appartement est-il dispo"}</p>
                                                </div>
                                                <div className="message-time-info-container">
                                                    <span className="sent-time">{"11:04 am"}</span>
                                                    <span className={`message-checked message-checked-false`}></span>
                                                </div>               
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </li>

                            <li className="message-item">
                                <button>
                                    <div className="message-item-container">
                                        <div className="message-item-left-container">
                                            <Image src={fakeImage} width={44.5} height={45.05} alt=""/>
                                            <div className="message-info-right-container">
                                                <div className="message-info-mid-container">
                                                    <span className="user-name">{"Utilisateur"}</span>
                                                    <p className="user-message-short">{"Bonjour, votre appartement est-il dispo"}</p>
                                                </div>
                                                <div className="message-time-info-container">
                                                    <span className="sent-time">{"11:04 am"}</span>
                                                    <span className={`message-checked message-checked-false`}></span>
                                                </div>               
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </li>

                            <li className="message-item">
                                <button>
                                    <div className="message-item-container">
                                        <div className="message-item-left-container">
                                            <Image src={fakeImage} width={44.5} height={45.05} alt=""/>
                                            <div className="message-info-right-container">
                                                <div className="message-info-mid-container">
                                                    <span className="user-name">{"Utilisateur"}</span>
                                                    <p className="user-message-short">{"Bonjour, votre appartement est-il dispo"}</p>
                                                </div>
                                                <div className="message-time-info-container">
                                                    <span className="sent-time">{"11:04 am"}</span>
                                                    <span className={`message-checked message-checked-false`}></span>
                                                </div>               
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
            <div className="w-full">
                <section className="conversation-section">
                    <ul className="conversation-messages-list">
                        <li>
                            <Image className="conversation-user-image" src={fakeImage} alt="Image du profile de "/>
                            <div className="conversation-message-flex-col-container">
                                <div className="conversation-message-info">
                                    {"Utilisateur"} <span className="circle-space"></span> {"11:04pm"}
                                </div>
                                <div>
                                    <div className="message-white-container">
                                        <p>Bonjour, votre appartement est-il disponible pour le week-end du 12 au 14 octobre ?</p>
                                    </div>
                                </div>
                            </div>
                        </li>

                                                <li>
                            <Image className="conversation-user-image" src={fakeImage} alt="Image du profile de "/>
                            <div className="conversation-message-flex-col-container">
                                <div className="conversation-message-info">
                                    {"Utilisateur"} <span className="circle-space"></span> {"11:04pm"}
                                </div>
                                <div>
                                    <div className="message-white-container">
                                        <p>Bonjour, votre appartement est-il disponible pour le week-end du 12 au 14 octobre ?</p>
                                    </div>
                                </div>
                            </div>
                        </li>


                        <li className="user-message-row-reverse">
                            <Image className="conversation-user-image" src={fakeImage} alt="Image du profile de "/>
                            <div className="conversation-message-flex-col-container">
                                <div className="conversation-message-info">
                                    {"Utilisateur"} <span className="circle-space"></span> {"11:04pm"}
                                </div>
                                <div>
                                    <div className="message-white-container">
                                        <p>Bonjour, votre appartement est-il disponible pour le week-end du 12 au 14 octobreasdasd adssadsad asdsadsadsad zsdsadsa ?</p>
                                    </div>
                                </div>
                            </div>
                        </li>

                    </ul>        
                </section>

                <section className="conversation-form">
                    <form>
                        <textarea name="message" id="message" placeholder="Envoyer un message"></textarea>
                        <button type="submit">
                            X
                        </button>
                    </form>
                </section>
            </div>
        </main>
    )
}