import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Logo from "../img/zyro-image.png"

const Footer = () => {
  return (
    <div>
      <footer id="footer">
        <div className="container">
          <div className="footer">
            <Row>
              <Col>
              <div className="footer--title">
                <img src={Logo} width="70px" height="70px" />
                <h1>Кенеш</h1>
              </div>
                
                <a href="#">Кенеш учебный центр</a>
                <a href="#">
                  Политика конфиденциальности Запрос <br /> на консультацию
                  Направления набора персонала
                </a>
                <a href="#"> Название компании: Кенеш</a>
              </Col>
              <Col>
                <a href="#"> Представитель: Кенеш</a>

                <a href="#"> Телефон: +996 551 32 32 40</a>

                <a href="#"> Факс: +996 551 32 32 40</a>

                <a href="#">
                  {" "}
                  Регистрационный номер предприятия: +996 551 32 32 40
                </a>
              </Col>
              <Col>
                <a href="#"> Номер бизнес-отчета по почте: 2024-Ош</a>
                <a href="#">
                  {" "}
                  Персональный информационный менеджер: Кенешбеков Кенеш /
                  kenesh/@gmail.com.kg
                </a>
                <a href="#">
                  {" "}
                  Главное здание: Тынчтык Соода Уйу ,Келечек, Ош 2-й и 3-й этажи
                </a>
              </Col>
            </Row>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
