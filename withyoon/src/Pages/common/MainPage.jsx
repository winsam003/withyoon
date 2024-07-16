import { Link } from "react-router-dom";
import '../../css/common/MainPage.css';
import axios from "axios";
import { apiCall } from "../../apiService/apiService";

export default function MainPage() {

    function apiTest() {
        apiCall("/home/home", "GET", null, null)
            .then((response) => {
                alert(response);
            }).catch((error) => {
                alert("실패");
                alert(error);
            })
    }

    function JDBCtest() {
        apiCall("/home/JDBCtest", "GET", null, null)
            .then((response) => {
                console.log(JSON.stringify(response));
                alert("성공 콘솔창 확인");
            }).catch((error) => {
                alert(error);
            })
    }

    return (
        <div className="MainPage_Containor">
            <h1>Hello finally we started a project tohether haha! 😃</h1>
            <hr />
            <div className="MainPage_firstProject">
                <h3>🥐 first Practice</h3>
                <span className="MainPage_ProjectName"><Link to="/Sam_page1" >Sam_page1</Link></span>
                <span className="MainPage_ProjectName"><Link to="/Yoon_page1" >Yoon_page1</Link></span>

            </div>
            <hr />
            <div>
                <span className="MainPage_ProjectName" onClick={apiTest}>프론트-백엔드 연동테스트</span>
                <span className="MainPage_ProjectName" onClick={JDBCtest}>백엔드-DB 연동테스트</span>
            </div>
            <hr />
        </div>
    )
}