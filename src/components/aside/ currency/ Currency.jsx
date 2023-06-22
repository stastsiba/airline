import React from 'react';
import './ currency.scss';

export const Currency = () => {
  const currencyBtn = ['RUB', 'USD', 'EUR'];
  return (
    <div className="currensy__wrapper">
      <div className="currensy__title">Валюта</div>
      <div className="currensy__button-wrapper">
        {currencyBtn.map((item) => (
          <button className="currensy__button-rub">{item}</button>
        ))}
      </div>
    </div>
  );
};
