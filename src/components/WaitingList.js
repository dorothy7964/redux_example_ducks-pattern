import React from 'react';
import './WaitingList.css';

const WaitingList = (props) => {


  return (
    <div className="WaitingList">
      <h2>WaitingList</h2>

      <form>
        <input />
        <button>등록</button>
      </form>

      <ul>
        <li>
          <div className="text entered">text</div>
          <div className="buttons">
            <button>입장</button>
            <button>나감</button>
          </div>
        </li>
        <li>
          <div className="text">text</div>
          <div className="buttons">
            <button>입장</button>
            <button>나감</button>
          </div>
        </li>
          <li>
            <div className="text">text</div>
            <div className="buttons">
              <button>입장</button>
              <button>나감</button>
            </div>
          </li>
      </ul>
    </div>
  )
}

export default WaitingList;
