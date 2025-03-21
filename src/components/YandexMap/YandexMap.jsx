import React from 'react';
import "./YandexMap.scss"

const YandexMap = () => {
  return (
    <div className='yandex'>
      <h1>Yandex Map Embed</h1>
      <iframe
        style={{ borderRadius: "30px" }}
        src="https://yandex.com/map-widget/v1/?ll=44.510185%2C40.177612&z=18&pt=44.510185,40.177612,pm2rdm"
        width="90%"
        height="650"
        frameBorder="0"
        title="Yandex Map"
      />
    </div>
  );
};


export default YandexMap;