import { Link } from "react-router-dom";
import { VisibilityDiv } from "./OnScreen";

export const ReservationBanner = () =>{
    return(
    <section className="reservation_banner">
        <VisibilityDiv classname="reservation_text">
            <h1>What are you waiting for?</h1>
        </VisibilityDiv>
        <VisibilityDiv classname="reservation_text">
            <h2>Reserve your seat in one of the best Japanese restaurant in the UK</h2>
        </VisibilityDiv>
        <VisibilityDiv classname="banner_button">
            <Link to="/restaurant/reserve">
                <div>
                    Reserve a table
                </div>
            </Link>
        </VisibilityDiv>
    </section>
    );
}