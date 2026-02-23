import { LinkButton } from "@/app/components/Button/LinkButton";
import Image from "next/image";
import fakeImage from "../../assets/images/hero-about.webp"
import { Button } from "@/app/components/Button/Button";

export default function Logement(){
    return (
        <main className="logement-page">
            <div>
                <div className="retour-btn-container retour-btn-container-w-189">
                    <LinkButton
                        href={"/"} 
                        label={"Retour aux annonces"}
                        type="btn-light-grey"
                    />
                </div>           
            </div>

            <div className="flex-row-container">
                <div>
                    <div className="carousel">
                        <Image 
                         className="big-pic"
                         src={fakeImage}
                         alt=""
                         width={358}
                         height={421}
                         />

                        <div className="little-pics-container">
                            <Image 
                            src={fakeImage}
                            alt=""
                            width={146}
                            height={176}
                            />

                            <Image 
                            src={fakeImage}
                            alt=""
                            width={146}
                            height={176}
                            />

                            <Image 
                            src={fakeImage}
                            alt=""
                            width={146}
                            height={176}
                            />

                            <Image 
                            src={fakeImage}
                            alt=""
                            width={146}
                            height={176}
                            />
                        </div>
                    </div>

                    <div className="logement-info-container">
                        <div>
                            <h2 className="logement-title">Appartement cosy</h2>
                            <address>Ile de France - Paris 17e</address>
                        </div>

                        <div className="logement-desc-container">
                            <p className="logement-desc">Votre maison loin de chez vous. Que vous veniez de l'autre bout du monde, ou juste de quelques stations de RER, vous vous sentirez chez vous dans notre appartement.</p>
                        </div>
                        
                        <div>
                            <h3 className="equip-title">Équipements</h3>
                            <div className="logement-items-list-container">
                                <ul className="list-grid">
                                    <li className="list-item">Cafetière</li>
                                    <li className="list-item">Cafetière</li>
                                    <li className="list-item">Cafetière</li>
                                    <li className="list-item">Cafetière</li>
                                    <li className="list-item">Cafetière</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-40">
                            <h3 className="category-title">Catégorie</h3>
                            <div className="logement-items-list-container">
                                <ul className="list-grid">
                                    <li className="list-item">Batignolle</li>
                                    <li className="list-item">Batignolle</li>
                                    <li className="list-item">Batignolle</li>
                                    <li className="list-item">Batignolle</li>
                                    <li className="list-item">Batignolle</li>
                                    <li className="list-item">Batignolle</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="profile-info-container">
                    <div className="">
                        <div className="profile-flex-col">
                            <h3 className="profile-title">Votre hôte</h3>
                            <div className="profile-flex-row">
                                <Image 
                                width={82}
                                height={82}
                                src={fakeImage} 
                                alt=""/>

                                <span>{"Nathalie Jean"}</span>

                                <div className="reviews">
                                    <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.41993 0.740832C6.68503 -0.246854 8.08645 -0.246854 8.35156 0.740831L9.3198 4.34812C9.43709 4.7851 9.83316 5.08888 10.2856 5.08888H13.7696C14.6917 5.08888 15.1224 6.23081 14.43 6.83978L11.3032 9.58975C11.0176 9.84097 10.8992 10.2325 10.9978 10.5999L12.1123 14.7517C12.3689 15.7077 11.2293 16.4156 10.486 15.7619L8.04616 13.616C7.66852 13.2839 7.10297 13.2839 6.72533 13.616L4.28546 15.7619C3.5422 16.4156 2.40263 15.7077 2.65923 14.7517L3.77364 10.5999C3.87225 10.2325 3.75388 9.84097 3.46824 9.58975L0.341498 6.83978C-0.350916 6.23081 0.0798023 5.08888 1.00191 5.08888H4.48588C4.93832 5.08888 5.3344 4.7851 5.45169 4.34812L6.41993 0.740832Z" fill="#99331A"/>
                                    </svg>
                                    <span>{"3"}</span>
                                </div>
                               
                            </div>
                             <div className="profile-btns">
                                <Button label={"Contacter l’hôte"} type={"btn-main-red"}/> 
                                <LinkButton href={"/messagerie/3"} label={"Envoyer un message"} type={"btn-main-red"}/> 
                            </div>
                        </div>
                    </div>               
                </div>
            </div>
        </main>
    )
}






