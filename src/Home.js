import steak from "./images/home_meat.webp"
import { VisibilityDiv } from "./OnScreen"
import "./styles/home.css"
import { ReservationBanner } from "./ReservationBanner"
import yakiniku from "./images/Yakiniku.webp"
import sushi from "./images/sushi.webp"


export const Home = () => {
    return(
        <main>
            <section className="welcome_section">
                <img className="bg" src={steak}></img>
                <VisibilityDiv classname="welcome_text">
                    <h1 className="welcome_eng">Elite Japanese taste - elite Japanese style</h1>
                </VisibilityDiv>
                <VisibilityDiv classname="welcome_text jap">
                    <h2 className="welcome_jap">口の中でとろけるように</h2>
                </VisibilityDiv>
            </section>
            <section className="scroll_wrapper">
                <p className="scroll_animation">SCROLL</p>
                <hr className="scroll_animation"/>
            </section>
            <ReservationBanner></ReservationBanner>
            <section className="choice_section">
                <div className="choice_row">
                    <VisibilityDiv classname="choice_image">
                        <img alt="Yakiniku" src={yakiniku}></img>
                    </VisibilityDiv>
                    <VisibilityDiv classname="choice_title">
                        <h1>Unbelievable taste of Yakiniku</h1>
                    </VisibilityDiv>
                    <VisibilityDiv classname="choice_jap">
                        <h1>焼肉とは思えない美味しさ</h1>
                    </VisibilityDiv>
                </div>
                <VisibilityDiv classname="or_wrap">
                    <h1>OR</h1>
                </VisibilityDiv>
                <div className="choice_row">
                    <VisibilityDiv classname="choice_jap">
                        <h1>定評ある定番の寿司を食べ続ける</h1>
                    </VisibilityDiv>
                    <VisibilityDiv classname="choice_title">
                        <h1>Stay with a proven classic - Sushi</h1>
                    </VisibilityDiv>
                    <VisibilityDiv classname="choice_image">
                        <img alt="Sushi" src={sushi}></img>
                    </VisibilityDiv>
                </div>
            </section>
        </main>
    )
}