import "./styles/about.css"
import about from "./images/about_us.webp"
import yakiniku_about from "./images/Yakiniku_about.webp"
import { VisibilityDiv } from "./OnScreen";
import { ReservationBanner } from "./ReservationBanner";


export const About = () => {
    return(
        <main>
            <section className="welcome_section">
                <img className="bg" src={about}></img>
                <VisibilityDiv classname="welcome_text">
                    <h1 className="welcome_eng">About us</h1>
                </VisibilityDiv>
                <VisibilityDiv classname="welcome_text jap">
                    <h2 className="welcome_jap">私たちに関しては</h2>
                </VisibilityDiv>
            </section>
            <section className="about_grid">
                <VisibilityDiv classname="about_text1">
                    <h1>Fujiwara Hachiro was firstly opened in
                        Southampton and already has astonishing 15 years of history,
                         during which we expanded to London and Manchester.</h1>
                </VisibilityDiv>
                <VisibilityDiv classname="about_japan">
                    <h1>フジワラ ハチロ</h1>
                </VisibilityDiv>
                <VisibilityDiv classname="about_image">
                    <img alt="Yakiniku" src={yakiniku_about}/>
                </VisibilityDiv>
                <VisibilityDiv classname="about_text2">
                    <h1>Our iconic dish is Yakiniku, world-wide known Japanese version of "western" BBQ.
                     The best Yakiniku in the UK you can taste in our restaurants.</h1>
                </VisibilityDiv>
            </section>
            <ReservationBanner/>
        </main>
    );
}