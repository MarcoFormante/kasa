'use client'
import Link from "next/link";
import { FavoritesIcon } from "./FavoritesIcon";
import { MessagingIcon } from "./MessagingIcon";
import { Logo } from "./Logo";
import { usePathname } from "next/navigation";

export function Header(){
    const pathname = usePathname()
    return (
        <header>
            <nav className="header-nav">
                <div className="header-nav-links-container">
                    <Link href={"/"} className={`${pathname === "/" ? "active" : ""}`}>Accueil</Link>
                    <Link href={"/a-propos"} className={`${pathname === "/a-propos" ? "active" : ""}`}>À propos</Link>                
                </div>
                <Link href={"/"}>
                    <Logo/>
                </Link>
                <div className="header-nav-links-container">
                    <Link href={"/ajouter-un-logement"} className={`main-red ${pathname === "/ajouter-un-logement" ? "active" : ""}`}>+Ajouter un logement</Link>
                    <div className="header-nav-links-icons-container">
                        <Link href={"/favoris"} className={`${pathname === "/favoris" ? "active" : ""}`}>
                            <FavoritesIcon/>
                        </Link>
                        <span className="separator"></span>
                        <Link href={"/messagerie"} className={`${pathname === "/messagerie" ? "active" : ""}`}>
                            <MessagingIcon/>
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}