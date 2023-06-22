import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { getAllTickets, getTickets } from '../../redux/reducers/dataSlice';
import dataSlice from '../../redux/reducers/dataSlice';
import './tickets.scss';

export const Tickets = () => {
  const { filter } = useSelector((state) => state.filter);
  const testArr = [];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTickets());
  }, []);
  const { data, status, error } = useSelector((state) => state.data);
  return (
    <div className="tickets__container">
      {status === 'loading' ? (
        <h2>...Loading</h2>
      ) : (
        data
          .filter((elem) => (filter === 'All' ? elem : String(elem.stops) === filter))
          .map((item) => (
            <div className="tickets__wrapper">
              <div className="tickets__logo-wrapper">
                <img className="tickets__logo" src="image/logoAir.png" alt="Photo" />
                <button className="tickets__btn">
                  Купить
                  <br /> за {item.price} $
                </button>
              </div>
              <div className="tickets__timeDeparture">
                <div className="tickets__timeDeparture-time">{item.departure_time}</div>
                <div className="tickets__timeDeparture-city">
                  {item.origin} {item.origin_name}
                </div>
                <div className="tickets__timeDeparture-date">{item.departure_date}</div>
              </div>
              <div className="numberOfTransfers__wrapper">
                <div className="numberOfTransfers__title">
                  {item.stops === 1
                    ? `${item.stops} пересадка`
                    : `${item.stops} пересадки` && item.stops === 0
                    ? 'Без пересадок'
                    : `${item.stops} пересадки`}
                </div>
                <div className="numberOfTransfers__line-wrapper">
                  <div className="numberOfTransfers__line"></div>
                  <img className="numberOfTransfers__icon" src="image/61212.png" alt="icon" />
                </div>
              </div>
              <div className="tickets__timeDeparture">
                <div className="tickets__timeDeparture-time">{item.arrival_time}</div>
                <div className="tickets__timeDeparture-city">
                  {item.destination} {item.destination_name}
                </div>
                <div className="tickets__timeDeparture-date">{item.arrival_date}</div>
              </div>
            </div>
          ))
      )}
    </div>
  );
};
