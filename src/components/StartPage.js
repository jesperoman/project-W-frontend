import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './Button';
import { Loading } from './Quiz/Loading';

import DbIcon from '../assets/DBicon.png'
import foodIcon from '../assets/foodicon.png'
import groupIcon from '../assets/groupicon.png'

export const StartPage = ({ title }) => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();

  const onClickToQuiz = () => {
    navigate('/Quiz');
    setLoading(true)
  }

  if (loading) {
    return <Loading />
  }

  return (
    <div className="main">
      <h1>{title}</h1>
      {loading}
      <div className="icon-container">
        <ul className="icon-list-item">
          <li className="icon-list-icon">
            <img src={DbIcon} alt="Db-icon" height="40px" width="40px" />
            <p> Here comes text</p>
          </li>
          <li className="icon-list-icon">
            <img src={foodIcon} alt="food-icon" height="40px" width="40px" />
            <p> Here comes text</p>
          </li>
          <li className="icon-list-icon">
            <img src={groupIcon} alt="group-icon" height="40px" width="40px" />
            <p> Here comes text</p>
          </li>
        </ul>
        <Button color="black" text="Take Quiz" onClick={onClickToQuiz} />
      </div>
    </div>
  )
}