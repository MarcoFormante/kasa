import { LinkButton } from "@/app/components/Button/LinkButton";
import Image from "next/image";
import fakeImage from "../../assets/images/hero-about.webp"
import { Button } from "@/app/components/Button/Button";

export default async function Logement({searchParams}){
    const {id} = await searchParams
    const response = await fetch(`http://localhost:3000/api/properties/${id}`) 
    const apt = await response.json()
    console.log(apt);
    
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
                        {apt.pictures && apt.pictures[0] && 
                        <Image 
                         className="big-pic"
                         src={apt.pictures[0]}
                         alt={apt.title}
                         width={358}
                         height={421}
                         />}

                       { apt.pictures.length > 1 && 
                       <div className="little-pics-container">
                           { apt.pictures.map((photo,i)=> (
                            i >= 1 &&
                            <Image 
                            key={photo}
                            src={photo}
                            alt={apt.title}
                            width={146}
                            height={176}
                            loading="eager"
                            />
                           )) 
                           }
                        </div>}
                    </div>

                    <div className="logement-info-container">
                        <div>
                            <h2 className="logement-title">{apt.title}</h2>
                            <address>{apt.location}</address>
                        </div>

                        <div className="logement-desc-container">
                            <p className="logement-desc">{apt.description}</p>
                        </div>
                        
                        <div>
                            <h3 className="equip-title">Équipements</h3>
                            <div className="logement-items-list-container">
                                <ul className="list-grid">
                                    {apt?.equipments.length > 0 && 
                                    apt.equipments.map((equip)=> <li key={equip} className="list-item">{equip}</li>)
                                    }
                                 
                                </ul>
                            </div>
                        </div>

                        <div className="mt-40">
                            <h3 className="category-title">Catégorie</h3>
                            <div className="logement-items-list-container">
                                <ul className="list-grid">
                                    {apt?.tags.length > 0 && 
                                      apt.tags.map((tag)=> <li key={tag} className="list-item">{tag}</li>)
                                    }
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
                              { apt?.host?.picture && 
                               <Image 
                                width={82}
                                height={82}
                                src={apt.host.picture} 
                                alt=""
                                />}

                                <span>{ apt?.host?.name || "User"}</span>

                                <div className="reviews">
                                    <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.41993 0.740832C6.68503 -0.246854 8.08645 -0.246854 8.35156 0.740831L9.3198 4.34812C9.43709 4.7851 9.83316 5.08888 10.2856 5.08888H13.7696C14.6917 5.08888 15.1224 6.23081 14.43 6.83978L11.3032 9.58975C11.0176 9.84097 10.8992 10.2325 10.9978 10.5999L12.1123 14.7517C12.3689 15.7077 11.2293 16.4156 10.486 15.7619L8.04616 13.616C7.66852 13.2839 7.10297 13.2839 6.72533 13.616L4.28546 15.7619C3.5422 16.4156 2.40263 15.7077 2.65923 14.7517L3.77364 10.5999C3.87225 10.2325 3.75388 9.84097 3.46824 9.58975L0.341498 6.83978C-0.350916 6.23081 0.0798023 5.08888 1.00191 5.08888H4.48588C4.93832 5.08888 5.3344 4.7851 5.45169 4.34812L6.41993 0.740832Z" fill="#99331A"/>
                                    </svg>
                                    <span>{apt?.rating_avg ?? 0}</span>
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






