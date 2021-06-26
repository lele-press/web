import React from 'react'

import { Link } from 'react-router-dom'
import { emailL, backsell, backsell0, contactL, glaring, smile, instagram } from './images/images'

class Contact extends React.Component {
    render() {
        return (
            <div>
                <body>
                    <header>
                        <nav className="image">
                            <div className="image image-container" >
                                <img src={glaring} alt="glare" width="240px" height="180px" />
                                <img className="transition-image-home" src={smile} alt="smile" width="240px" height="180px" />
                            </div>
                            <div className="image back-container" >
                                <img src={contactL} alt="" width="650px" height="180px" />
                            </div>
                            <Link to="/">
                                <div className="image back-container" >
                                    <img src={backsell0} alt="" width="240px" height="180px" />
                                    <img className="transition-image-home" src={backsell} alt="smile" width="240px" height="180px" />
                                </div>
                            </Link>
                        </nav>
                    </header>
                    <main className="image grid-container-contact" >
                        <section className="email">
                            <div className="gif-container">
                                <address>
                                    <a href="mailto:rockside82@gmail.com">
                                        <img src={emailL} alt="" />
                                    </a>
                                </address>
                            </div>
                        </section>
                        <section className="instagram">
                            <div className="gif-container">
                                <a href="https://www.instagram.com/i_pinside/?hl=id" target="_blank" rel="noreferrer">
                                    <img src={instagram} alt="" />
                                </a>
                            </div>
                        </section>
                    </main>
                </body>
            </div>
        )
    }
}
export default Contact