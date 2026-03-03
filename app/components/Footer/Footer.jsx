/**
 * @memberof module:Components
 * @function
 * @name Footer
 * @description
 * A basic structural component that displays the company branding and copyright information at the bottom of every page.</p>
 * @returns {JSX.Element}
 */
export function Footer(){
    return (
        <footer className="footer">
            <div>
                 <div className="footer-logo"></div>
            </div>
            <div>
                © 2025 Kasa. All rights reserved
            </div>
        </footer>
    )
}