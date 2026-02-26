import { categoriesList, equipmentsList } from "@/app/utils";

export function AjoutForm(){
    return (
        <div >
            <div className="ajout-form-flex-container mt-40">
                <div className="white-container white-container-py-80">
                    <div className="flex-col-input-container">
                        <label htmlFor="title">Titre de la propriété</label>
                        <input type="text" placeholder="Ex : Appartement cosy au coeur de paris" name="title" id="title" />
                    </div>

                    <div className="flex-col-input-container">
                        <label htmlFor="desc">Description</label>
                        <textarea placeholder="Décrivez votre propriété en détail..." name="desc" id="desc"/>
                    </div>

                    <div className="flex-col-input-container">
                        <label htmlFor="zipcode">Code postal</label>
                        <input type="text"  name="zipcode" id="zipcode" />
                    </div>

                    <div className="flex-col-input-container">
                        <label htmlFor="localisation">Localisation</label>
                        <input type="text"  name="localisation" id="localisation" />
                    </div>
                </div>

                <div className="right-container">
                    <div className="white-container white-container-py-48 white-container-half">
                        <div className="flex-col-input-container">
                            <label htmlFor="coverImage">Image de couverture</label>
                            <div className="flex-input-container">
                             <div className="file-text-container"></div>
                                <div className="file-input-btn">
                                    <input type="file" name="coverImage" id="coverImage" accept="image/jpg,image/png,image/webp" />
                                    <span>+</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex-col-input-container">
                            <label htmlFor="aptImage">Image du logement</label>
                            <div className="flex-input-container">
                               <div className="file-text-container"></div>
                                <div className="file-input-btn">
                                    <input type="file" name="aptImage" id="aptImage" accept="image/jpg, image/png, image/webp" />
                                    <span>+</span>
                                </div>
                                
                            </div>
                            <p>+Ajouter une image</p>
                        </div>

                    </div>

                    <div className="white-container white-container-py-48 white-container-half">
                        <div className="flex-col-input-container">
                            <label htmlFor="hoteName">Nom de l’hôte</label>
                            <input type="text" className="input-text-withBtn"  name="hoteName" id="hoteName" />
                        </div>
                       
                        <div className="flex-col-input-container">
                            <label htmlFor="profileImage">Photo de profil</label>
                            <div className="flex-input-container">
                                <div className="file-text-container"></div>
                                <div className="file-input-btn">
                                    <input type="file" name="profileImage" id="profileImage" accept="image/jpg, image/png, image/webp" />
                                    <span>+</span>
                                </div>
                            </div>
                            <p>+Ajouter une image</p>
                        </div>
                    </div>
                </div>
            </div>




            <div className="ajout-form-flex-container mt-40">
                <div className="white-container white-container-py-80">
                    <label htmlFor="equipments">Équipements</label>
                    <div className="grid-2-col-200" style={{display:"grid",gridColumn:"200px 200px"}}>
                        {equipmentsList.map((item) => (
                        <div key={item.id} className="checkbox-container" >
                        <input
                            type="checkbox"
                            id={item.id}
                            name={item.id}
                        />
                        <label htmlFor={item.id}>
                            {item.label}
                        </label>
                        </div>
                        ))}
                    </div>
                </div>

                <div>
                    <div className="white-container white-container-py-80 white-container-h-444 ">
                        <div className="flex-col-input-container">
                            <label htmlFor="categories">Catégories</label>
                            <div className="categories-container">
                                {categoriesList.map((c)=> (
                                    <div key={c.id} className="category-Btn">
                                        <input type="checkbox" name={"categories[]"} id={c.id} />
                                        <label htmlFor={c.id}>{c.label}</label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex-col-input-container">
                            <label htmlFor="tag">Ajouter une catégorie personnalisée</label>
                            <div className="flex-input-container">
                                <input id="tag" name="tag" className="input-text-container"/>
                                <div className="file-input-btn">
                                    <button className="plusBtn">+</button>
                                </div>
                            </div>
                            <p>+Ajouter un tag</p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}