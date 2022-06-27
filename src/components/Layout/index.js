import { Link } from "gatsby"
import * as React from "react"

import {container, heading, navLinks, navLinkItem,navLinkText} from "./layout.module.css"

const Layout = ({page_title, children}) =>{


    return (
        <div className={container}>
            <title>{page_title}</title>
            <header>
                <nav>
                    <ul className={navLinks}>
                        <li className={navLinkItem}><Link className={navLinkText} to="/">Home</Link></li>
                        <li className={navLinkItem}><Link className={navLinkText} to="/about">About</Link></li>
                    </ul>
                </nav>
            </header>

            <main>
            <h1 className={heading}>{page_title}</h1>
            {children}
            </main>

            <footer>
                End of the document.
            </footer>
        </div>
    )
}

export default Layout