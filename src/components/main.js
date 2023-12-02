import React, { memo } from 'react';
import MyForm from './form';


const Main = () => {
  return (
    <div>
      <div className="content-main-block-background">
        <div className="content-main-block">
          <div className="content-main-block-container1">
            <div>
              <h1 className="content-main-block-container1-h1">BrainlyAcademy</h1>
            </div>
            <div>
              <ul>
                <li><span className="checkmark">&#10004;</span>№100000 По качеству обучения по версии Smart Ranking</li>
                <li><span className="checkmark">&#10004;</span>90 различных курсов</li>
                <li><span className="checkmark">&#10004;</span>Учитесь с любым графиком из любой точки мира</li>
              </ul>
            </div>
            <div className="button-container">
              <button className="btn">Оставить заявку</button>
            </div>
          </div>
          <div className="content-main-block-container2">
            <div className="video-placeholder">
            </div>
          </div>
        </div>
      </div>
      <div className="section-background">
        <div className="section-wrapper">
          <div className="section">
            <div className="description-wrapper">
              <div className="description">
                <ul>
                  <li><span className="checkmark">&#10004;</span>Курсы под любые цели</li>
                  <li><span className="checkmark">&#10004;</span>Академические программы</li>
                  <li><span className="checkmark">&#10004;</span>Сотрудничаем с ведущими компаниями</li>
                </ul>
              </div>
            </div>
            <div className="widget-wrapper">
              <div className="widget">
                <img alt=""
                  src="https://picsum.photos/200/300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="info-column-background">
        <div className="info-column">
          <div className="about-column">
            <h1 className="heading-title">Почему выбирают образовательную платформу BrainlyAcademy?</h1>
            <div>
              <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, sint.</h2>
            </div>
          </div>
          <div className="news-column">
            <img decoding="async" width="520" height="300" className="attachment-large" alt="" loading="lazy"
              src=""
            />
          </div>
        </div>
      </div>
      <div className="products-background">
        <div className="products">
          <h1 style={{ textAlign: 'center', padding: '30px' }}>
            Успейте выбрать подходящий тариф и воспользоваться скидкой!
          </h1>
          <div className="product-grid">
            <div className="product">
              <img src="https://picsum.photos/200/300" alt="" />
              <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, sint.</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, sint.</p>
              <button className="more-btn">Подробнее</button>
            </div>
            <div className="product">
              <img src="" alt="" />
              <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, sint.</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, sint.</p>
              <button className="more-btn">Подробнее</button>
            </div>
            <div className="product">
              <img src="" alt="" />
              <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, sint.</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, sint.</p>
              <button className="more-btn">Подробнее</button>
            </div>
          </div>
        </div>
        <div>
          <div style={{ margin: 'auto', display: 'flex' }}>
            <button style={{ margin: 'auto', marginBottom: '20px' }} className="more-btn">Все курсы</button>
          </div>
        </div>
      </div>
      <div className='myform'><MyForm /></div>
    </div>
  );
};

export default memo(Main);
