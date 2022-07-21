import React, { useEffect, useState } from 'react';
import './start.scss';

function Start({ onStart }) {
  const text = [
    'Добро пожаловать!',
    'Вашему вниманию представлена скромная реализация классического фокуса!',
    'Вы загадаете любое натуральное число от 0 до 100, затем Вам будут показываться карточки с последовательностями натуральных чисел(для удобства числа будут расположены в порядке возрастания слева направо).',
    'Ваша задача честно отвечать на один вопрос: Находится ли загаданное Вами число на данной карточке?',
    'Теперь загадайте любое натуральное число от 0 до 100 и начнем!',
  ];

  const [line, setLine] = useState(0);
  const [count, setCount] = useState(0);
  const [out, setOut] = useState('');

  useEffect(() => {
    const interval = setTimeout(() => {
      setOut((prevState) => (prevState + text[line][count]));
      setCount((prevState) => (prevState + 1));
      if (count === text[line].length) {
        setCount(0);
        setLine((prevState) => (prevState + 1));
        if (line === text.length) {
          clearTimeout(interval);
        }
      }
    }, 100);
  });
  return (
    <div className="start">
      {/* <h1>Добро пожаловать!</h1> */}
      <div className="description">
        {/* Вашему вниманию представлена скромная реализация классического фокуса!
        {' '}
        <br />
        Вы загадаете любое натуральное число от 0 до 100,
        затем Вам будут показываться карточки с последовательностями натуральных чисел
        (для удобства числа будут расположены в порядке возрастания слева направо).
        {' '}
        <br />
        Ваша задача честно отвечать на один вопрос:
        Находится ли загаданное Вами число на данной карточке? */}
        {out}
      </div>

      {/* <div className="query">Теперь загадайте любое
       натуральное число от 0 до 100 и начнем!</div> */}

      <button
        className="start-btn"
        type="button"
        onClick={() => onStart()}
      >
        Начать
      </button>
    </div>
  );
}

export default Start;
