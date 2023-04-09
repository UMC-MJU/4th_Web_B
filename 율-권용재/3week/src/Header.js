import logo from "../src/logo.png";
import "./header.css";
import vidio from'../src/더 글로리 파트2 _ 공식 예고편 _ 넷플릭스.mp4';
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
            <div>
                <div class="grory">
                    <video 
                        autoplay
                        muted
                        src = {vidio}
                    >
                    </video>
                </div>
            </div>
        </div>
    )
}

export default Header;