import React from 'react';
import { changeFilter } from '../../../redux/reducers/filterSlice';
import './transplants.scss';
import { useDispatch } from 'react-redux';

export const Transplants = () => {
  const dispatch = useDispatch();
  const checkbox = ['All', 'Non stop', '1 пересадка', '2 пересадка', '3 пересадка'];
  return (
    <div className="transplants">
      <div className="transplants__title">Количество пересадок</div>
      <div className="transplants__input-wrapper">
        {checkbox.map((item) => (
          <div className="transplants__input-all">
            <input
              onClick={() => dispatch(changeFilter(item))}
              className="transplants__input-check"
              type="checkbox"
              name="all"
              id={item}
            />
            <label className="transplants__input-lbl" for={item}>
              {item}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
