import './App.css';

function App() {
  return (
    <>
      <div className="flex h-screen justify-center items-center">
        <div className="bg-night h-[600px] w-[500px] rounded-[10px] p-8">
          <div className="flex justify-between items-center gap-3">
            <input className="py-2 px-4 rounded-full text-[14px] text-slate-400 w-full outline-none focus:shadow-lg focus:shadow-slate-500" type="text" placeholder='Search City...'/>
            <div className="bg-white rounded-full p-2 hover:scale-110 cursor-pointer">
              <svg className="text-slate-400 w-[20px]" data-name="Layer 1" fill="currentcolor" id="Layer_1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.57,16.15A9,9,0,1,0,15,17.46h0l6.25,6.25,1.42-1.42Zm-3-.14a7.07,7.07,0,1,1,1.56-1.28A6.88,6.88,0,0,1,13.59,16Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
