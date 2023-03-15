import {ReserveForm} from "./Form";
import "./styles/reserve.css"
import { VisibilityDiv } from "./OnScreen";

export const Reserve = () => {
    return(
        <main>
            <section className="welcome_section reserve_section">
                    <div className="text_wrap">
                        <VisibilityDiv classname="welcome_text">
                            <h1 className="welcome_eng">Reserve your seat</h1>
                        </VisibilityDiv>
                        <VisibilityDiv classname="welcome_text jap">
                            <h2 className="welcome_jap">座席を予約する</h2>
                        </VisibilityDiv>
                    </div>
            </section>
            <div className="reserve_wrap">
                <ReserveForm/>
            </div>
        </main>
    );
}