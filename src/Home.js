import steak from "./images/home_meat.webp"
import { VisibilityDiv } from "./OnScreen"
import "./styles/home.css"
import { ReservationBanner } from "./ReservationBanner"
import yakiniku from "./images/Yakiniku.webp"
import sushi from "./images/sushi.webp"
import { Link } from "react-router-dom"
import london from "./images/london.webp"
import manchester from "./images/manchester.webp"
import southampton from "./images/southampton.webp"


export const Home = () => {
    return(
        <main>
            <section className="welcome_section">
                    <div className="text_wrap">
                        <VisibilityDiv classname="welcome_text">
                            <h1 className="welcome_eng">Elite Japanese taste - elite Japanese style</h1>
                        </VisibilityDiv>
                        <VisibilityDiv classname="welcome_text jap">
                            <h2 className="welcome_jap">口の中でとろけるように</h2>
                        </VisibilityDiv>
                    </div>
            </section>
            <section className="scroll_wrapper">
                <p className="animation onscreen">SCROLL</p>
                <hr className="animation onscreen"/>
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
                    <VisibilityDiv classname="choice_title left">
                        <h1>Stay with a proven classic - Sushi</h1>
                    </VisibilityDiv>
                    <VisibilityDiv classname="choice_image">
                        <img alt="Sushi" src={sushi}></img>
                    </VisibilityDiv>
                </div>
                <div className="choice_banner_wraper">
                    <VisibilityDiv classname="your_choice">
                        <h1>Your choice</h1>
                    </VisibilityDiv>
                    <VisibilityDiv classname="jap_choice">
                        <h2>あなたの選択</h2>
                    </VisibilityDiv>
                    <VisibilityDiv classname="banner_button choice_button">
                        <Link to="/reserve">
                            <div>
                                Reserve a table
                            </div>
                        </Link>
                    </VisibilityDiv>
                </div>
            </section>
            <section className="restaurants">
                <VisibilityDiv classname="restaurants_heading">
                    <h1>Our restaurants</h1>
                </VisibilityDiv>
                <div className="restaurant">
                    <VisibilityDiv>
                        <img alt="London" src={london}></img>
                    </VisibilityDiv>
                    <VisibilityDiv classname="restaurant_title">
                        <h1>London</h1>
                    </VisibilityDiv>
                </div>
                <div className="restaurant">
                    <VisibilityDiv>
                        <img alt="Southampton" src={southampton}></img>
                    </VisibilityDiv>
                    <VisibilityDiv classname="restaurant_title">
                        <h1>Southampton</h1>
                    </VisibilityDiv>
                </div>
                <div className="restaurant manchester">
                    <VisibilityDiv>
                        <img alt="Manchester" src={manchester}></img>
                    </VisibilityDiv>
                    <VisibilityDiv classname="restaurant_title">
                        <h1>Manchester</h1>
                    </VisibilityDiv>
                </div>
                <VisibilityDiv classname="banner_button find_button">
                    <Link to="/find-us">
                        <div>
                           Find us
                        </div>
                    </Link>
                </VisibilityDiv>
            </section>
        </main>
    )
}