import "./styles/findus.css"
import london from "./images/london.webp"
import manchester from "./images/manchester.webp"
import southampton from "./images/southampton.webp"
import find from "./images/find.webp"
import {VisibilityDiv} from "./OnScreen"
import {ReservationBanner} from "./ReservationBanner"

export const FindUs = () => {
    return(
        <main>
            <section className="welcome_section">
                <img className="bg" src={find}></img>
                <VisibilityDiv classname="welcome_text">
                    <h1 className="welcome_eng">Find us</h1>
                </VisibilityDiv>
                <VisibilityDiv classname="welcome_text jap">
                    <h2 className="welcome_jap">私たちを見つけてください</h2>
                </VisibilityDiv>
            </section>
            <section className="about_restaurants">
                <div className="about_restaurant">
                    <VisibilityDiv>
                        <img alt="London" src={london}></img>
                    </VisibilityDiv>
                    <VisibilityDiv>
                        <h1>London</h1>
                    </VisibilityDiv>
                    <VisibilityDiv>
                        <h2>St George St, London W1S 1FX</h2>
                    </VisibilityDiv>
                    <VisibilityDiv>
                        <h3>Opening hours</h3>
                    </VisibilityDiv>
                    <ul>
                        <VisibilityDiv>
                            <li>Mon-Tue : 12:00-23:00</li>
                        </VisibilityDiv>
                        <VisibilityDiv>
                            <li>Fri-Sat :   12:00-00:00</li>
                        </VisibilityDiv>
                        <VisibilityDiv>
                            <li>Sun :      12:00-22:00</li>
                        </VisibilityDiv>
                    </ul>
                </div>
                <div className="about_restaurant">
                    <VisibilityDiv>
                        <img alt="Southampton" src={southampton}></img>
                    </VisibilityDiv>
                    <VisibilityDiv>
                        <h1>Southampton</h1>
                    </VisibilityDiv>
                    <VisibilityDiv>
                        <h2>119 High St, Southampton SO14 2AA</h2>
                    </VisibilityDiv>
                    <VisibilityDiv>
                        <h3>Opening hours</h3>
                    </VisibilityDiv>
                    <ul>
                        <VisibilityDiv>
                            <li>Mon-Tue : 12:00-23:00</li>
                        </VisibilityDiv>
                        <VisibilityDiv>
                            <li>Fri-Sat :   12:00-00:00</li>
                        </VisibilityDiv>
                        <VisibilityDiv>
                            <li>Sun :      12:00-21:00</li>
                        </VisibilityDiv>
                    </ul>
                </div>
                <div className="about_restaurant">
                    <VisibilityDiv>
                        <img alt="Manchester" src={manchester}></img>
                    </VisibilityDiv>
                    <VisibilityDiv>
                        <h1>Manchester</h1>
                    </VisibilityDiv>
                    <VisibilityDiv>
                        <h2>40 King St, Manchester M2 6BA</h2>
                    </VisibilityDiv>
                    <VisibilityDiv>
                        <h3>Opening hours</h3>
                    </VisibilityDiv>
                    <ul>
                        <VisibilityDiv>
                            <li>Mon-Tue : 12:00-23:00</li>
                        </VisibilityDiv>
                        <VisibilityDiv>
                            <li>Fri-Sat :   12:00-00:00</li>
                        </VisibilityDiv>
                        <VisibilityDiv>
                            <li>Sun :      12:00-21:00</li>
                        </VisibilityDiv>
                    </ul>
                </div>
            </section>
            <ReservationBanner/>
        </main>
    );
}