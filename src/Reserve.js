import {ReserveForm} from "./Form";
import "./styles/reserve.css"
import { VisibilityDiv } from "./OnScreen";
import reserve from "./images/reserve.webp"

export const Reserve = () => {
    return(
        <main>
            <section className="welcome_section">
                <img alt="steak" className="bg" src={reserve}></img>
                <VisibilityDiv classname="welcome_text">
                    <h1 className="welcome_eng">Reserve your seat</h1>
                </VisibilityDiv>
                <VisibilityDiv classname="welcome_text jap">
                    <h2 className="welcome_jap">座席を予約する</h2>
                </VisibilityDiv>
            </section>
            <div className="reserve_wrap">
                <ReserveForm/>
            </div>
        </main>
    );
}