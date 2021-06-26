import React from 'react'

import { Link } from 'react-router-dom'
import { AboutL, swordback, swordback0, profile2, glaring, smile } from './images/images'

class About extends React.Component {
    render() {
        return (
            <div>
                <body>
                    <header>
                        <nav className="image" >
                            <div className="image image-container" >
                                <img src={glaring} alt="glare" width="240px" height="180px" />
                                <img className="transition-image-home" src={smile} alt="smile" width="240px" height="180px" />
                            </div>
                            <div className="image back-container" >
                                <img src={AboutL} alt="" width="650px" height="180px" />
                            </div>
                            <Link to="/">
                                <div className="image back-container" >
                                    <img src={swordback} alt="" width="240px" height="180px" />
                                    <img className="transition-image-home" src={swordback0} alt="smile" width="240px" height="180px" />
                                </div>
                            </Link>
                        </nav>
                    </header>
                    <main className="grid-container-about">
                        <section className="photo">
                            <div>
                                <img src={profile2} alt="" width="400" height="618px" />
                            </div>
                        </section>
                        <section className="typo">
                            <div>
                                <p>
                                    <b>Hello,</b>
                                    <br />
                                    <br /> my name is Muhamad Samsul Arifin,
                                    i'm an <i>sedentary</i> visual art student.
                                    A half of my lifetime are wasted for such
                                    a useless meaningless and <i>pretentious</i> artistic things.
                                    My hobby is fishing and read un-understandable books. Most of my work is illustration, created
                                    using traditional drawing technique, with just simple tool like, pencils, ink,
                                    through paper. Interested in any kind of visual art form, in particulary,
                                    work that contain naration.
                                </p>
                            </div>
                        </section>
                    </main>
                </body>
            </div>
        )
    }
}
export default About