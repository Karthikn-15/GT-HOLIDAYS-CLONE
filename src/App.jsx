import {useState} from "react";
import {TopBar} from "./Components/header";
import {MenuBar} from "./Components/header";
import Video from "./bg video/BG VIDEO.mp4";
import VideoMob from "./bg video/BG MOBILE.mp4";
import {packages} from "./list data";

export default function App() {
  const [list, SetList] = useState(null);
  return (
    <>
      <Header list={list} SetList={SetList} />
      <Home />
      <Packages />
      <div className="relative pt-[10rem] px-20 break-words pb-[25rem]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, odio
        itaque veniam nisi, consequatur distinctio quam hic voluptatem qui unde
        eveniet, iste ex quibusdam esse deleniti consequuntur sed dolore
        sapiente. Atque amet quidem inventore, nisi sunt natus perspiciatis a ab
        ipsam, eius est pariatur, ducimus laudantium voluptatem deserunt dolorem
        nobis quod quos molestias itaque odit impedit perferendis. Deserunt,
        ipsum velit! Sapiente, soluta quas! Quisquam eveniet repudiandae
        expedita doloribus, laborum provident maiores voluptatum tenetur debitis
        ipsum libero quae! Consequuntur mollitia laboriosam expedita nesciunt
        eligendi voluptate similique! Architecto eius nulla voluptate impedit.
        Dolores ipsam accusamus placeat assumenda omnis hic consequatur iure
        amet quo velit impedit, eveniet ad illo, nesciunt harum ex laboriosam
        eum modi soluta doloremque! Quibusdam eligendi ea obcaecati ratione
        facere. At reiciendis repellat optio obcaecati doloremque, dicta
        voluptatum itaque iure ad veritatis minus consequatur est! Dolor labore,
        temporibus laboriosam aliquid sit neque quas harum facilis consectetur,
        blanditiis commodi
      </div>
      <Footer />
    </>
  );
}

function Header({list, SetList}) {
  return (
    <div className="h-36 w-full  bg-white relative " id="header">
      <TopBar />
      <MenuBar list={list} SetList={SetList} />
    </div>
  );
}

function Home() {
  return (
    <section
      className="  section1 h-full flex justify-center  bg-black w-full"
      id="home">
      <div className="overflow-hidden z-auto w-full content-center   ">
        <video
          src={Video}
          muted
          loop
          autoPlay
          className=" max-md:hidden max-full:w-[200%]"
        />
        <video
          src={VideoMob}
          loop
          muted
          autoPlay
          className="hidden max-md:block"
        />
      </div>
    </section>
  );
}
function Packages() {
  const [hover, setHover] = useState(false);
  return (
    <div className="relative inset-0 h-[80rem]  " id="packages">
      <div
        className="pt-12 md:pt-16
          px-[2rem]  xxl:pl-[7rem] pr-[2rem] xxl:pr-[7rem] 
           font-serif text-[2rem] max-w-max break-words">
        <h2
          className="pb-2 text-[#ffcc00] pl-6
         font-serif">
          Popular packages
        </h2>
        <div
          className="grid grid-cols-1
           gap-4 xl:gap-7 
         md:grid-cols-3 md:grid-rows-1 lg:grid-cols-4  ">
          {packages.map((i) => (
            <div
              onMouseEnter={() => setHover(false)}
              onMouseLeave={() => setHover(true)}
              i={i}
              className={`  ${i.id === 1 ? "md:col-span-2" : ""}
${i.id === 1 && hover ? "Card-act" : ""}

                   hover:text-white
                opacity-70 hover:opacity-100
                relative
            transition-transform duration-300 transform hover:scale-105  `}>
              <img
                src={i.src}
                key={i.id}
                alt={i.name}
                className={`  h-[100%] w-full Border  ${
                  i.id === 3 ? "md:h-[165%]" : ""
                } ${i.id === 4 ? "md:h-[165%]" : ""}
                  ${i.id === 5 ? "md:h-[165%]" : ""}
                `}
              />
              <div className="absolute inset-1 content-center  flex flex-row justify-center  ">
                <h2
                  className="text-[1.5rem] md:text-[1.2rem] xlg:text-[2rem]
                  text-black 
                    pl-3
                     pt-4  ">
                  {i.name}
                </h2>
              </div>
              <div className="absolute inset-1 content-center  flex flex-row justify-center break-words  cursor-pointer">
                <button
                  className={`text-[0.5rem] md:text-[0.5rem] xlg:text-[1.2rem] p-0 font-mono h-[1.5rem] w-[4.5rem] xlg:h-[2rem] xlg:w-[8rem]

                  text-black  ${i.id === 1 ? "mt-[5rem] xlg:mt-[10rem]" : ""} 
                  ${i.id === 2 ? "mt-[5rem] xlg:mt-[10rem]" : ""}
                  ${i.id === 3 ? "mt-[5rem] xlg:mt-[8rem] pl-0" : ""}  ${
                    i.id === 4 ? "mt-[5rem] xlg:mt-[8rem] pl-0" : ""
                  }  ${
                    i.id === 5 ? "mt-[5rem] xlg:mt-[8rem] pl-0" : ""
                  }  hover:text-white bg-yellow-400
                   h-[3rem] w-[10rem]`}>
                  {i.title}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
function Footer() {
  return (
    <footer
      className="bg-slate-500
     relative h-[5rem]   w-[100%] ">
      <div
        className="px-2 pb-8
         pt-2 h-[2rem] content-center w-[10rem]  fixed top-[91.333vb] right-[8vb] 
         ">
        <h3 className="text-[1rem] font-[poppins] font-semibold bg-[gold] transition-colors duration-300 cursor-pointer hover:bg-black hover:text-white py-2  tracking-widest w-48	uppercase inline-flex px-4">
          <a href="/">Enquire Now</a>
        </h3>
      </div>
    </footer>
  );
}
