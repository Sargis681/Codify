import React, { useState, useEffect } from 'react';
import './Workers.scss';
import user from "../../Images/ai-generated-portrait-of-handsome-smiling-young-man-with-folded-arms-isolated-free-png.webp";
import user1 from "../../Images/rTkJ7v-man-png-image.png";
import user2 from "../../Images/smiling-young-man-standing-with-hands-in-pockets-standing-front-view-isolate-on-transparent-background-png.webp";


import GetStarted from '../Buttons/GetStarted/GetStarted';

const workers = [
  { name: "Sargis", surname: "Manukyan", position: "Front End Developer", user: user },
  { name: "Armen", surname: "Manukyan", position: "Front End Developer", user: user1 },
  { name: "Hovo", surname: "Manukyan", position: "Front End Developer", user: user2 }
];

const Workers = () => {
  const [selectedWorker, setSelectedWorker] = useState(workers[0]);
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return; // Если пауза, не запускаем интервал

    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % workers.length;
        setSelectedWorker(workers[nextIndex]);
        return nextIndex;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleClick = (worker, i) => {
    setSelectedWorker(worker);
    setIndex(i); // Обновляем индекс для выделения
    setIsPaused(true);

    setTimeout(() => {
      setIsPaused(false);
    }, 5000);
  };

  return (
    <>
      <div className="Workers">
        <div className="work">
          <div className="work_positions">
            {workers.map((item, i) => (
              <h1
                key={i}
                onClick={() => handleClick(item, i)}
                className={index === i ? "active" : ""} // Добавляем класс для выделения
              >
                {item.name} {item.surname}:
                <span>
                  {item.position}
                </span>
              </h1>
            ))}
          </div>
          <div className="work_picture">
            <img src={selectedWorker.user} alt={`${selectedWorker.name} ${selectedWorker.surname}`} />
          </div>
        </div>
      </div>
      <div className='work_button'>
        <GetStarted />
      </div>
    </>
  );
};

export default Workers;
