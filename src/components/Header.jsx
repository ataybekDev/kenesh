import React from 'react';
import Logo from "../img/zyro-image.png"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <header id='header'>
                <div className="container">
                    <div className="header">
                       <div className="header--logo ">
                        <img src={Logo} width="70px" height="70px" />
                        <h1>КЕНЕШ</h1>
                       </div>
                        <div className='header--navbar'>
                           <Link to='/' className='p-4'>Главная</Link>
                           <a href='#' className='p-4'>Курсы</a>
                           <a href='#' className='p-4'>Новости</a>
                           <a href='#' className='p-4'>Проект</a>
                           <a href='#' className='p-4'>Запись</a>
                        </div>
                        <div className='header--input'>
                        <Form.Control className='m-4' type="text" placeholder="Поиск" />
                        <Button variant="outline-success">Поиск</Button>{' '}
                        </div>
                    </div>
                </div>
            </header>

        </div>
    );
};

export default Header;