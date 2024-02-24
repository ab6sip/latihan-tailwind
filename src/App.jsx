import "./App.css";
import { useEffect } from "react";

function App() {
  let idx = 0;
  function a(param) {
    idx = param;
    let array = ["😭", "😁", "😡", "👍", "🍈"];
    document.getElementById("img").textContent = array[idx - 1];
  }

  return (
    <>
      <div className="h-screen  bg-indigo-300">
        <div className="h-12 flex justify-between items-center p-10 pl-5">
          <div className="w-[25%] flex justify-between items-center text-sky-50 font-bold">
            <img src="" alt="test" />
            <h2>Home</h2>
            <h2>Studio</h2>
            <h2>Works</h2>
            <h2>Contact</h2>
          </div>
          <div className="flex textsky-50 items-center justify-between ">
            <h2 className="mr-10 text-lg">🔍</h2>
            <button className="rounded-md bg-rose-300 p-2 px-6 text-sky-50 text-sm">
              Hire Now
            </button>
          </div>
        </div>
        <div className="  pr-24 pl-5 pt-24">
          <div className="flex justify-between items-center w-[100%] h-[70%]">
            <div className="w-[50%]">
              <h1 className="text-sky-50 text-[90px] font-extrabold">
                Think. Make. <br /> Solve.
              </h1>
              <p className="text-rose-300 font-sans font-extrabold text-[30px]">
                — What we Do
              </p>
              <p className="text-sky-50 font-sans font-bold text-[30px]">
                we enjoy creating delightful, human-centered digital <br />
                experiences.
              </p>
              <button className="rounded-md bg-rose-300 p-2 px-6 text-sky-50 text-sm mt-10">
                Learn More
              </button>
            </div>
            <p className="text-[400px]">🦆</p>
          </div>
        </div>
      </div>
      <div className="h-screen bg-indigo-500">
        <div className="  pl-24 pr-5 pt-24">
          <div className="flex justify-between items-center w-[100%] h-[70%]">
            <p className="text-[400px]">🗿</p>
            <div className="w-[50%]">
              <h1 className="text-sky-50 text-[85px] font-bold">
                Think outside the square space
              </h1>
              <p className="text-rose-300 font-sans font-extrabold text-[27px] mt-5">
                — Who we Are
              </p>
              <p className="text-sky-50 font-sans font-bold text-[27px]">
                a creative group designers and developers with a passion for the
                arts.
              </p>
              <button className="rounded-md bg-rose-300 p-2 px-6 text-sky-50 text-sm mt-10 font-bold">
                See our Works
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen bg-indigo-600">
        <div className="flex justify-between items-center ">
          <div className="w-[50%] ">
            <p
              className="cursor-pointer text-[100px] font-extrabold hover:text-sky-50 text-indigo-400"
              onClick={() => a(1)}
            >
              Web Design
            </p>
            <p
              className="cursor-pointer text-[100px] font-extrabold hover:text-sky-50 text-indigo-400"
              onClick={() => a(2)}
            >
              Development
            </p>
            <p
              className="cursor-pointer text-[100px] font-extrabold hover:text-sky-50 text-indigo-400"
              onClick={() => a(3)}
            >
              Illustration
            </p>
            <p
              className="cursor-pointer text-[100px] font-extrabold hover:text-sky-50 text-indigo-400"
              onClick={() => a(4)}
            >
              Product Design
            </p>
            <p
              className="cursor-pointer text-[100px] font-extrabold hover:text-sky-50 text-indigo-400"
              onClick={() => a(5)}
            >
              Social Media
            </p>
          </div>
          <div id="img" className="text-[400px]">
            🍈
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
