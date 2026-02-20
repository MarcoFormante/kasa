'use client'
import Link from "next/link";
import { FavoritesIcon } from "./FavoritesIcon";
import { MessagingIcon } from "./MessagingIcon";
import { Logo } from "./Logo";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MenuMobile } from "./MenuMobile";

export function Header(){
    const pathname = usePathname()
    const [menuIsOpen,setMenuIsOpen] = useState(false)

    useEffect(()=>{
        window.addEventListener("resize",(e)=>{
            if (window.innerWidth > 1024) {
                setMenuIsOpen(false)
            }
        })
        return ()=> window.removeEventListener("resize",()=>{
            if (window.innerWidth > 1024) {
                setMenuIsOpen(false)
            }
        })
    },[menuIsOpen])


    return (
        <header>
            <nav className={`header-nav ${menuIsOpen ? "active" : ""}`}>
                <div className="header-nav-links-container header-nav-links-container-first">
                    <Link href={"/"} className={`${pathname === "/" ? "active" : ""}`}>Accueil</Link>
                    <Link href={"/a-propos"} className={`${pathname === "/a-propos" ? "active" : ""}`}>À propos</Link>                
                </div>
                <Link href={"/"} className="header-logo-link no-border">
                    <Logo/>
                </Link>
                <div className="header-nav-links-container header-nav-links-container-last">
                    <Link href={"/ajouter-un-logement"} className={`main-red ${pathname === "/ajouter-un-logement" ? "active" : ""}`}>+Ajouter un logement</Link>
                    <div className="header-nav-links-icons-container">
                        <Link href={"/favoris"} className={`no-border hover__fill-red ${pathname === "/favoris" ? "active" : ""}`}>
                            <FavoritesIcon/>
                        </Link>
                        <span className="separator"></span>
                        <Link href={"/messagerie"} className={`no-border hover__fill-red ${pathname === "/messagerie" ? "active" : ""}`}>
                            <MessagingIcon/>
                        </Link>
                    </div>
                </div>
                <MenuMobile 
                    menuIsOpen={menuIsOpen} 
                    onClick={()=>setMenuIsOpen(!menuIsOpen)}
                />
            </nav>
        </header>
    )
}