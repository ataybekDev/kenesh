import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Example from "./Modal";
import Donald from "./pages/Donald";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <section id="hero">
        <div className="container">
          <div className="hero">
            <h1 className="text-center pb-1">Направления обучения</h1>
            <h2 className="text-center pb-4">
              Профессии и курсы, на которые сейчас <br />
              открыт набор
            </h2>
            <Row>
              <Col>
                <div className="hero--block">
                  <h4 class="text-center pt-3 h1_2">Языкавой курсы:</h4>
                  <li> Английский язык</li>
                  <li> Английский для детей</li>
                  <li> Русский язык</li>
                  <li> Корейский язык</li>
                  <div className="hero--block__btn">
                    <Link to="/donald">
                     <button
                      type="button"
                      class="btn  btn-primary m-2 butto_color "
                    >
                      Записаться на курс
                    </button>   
                    </Link>
                    
                    <Example/>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="hero--block">
                  <h4 class="text-center pt-3 h1_2">IT курсы:</h4>
                  <li> Компьютерная грамматика</li>
                  <li> Frontend разработка</li>
                  <li> Backend разработка</li>
                  <li> Python</li>
                  <li> Детское программирование.</li>
                  <div className="hero--block__btn">
                  <Link to="/donald">
                    <button
                      type="button"
                      class="btn  btn-primary m-2 butto_color "
                    >
                      Записаться на курс
                    </button>
                  </Link>
                    
                    <Example/>
                    
                  </div>
                </div>
              </Col>
              <Col>
                <div className="hero--block">
                  <h4 class="text-center pt-3 h1_2">Другие курсы:</h4>
                  <li> смм Маркетолог</li>
                  <li>Ораторское искуство</li>
                  <div className="hero--block__btn">
                  <Link to="/donald">
                    <button
                      type="button"
                      class="btn  btn-primary m-2 butto_color "
                    >
                      Записаться на курс
                    </button>
                  </Link>
                    
                    <Example/>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
