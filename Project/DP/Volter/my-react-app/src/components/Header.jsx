import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <div className="logo-container">
                <img className="header-icon" src="/IconVolter.png" alt="Логотип" />
            </div>
            <nav className="header-menu">
                <a href="/" className="menu-item">Главная</a>
                <a href="#services" className="menu-item">Услуги</a>
                <a href="#about" className="menu-item">О нас</a>
                <a href="#recommendations" className="menu-item">Рекомендации</a>
                <a href="#contacts" className="menu-item">Контакты</a>
                <a href="#register" className="menu-item">Регистрация</a>
                <a href="#login" className="menu-item">Авторизация</a>
            </nav>
        </header>
    );
};

export default Header;