import React from 'react';
import { Currency } from './ currency/ Currency';
import './aside.scss';
import { Transplants } from './transplants/Transplants';

export const Aside = () => {
  return (
    <div className="aside__wrapper">
      <Currency />
      <Transplants />
    </div>
  );
};
