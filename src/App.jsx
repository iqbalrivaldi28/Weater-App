import { useState } from 'react';
import './App.css';
import IMAGES from './images/IMAGES';
import { useEffect } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [term, setTerm] = useState('Jakarta');
  const [data, setdata] = useState(null);

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${term}&appid=22f6ef4ef50134f9a8eca1f56cd7cb79&units=metric`)
      .then((res) => res.json())
      .then((datas) => setdata(datas));
  }, [term]);


  const handleEnterSearch = (e) => {
    if(e.key === 'Enter'){
      setTerm(input)
      setInput('')
    }
  }

  return (
    <>
      <div className="flex h-screen justify-center items-center p-4" >
        <div className={`${data && data.weather[0].icon.slice(-1) === 'n' ? 'bg-night' : 'bg-day'} w-[500px] h-[600px] rounded-[10px] p-8`}>
          {/* Search Input */}
          <div className="flex justify-between items-center gap-3 mb-6">
            <input onChange={(e) => setInput(e.target.value)} onKeyDown={handleEnterSearch} value={input} className="py-2 px-4 rounded-full text-[14px] text-slate-400 w-full outline-none focus:shadow-lg focus:shadow-slate-500" type="text" placeholder="Search City..." />
            <div
              onClick={() => {
                setTerm(input);
                setInput('');
              }}
              className="bg-white rounded-full p-2 hover:scale-110 cursor-pointer"
            >
              <svg className="text-slate-400 w-[20px]" data-name="Layer 1" fill="currentcolor" id="Layer_1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.57,16.15A9,9,0,1,0,15,17.46h0l6.25,6.25,1.42-1.42Zm-3-.14a7.07,7.07,0,1,1,1.56-1.28A6.88,6.88,0,0,1,13.59,16Z" />
              </svg>
            </div>
          </div>
          {/* End Search Input */}

          {/* Start Icon */}
          <div className="flex justify-center mt-[20px]">
            {/* <img src={IMAGES.image11} className="w-[50%] max-w-[150px] h-auto" alt="first image" /> */}
            {data && <img width={150} height={150} src={IMAGES[data.weather[0].icon]} alt="" />}
          </div>
          <div className="flex justify-center mt-1 text-[8vw] md:text-[70px] text-white">{data && data.main.temp} &deg; C</div>
          <div className="mt-[-10px] text-white flex flex-col justify-center items-center">
            <div className="text-[8vw] md:text-[40px] font-bold">{data && data.name}</div>
            <div className="text-[6vw] md:text-[24px]">Precipitations</div>
            <div className="flex gap-6 text-[5vw] md:text-[18px]">
              <span>Min: {data && data.main.temp_min} &deg; C </span>
              <span>Max: {data && data.main.temp_max} &deg; C </span>
            </div>
          </div>
          {/* End Icon */}

          {/* start kecepatan angin */}
          <div className="mt-10 p-4 relative rounded-full flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="absolute top-0 right-0 left-0 bottom-0 bg-[#001026] opacity-30 w-full rounded-full"></div>
            <div className="flex z-10 text-white gap-10 text-[5vw] md:text-[20px]">
              <div className="flex items-center gap-2">
                <img src={IMAGES["rain"]} className="w-[5vw] md:w-[15px]" alt="" />
                <span>{data && data.clouds.all} %</span>
              </div>
              <div className="flex items-center gap-2">
                <img src={IMAGES["humidity"]} className="w-[5vw] md:w-[15px]" alt="" />
                <span>{data && data.main.humidity} %</span>
              </div>
              <div className="flex items-center gap-2">
                <img src={IMAGES["wind"]} className="w-[5vw] md:w-[15px]" alt="" />
                <span>{data && data.wind.speed} km/h</span>
              </div>
            </div>
          </div>
          {/* end kecepatan angin  */}
        </div>
      </div>
    </>
  );
}

export default App;
