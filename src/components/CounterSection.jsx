import React, { useEffect, useState } from 'react';

const CounterSection = () => {
  const [counters, setCounters] = useState([
    { text: 'WORKS COMPLETED', start: 0, end: 40 },
    { text: 'YEARS OF EXPERIENCE', start: 0, end: 20 },
    { text: 'TOTAL CLIENTS', start: 0, end: 50 },
    { text: 'AWARD WON', start: 0, end: 4 }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters(prevCounters => prevCounters.map(counter => {
        if (counter.start < counter.end) {
          return {
            ...counter,
            start: counter.start + 1
          };
        }
        return counter;
      }));
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="section-counter container bg-blue-900 opacity-80 bg-image pb-8">
      <div className="overlay-mf"></div>
      <div className="container position-relative">
        <div className="grid grid-cols-4 gap-4">
          {counters.map((counter, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="counter-box pt-4 pt-md-0 p-8">
                <div className="counter-ico">
                  <span className="ico-circle"><i className="bi bi-check"></i></span>
                </div>
                <div className="counter-num">
                  <p className="counter text-white text-5xl font-bold purecounter" data-purecounter-start={counter.start} data-purecounter-end={counter.end} data-purecounter-duration="1">
                    {counter.start}+
                  </p>
                </div>
              </div>
              <span className="counter-text  text-white">{counter.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CounterSection;
