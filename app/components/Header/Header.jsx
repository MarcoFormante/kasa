'use client'
import Link from "next/link";
import { FavoritesIcon } from "./FavoritesIcon";
import { MessagingIcon } from "./MessagingIcon";
import { Logo } from "./Logo";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MenuMobile } from "./MenuMobile";



/**
 * 
 * Main Navigation Header component.
 * @function
 * @name Header
 * @memberof module:Components
 * @description
 * The primary navigation bar of the application. 
 * <div><strong>Key Functionalities:</strong></div>
 * <ul>
 *   <li>Dynamic Active States**: Uses `usePathname` to highlight the current route.</li> 
 *   <li>Responsive Logic: Monitors window resize to automatically close the mobile menu on desktop breakpoints</li> 
 *   <li>State Management: Manages the open/closed state of the MenuMobile.</li> 
 *   <li>State Management: Manages the open/closed state of the MenuMobile</li> 
 *   <li>SEO & Accessibility: Uses semantic nav and header tags with descriptive aria-label on icon links</li> 
 * </ul>
 * @returns {JSX.Element} The rendered header with navigation links, logo, and icons. 
 */


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

    const closeMenu = ()=>{
        setMenuIsOpen(false)
    }

    return (
        <header>
            <nav className={`header-nav ${menuIsOpen ? "active" : ""}`}>
                <div className="header-nav-links-container header-nav-links-container-first">
                    <Link onClick={closeMenu} href={"/"} className={`${pathname === "/" ? "active" : ""}`}>Accueil</Link>
                    <Link onClick={closeMenu} href={"/a-propos"} className={`${pathname === "/a-propos" ? "active" : ""}`}>À propos</Link>                
                </div>
                <Link onClick={closeMenu} aria-label="Page d'accueil" href={"/"} className="header-logo-link no-border">
                    <Logo/>
                </Link>
                <div className="header-nav-links-container header-nav-links-container-last">
                    <Link onClick={closeMenu} href={"/ajout"} className={`main-red ${pathname === "/ajout" ? "active" : ""}`}>+Ajouter un logement</Link>
                    <div className="header-nav-links-icons-container">
                        <Link onClick={closeMenu} href={"/favoris"} aria-label="Favoris" className={`no-border hover__fill-red ${pathname === "/favoris" ? "active" : ""}`}>
                            <FavoritesIcon/>
                        </Link>
                        <span className="separator"></span>
                        <Link onClick={closeMenu} href={"/messagerie"} aria-label="Messagerie" className={`no-border hover__fill-red ${pathname === "/messagerie" ? "active" : ""}`}>
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