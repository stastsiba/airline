import React, { useState } from 'react';
import { changeFilter } from '../../../redux/reducers/filterSlice';
import './transplants.scss';
import { useDispatch, useSelector } from 'react-redux';

export const Transplants = () => {
  const [checkedItem, setCheckedItem] = useState('All');
  const dispatch = useDispatch();
  const checkbox = ['All', '0', '1', '2', '3'];

  return (
    <div className="transplants">
      <div className="transplants__title">Количество пересадок</div>
      <div className="transplants__input-wrapper">
        {checkbox.map((item, idx) => (
          <div key={idx} className="transplants__input-all">
            <input
              onClick={() => dispatch(changeFilter(item))}
              className="transplants__input-check"
              type="radio"
              name="all"
              id={item}
              onChange={() => setCheckedItem(item)}
              checked={item === checkedItem ? true : false}
            />
            <label className="transplants__input-lbl" for={item}>
              {item === '1'
                ? `${item} пересадка`
                : `${item} пересадки` && item === '0'
                ? 'Без пересадок'
                : `${item} пересадки` && item === 'All'
                ? 'Все билеты'
                : `${item} пересадки`}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
