import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../../App.scss"

const Donald = () => {
    return (
        <div>
            <section id="donald">
            <div className='container'>
            <Form>
      <Form.Group className="mb-4" controlId="formBasicEmail">
        <Form.Label>Имя</Form.Label>
        <Form.Control type="email" placeholder="Имя" />
      </Form.Group>
      <Form.Group className="mb-4" controlId="formBasicEmail">
        <Form.Label>Фамилия</Form.Label>
        <Form.Control type="email" placeholder="Фамилия" />
      </Form.Group>
      <Form.Group className="mb-4" controlId="formBasicEmail">
        <Form.Label>Тел</Form.Label>
        <Form.Control type="email" placeholder="Тел" />
      </Form.Group>

      <Form.Select aria-label="Default select example">
      <option>Выберите курсы</option>
      <option value="1">Языкавой курсы:</option>
      <option value="2">IT курсы:</option>
      <option value="3">Другие курсы</option>
    </Form.Select>
      <Button className="mt-5 " variant="primary" type="submit">
        Отправить
      </Button>
    </Form>
        </div>
            </section>
        </div>
        
    );
};

export default Donald;