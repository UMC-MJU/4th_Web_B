import "./MainPage.css";
import imgLogo from "./마켓컬리.jpg";
import icon from "./풍선.jpg";
import { Link } from "react-router-dom";
import Items from "./Item";

function MainPage() {
  return (
    <div>
      <header className="head">
        <div class="Topbox_1">
          <span>
            <a>회원가입</a>&nbsp;| &nbsp;
            <Link to="/LoginPage">로그인</Link> &nbsp; | &nbsp;
            <a>고객센터</a>
          </span>
        </div>
        <div class="Topbox_2">
          <div class="Topbox_2_sub">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODIiIGhlaWdodD0iNDIiIHZpZXdCb3g9IjAgMCA4MiA0MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGwtcnVsZT0ibm9uemVybyIgZmlsbD0ibm9uZSI+CiAgICAgICAgPHBhdGggZD0iTTAgMGg4MnY0MkgweiIvPgogICAgICAgIDxwYXRoIGQ9Ik02Mi41Ljk2NWMxLjAyNi0uNTU3IDIuNDY2LS43MTggMy4zNTYuMTA3Ljg5LjgyNS42NzYgMi4wNDggMCAzLjk3MyAwIDAtMS41MDUgNC4wNjYtMy4wNTUgOC4yNjJsLS4zOTggMS4wOGMtMS40MTQgMy44My0yLjc2MiA3LjQ4Ny0yLjkyNyA3Ljk2My0xLjQ5OCA0LjI0NSAxLjk2NyA0LjEyMiA0LjAyNC0uMTUyIDEuMTU5LTIuMzk0IDIuNjQ0LTYuMzU3IDIuNjQ0LTYuMzU3LjUyNC0xLjU2My42ODItMi41MDQuMzU5LTIuODI4LS4xMDctLjExMy4wNDUtLjI1Mi4xOC0uMzIzIDIuMjY5LTEuMTQ5IDQuNjMtLjA3MiAzLjMzNiAzLjMxbC0uMDU0LjEzOGMtLjM4Ny45NzgtMi42OCA2LjczMy0yLjY4IDYuNzMzLS42NzYgMS42Ni0uNTk1IDMuMjM2LjQxOCAzLjIzNi42ODYtLjAwNCAxLjQ2LS4zODUgMi4zMDQtMS4wODggMS44MTgtMS41MDQgMy4yMjItNC4zMTIgMy43MjctNS40NTQuMjMtLjUwOCAxLjA4Ny0yLjQyIDEuNzY2LTQuMzYxLjIzNi0uNjY1LjM2OS0xLjM2LjM5NS0yLjA2NWEuNDQzLjQ0MyAwIDAgMSAuMTk0LS40NTkgMy41NzggMy41NzggMCAwIDEgMS42Ny0uNDIgMS44MDUgMS44MDUgMCAwIDEgMS40NjUuNzA1Yy40NDMuNTk4LjU2NiAxLjU3OS4xMDMgMi44MDgtLjEyLjMyLTMuNzc1IDkuOTU4LTMuNzc1IDkuOTU4di4wMjZjMi4wNDEtMS4yMjMgMy44Ny0xLjMxMyA0Ljk1My0uODU0bC0uMDAzLS4wMTNjMS40OTUuNjQ3IDEuOTkgMi40NC45MzggMy41NTktLjEwMy4xMS0uMzYyLjA4NC0uMzYyLS4wOS0uMDk0LTEuMjUzLTIuNTE3LTMuNDk1LTYuMTA5LTEuMDc1bC0uMTQ1LjM4NS0xLjA2OCAyLjgwOGMtMi42MiA3LjAxOC01LjQwMyAxMi4xMzYtOS40MTUgMTEtMi42ODgtLjc2LTIuMzc3LTQuNjA3LjUxNS03Ljc5YTU0LjkgNTQuOSAwIDAgMSA2LjQ5LTUuODk4Yy4wNjgtLjE4OC4xMy0uMzUuMTg4LS41MTEuMjc4LS43OC40OTEtMS40MzQuNzkyLTIuMjY1bC4xNTktLjUxOGMtLjE3OC4yLS40OTguNTczLS43MTIuODEyLS43MTIuOC0yLjQ5NCAyLjc1Ny01LjMyOSAyLjIwN2wtLjIzNC0uMDUyYy0yLjA1LS41MDgtMi42MDgtMS45ODYtMi42NTUtMy4yNzctMi4xNDIgMi42NTYtNC4zNTEgMy40MjYtNS44MDcgMy4zOS0xLjk0OC0uMDQ4LTMuMzc4LTEuNTE0LTIuNDI3LTQuMjkgMS4wNTgtMy4xMDYgNS41LTE1LjMzMiA2Ljc5NS0xOSAuNDg1LTEuNTguNjY2LTIuNTguMTg0LTIuOTc0LS4xMjMtLjEwMy4wNTItLjI2NS4yLS4zNDZ6bTguMzY0IDI4Ljc3OGMtMS4xMDMuODgtNS41MjYgNC41My02Ljc1MiA3LjQ0MS0uNTA1IDEuMTk3LS4zNzYgMi4xNDkuNDg4IDIuMjMzIDEuOTYuMTk0IDQuMDEyLTMuODE4IDYuMjI4LTkuNTEyek0xNi4wMjggNS4zNTJjLS4wODcuMzMyLTEuMzE5IDMuODYtMi43MDEgNy43NDlsLS4yMDkuNTg2LS4yMS41ODktLjIxNS42MDRjNC42OTEtMS4xMjMgMTMuMDY0LTYuNTcgMTQuMDM1LTEwLjA4NS4xMi0uMTYxLjI5LS4yMi41NjYtLjAzNS40OTUuMzMuNjg2IDEuMTU1LjQ5NSAxLjkxOC0uNzY0IDMuMDM4LTYuNDE2IDcuMzQxLTExLjM3OSA5LjU1NC42MTIgMS42MzcgMi42ODIgNi4yNjcgNC4yMDYgOS4xMTEgMS42NjMgMy4xMTkgMy40MiA0LjU3NSA2LjE0NyA0LjczNyAxLjQ2LjA4NSAzLjAxNC0uNDQ3IDMuODkzLTEuMjJsLjE0OC0uMTQtLjAxMy4wM2MuMTk0LS4yMDQuNTExLjA3Ny4zNjYuMzIzYTYuNSA2LjUgMCAwIDEtNC45OTIgMi44NjdjLTYuMzQ1LjQyNy04Ljc3NC0zLjg3LTEzLjMwNC0xNC40OTQtLjM2Ni4xMjYtLjgwOS4yODgtMS4yNTUuNDUtLjA3NS4xODctMi4wNyA1LjY0Mi0yLjEzIDUuODIzLS45NDQgMi44Ny0xLjAwNSA0LjQ0Mi0uMzU4IDQuODk1LjE0NS4wOS4wNzQuMzMzLS4xNzguNDE0LTIuNTI3Ljc5Ni00Ljg1My0uNjk2LTMuNTU5LTQuNDQyIDEuMTYxLTMuMzE2IDUuNjktMTYuMTggNi45MTQtMTkuNjI2LjQyNy0xLjI5NC4xOTctMi4xMjUtLjQ5Mi0yLjMwNkM4LjUwNiAxLjc4Ljg3NyA4Ljc0OSAxLjk3MSAxNS4xODRjLjE5IDEuMTIuOTggMS43NDcgMS4zNzggMS42NjNhLjEzMy4xMzMgMCAwIDEgLjE1Ni4xNTkgMS41MDggMS41MDggMCAwIDEtMS44NDUgMS4wMzJDLjQ5IDE3Ljc4Mi4xMDcgMTYuNTI3LjA0MyAxNS44OC0uNjAxIDkuMjIgNi4xNDggMS4yMyAxMi4zODkuNThjMi4zNzgtLjI1IDQuNjEuOTYgMy42NCA0Ljc3MnptMjQuMDQgOS45MTMtLjA2LjIwNy0yLjgzIDguMTZjLS4zMDQuODUtLjEgMS43MzcuNTAxIDEuOTAyIDEuNzU3LjQ4MiA0LjAyOC0yLjE0NSA1LjEzMS00LjczM2E2Ny43OTQgNjcuNzk0IDAgMCAwIDEuNDc2LTMuODE1Yy41ODItMS42NDMgMS4xMDYtMy4xODMuNzgzLTMuOTA4LS4wNzUtLjE2OC4wNDUtLjI1Ni4yMjMtLjM1LjUwNS0uMjU1IDIuMjI2LS44MjUgMy4xNDEuMDY4LjY5NS42NzQuNjA5IDEuNzcxLS4wMyAzLjQzN2wtLjA5Ni4yNDIuMjItLjI3M2MyLjcwMy0zLjMgNC43OTItNC4yOTIgNi41NjMtMy41OTdsLjE0Ny4wNjJjMi4zODEgMS4wNzQgMS4xNDYgNS4yMTUtMi4xMTYgNS40OC0uMi4wMTctLjM1Ni0uMTI2LS4xNTgtLjQwNy4zOTUtLjYwNS4zNTYtMS45MDktLjc5Ni0yLjAyMi0xLjE1Mi0uMTEzLTIuODMgMS4yMDctNC4wMzggMi44NDQtMS4wODQgMS40NS0yLjIgMy45MTEtMy4zMjIgNy4yNzMtLjI3Mi44MTgtLjE0MyAxLjAxMi0uMTEgMS4wNjdhLjEuMSAwIDAgMSAwIC4wOTRjLS4xNDMuMjcyLS45NjUuNTk2LTEuNzYuNTk2LTEuNjI1LS4wMDctMi4yOTEtLjk0NS0xLjk2Ny0yLjQzNy0xLjg0OCAxLjc2NC0zLjcxMSAyLjYxNC01LjM1NSAyLjQ2NmEyLjUyNCAyLjUyNCAwIDAgMS0yLjIzNi0zLjEwM2MtMS40MjYgMS44MDktMy41NDIgMy4yNjgtNS42OTcgMy4wNjctMi4xNTUtLjItMy41LTEuNjY2LTIuODAyLTQuNzg4LjU5LTIuNTk4IDEuNTkyLTUuMjkgMi4yMDctNy4wMjcuNTE0LTEuNDU2LjYxOC0yLjQwNy4yOTQtMi43NS0uMTAzLS4xMTQuMDU1LS4yNS4xOTQtLjMyNCAxLjY5LS44ODYgNC4zOTQtLjMxNCAzLjYzIDIuMDktLjgwMiAyLjUyNy0yLjI1NSA2LjQ5LTIuNTUgNy40LS43MzcgMi4yODctLjI5IDMuNTIzLjc1NSAzLjU4IDEuMDQ1LjA2IDIuNDMtLjk2IDMuNDItMi41MDMgMS43Ni0yLjUyNCAyLjU4MS01LjY4NSAzLjM3Ny03Ljg4Mi4yMDQtLjU2LjUyNy0xLjg2Ni4xODUtMi4zNTItLjA5MS0uMTIzLjA2Ny0uMjU4LjI3NS0uMzcyIDEuNTM3LS44NDkgNC4yODUtLjY0IDMuNDAyIDIuNjA4eiIgZmlsbD0iIzVGMDA4MCIvPgogICAgPC9nPgo8L3N2Zz4K"
              alt="마켓컬리 로고"
            />
            <button class="active Btn_market">
              <a href="MainPage.html">마켓컬리</a>
            </button>
            <p style={{ color: "gray" }}>|</p>
            <a href="https://www.kurly.com/main/beauty" class="Btn_beauty">
              뷰티컬러
            </a>
            <div class="input_form">
              <input
                placeholder="검색어를 입력해주세요"
                required
                class="inputTag"
              />
              <button class="input_Btn"></button>
            </div>
          </div>
        </div>
      </header>
      <section class="Second_part">
        <div class="Second_part_1">
          <div class="Second_part_category">
            <span class="category_image"></span>
            <p>카테고리</p>
            <div class="dropdown-content">
              <a href="#">채소 </a>
              <a href="#">과일 - 견과 - 쌀</a>
              <a href="#">해산 - 수산 - 건어물</a>
              <a href="#">정육 - 계란</a>
              <a href="#">국 - 반찬 - 메인요리</a>
              <a href="#">샐러드 - 간편식</a>
            </div>
          </div>

          <ul class="Second_part_2">
            <li>
              <a class="Newproduct_part">신상품</a>
            </li>
            <li>
              <a class="best_part">베스트</a>
            </li>
            <li>
              <a class="Goodproduct_part">알뜰상품</a>
            </li>
            <li>
              <a class="Topprice_part">특가/혜택</a>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <img
          src={imgLogo}
          alt="마켓컬리 중간 페이지"
          class="Middle_part_image"
        />
      </section>
      <section>
        <div class="Last_part">
          <p class="Last_part_word">이 상품 어때요?</p>
          <div class="Last_part_image">
            <img
              src="https://img-cf.kurly.com/shop/data/goods/1637645210373l0.jpg"
              class="Last_part_image_1"
              onclick="ImageLocalstorage()"
            />

            <img
              src="https://img-cf.kurly.com/shop/data/goods/1646376750892l0.jpg"
              class="Last_part_image_2"
              onclick="ImageLocalstorage()"
            />
            <img
              src="https://img-cf.kurly.com/shop/data/goods/1657615562394l0.jpg"
              class="Last_part_image_3"
              onclick="ImageLocalstorage()"
            />
            <img
              src="https://img-cf.kurly.com/shop/data/goods/1512716834226l0.jpg"
              class="Last_part_image_4"
              onclick="ImageLocalstorage()"
            />
          </div>
          <div class="Last_part_img_word">
            <div class="Last_part_img_word_1">
              <p>{Items.data[0].name}</p>
              <p style={{ fontWeight: "bold" }}>{Items.data[0].price}</p>
              <div class="Last_part_icon_word">
                <img src={icon} class="Last_part_icon" />
                <p style={{ fontSize: "12px", color: "gray" }}>후기 625</p>
              </div>
            </div>
            <div class="Last_part_img_word_2">
              <p>{Items.data[1].name}</p>
              <p style={{ fontWeight: "bold" }}>{Items.data[1].price}원</p>
              <div class="Last_part_icon_word">
                <img src={icon} class="Last_part_icon" />
                <p style={{ fontSize: "12px", color: "gray" }}>후기 999+</p>
              </div>
            </div>
            <div class="Last_part_img_word_3">
              <p>{Items.data[2].name}</p>
              <p>500g (단지형)</p>
              <p style={{ fontWeight: "bold" }}>{Items.data[2].price}</p>
              <div class="Last_part_icon_word">
                <img src={icon} class="Last_part_icon" />
                <p style={{ fontSize: "12px", color: "gray" }}>후기 430</p>
              </div>
            </div>
            <div class="Last_part_img_word_4">
              <p>{Items.data[3].name}</p>
              <p style={{ fontWeight: "bold" }}>{Items.data[3].price}</p>
              <div class="Last_part_icon_word">
                <img src={icon} class="Last_part_icon" />
                <p style={{ fontSize: "12px", color: "gray" }}>후기 999+</p>
              </div>
            </div>
          </div>
          <div class="Buttom_part_image">
            <img
              src="https://product-image.kurly.com/banner/random-band/pc/img/2f85a75c-b4b1-4a56-9002-068a88c85d34.jpg"
              class="Buttom_part_image_size"
            />
          </div>
        </div>
        <div id="popup"></div>
      </section>
      <section>
        <div class="footer_part">
          <div class="footer_part_1">
            <div class="footer_part_top"></div>
          </div>
        </div>
        <footer>
          컬리에서 판매되는 상품 중에는 컬리에 입점한 개별 판매자가 판매하는
          마켓플레이스(오픈마켓) 상품이 포함되어 있습니다.
          <br />
          마켓플레이스(오픈마켓) 상품의 경우 컬리는 통신판매중개자로서
          통신판매의 당사자가 아닙니다. 컬리는 해당 상품의 주문, 품질, 교환/환불
          등 의무와 책임을 부담하지 않습니다.
          <br />© KURLY CORP. ALL RIGHTS RESERVED
        </footer>
      </section>
    </div>
  );
}

export default MainPage;
