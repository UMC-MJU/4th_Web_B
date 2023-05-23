import logo from "./logo.png";
import "./Header.css";
const Header = () => {
    return(
        <div className="navbar">
            <div className ="container">
                
                <div className = "left">
                    <img className="netflix-logo"
                        src = {logo}  
                        alt = ""
                    />
                    
                    <div class ="menu">
                        <div class = "menu-item">홈</div>
                        <div class = "menu-item">TV프로그램</div>
                        <div class = "menu-item">영화</div>
                        <div class = "menu-item">NEW! 요즘 대세 영화</div>
                        <div class = "menu-item">내가 찜한 컨텐츠</div>                    
                    </div>
                </div>
                <div className = "right">
                    <div class = "menu2">
                        <div class = "menu-item2">KID</div>
                        <div class = "menu-item2">나</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;