import React from 'react';

function CurrentWeather() {
      return (
            <div className="my-5 max-w-md rounded-md border p-2 flex flex-col justify-center mx-auto">
                  <div className="toppart mx-auto my-1">
                        <div>Weather Icon</div>
                        <div>Temperature</div>
                        <div>City, Country</div>
                  </div>
                  <hr />
                  <div className="bottomPart mx-auto my-2">
                        <div className="feelslike">Feelslike</div>
                        <div className="wind">Wind speed and direction</div>
                        <div className="humidity">humidity</div>
                        <div className="pressure">Pressure</div>
                  </div>
            </div>
      );
}

export default CurrentWeather;
