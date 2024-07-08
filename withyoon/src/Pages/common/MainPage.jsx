import { Link } from "react-router-dom";
import '../../css/common/MainPage.css';

export default function MainPage() {
    return (
        <div className="MainPage_Containor">
            <h1>Hello finally we started a project tohether haha! 😃</h1>
            <hr />
            <div className="MainPage_firstProject">
                <span className="MainPage_ProjectName"><Link to="/Sam_page1" >Sam_page1</Link></span>
                <span className="MainPage_ProjectName"><Link to="/Yoon_page1" >Yoon_page1</Link></span>
            </div>
            <hr />
        </div>
    )
}