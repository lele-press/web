import React from 'react'

import glare from './images/glaring.gif'
import smile from './images/smile.gif'
import emails from './images/emailL.gif'
import instagram from './images/instagram.gif'
import contactL from './images/contactL.png'
import backskell0 from './images/backskell0.png'
import backskell from './images/backskell.png'
import { Link } from 'react-router-dom'

class Contact extends React.Component {
    render() {
        return (
            <div>
                <body>
                    <header>
                        <nav className="image">
                            <div className="image image-container" >
                                <img src={glare} alt="glare" width="240px" height="180px" />
                                <img className="transition-image-home" src={smile} alt="smile" width="240px" height="180px" />
                            </div>
                            <div className="image back-container" >
                                <img src={contactL} alt="" width="650px" height="180px" />
                            </div>
                            <Link to="/">
                                <div className="image back-container" >
                                    <img src={backskell0} alt="" width="240px" height="180px" />
                                    <img className="transition-image-home" src={backskell} alt="smile" width="240px" height="180px" />
                                </div>
                            </Link>
                        </nav>
                    </header>
                    <main className="image grid-container-contact" >
                        <section className="email">
                            <div className="gif-container">
                                <address>
                                    <Link to="mailto:rockside82@gmail.com">
                                        <img src={emails} alt="" />
                                    </Link>
                                </address>
                            </div>
                        </section>
                        <section className="instagram">
                            <div className="gif-container">
                                <Link to="https://www.instagram.com/i_pinside/?hl=id" target="_blank" rel="noreferrer">
                                    <img src={instagram} alt="" />
                                </Link>
                            </div>
                        </section>
                    </main>
                </body>
            </div>
        )
    }
}
export default Contact