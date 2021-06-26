import React from 'react'

import { Link } from 'react-router-dom'
import { About, AboutBlack, Work, WorkBlack, Contact, ContactBlack, glaring, smile } from './images/images'

class Home extends React.Component {
    render() {
        return (
            <div className="App">
                <body>
                    <header>
                        <nav className="image">
                            <div className="image-center image-container" >
                                <img src={glaring} alt="glare" width="480px" height="360px" />
                                <img className="transition-image-home" src={smile} alt="smile" width="480px" height="360px" />
                            </div>
                        </nav>
                    </header>
                    <main className="grid-container">
                        <div className="image-container">
                            <Link to="/about">
                                <img src={About} alt="" />
                                <img className="transition-image" src={AboutBlack} alt="" />
                            </Link>
                        </div>
                        <section className="about">
                        </section>
                        <div className="image-container">
                            <Link to="work">
                                <img src={Work} alt="" />
                                <img className="transition-image" src={WorkBlack} alt="" />
                            </Link>
                        </div>
                        <section className="work">
                        </section>
                        <div className="image-container">
                            <Link to="contact">
                                <img src={Contact} alt="" />
                                <img className="transition-image" src={ContactBlack} alt="" />
                            </Link>
                        </div>
                        <section className="Contact">
                        </section>
                    </main>
                </body>

            </div>
        );
    }
}

export default Home;
