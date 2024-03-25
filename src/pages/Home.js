import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";

const Home = () => {
  const [offsetY, setOffsetY] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => setOffsetY(window.scrollY);
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const starsElemetStyle = {
    transform: offsetY !== 0 && `translateX(${offsetY * 0.25}px)`,
  };
  const moonElemetStyle = {
    transform:
      offsetY !== 0 && `translate(${offsetY * 0.7}px,${offsetY * 1.05}px)`,
  };
  const mountainsBehindElemetStyle = {
    transform: offsetY !== 0 && `translateY(${offsetY * 0.5}px)`,
  };
  const mountainsFrontElemetStyle = {
    transform: offsetY !== 0 && `translateY(${-offsetY * 0}px)`,
  };
  const textElementStyle = {
    marginTop: offsetY !== 0 && `${offsetY * 1}px`,
    marginRight: offsetY !== 0 && `${offsetY * 4}px`,
    right: `${-(window.innerWidth / 2 + 50)}px`,
  };
  const buttonElemetStyle = {
    marginTop: offsetY !== 0 && `${offsetY * 1.5}px`,
  };
  const headerElemetStyle = {
    transform: offsetY !== 0 && `translateY(${-offsetY * 0.5}px)`,
  };
  return (
    <>
      <header
        style={headerElemetStyle}
        className="absolute left-0 top-0 p-5 w-full z-50"
      >
        <nav className="flex flex-wrap items-center justify-between text-white p-2">
          <Link
            to={"/"}
            className="font-bold text-xl uppercase tracking-wider ml-4"
          >
            Trade Protectionism
          </Link>

          <ul className="flex sm:space-x-4 max-sm:flex-col max-sm:gap-2">
            <li>
            <button
                className="hover:text-blue-700 font-medium rounded-full py-2 px-4"
                >
                <Link>Home</Link>
              </button>
            </li>{" "}
            <li>
              <button
                onClick={() => scrollToSection("advantages")}
                className="hover:text-blue-700 font-medium rounded-full py-2 px-4"
                >
                <Link>Advantages</Link>
              </button>
            </li>{" "}
            <li>
              <button
                onClick={() => scrollToSection("disadvantages")}
                className="hover:text-blue-700 font-medium rounded-full py-2 px-4"
                >
                <Link>Disadvantages</Link>
              </button>
            </li>{" "}
            <li>
              <button
                onClick={() => scrollToSection("free")}
                className="hover:text-blue-700 font-medium rounded-full py-2 px-4"
                >
                <Link>Free Trade</Link>
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <section className="overflow-hidden before:absolute before:bottom-0 before:w-full before:h-32 before:z-10 before:bg-gradient-to-t from-black to-transparent flex items-center justify-center relative p-40  h-screen w-full ">
        <img
          style={starsElemetStyle}
          className="absolute pointer-events-none left-0 top-0 h-full w-full sm:object-cover "
          src="images/stars.png"
          alt="stars"
        />

        <img
          style={moonElemetStyle}
          className="absolute pointer-events-none top-0 left-0 h-full w-full object-scale-down mix-blend-screen"
          src="images/moon.png"
          alt="moon"
        />
        <img
          style={mountainsBehindElemetStyle}
          className="absolute pointer-events-none top-[70px] mt-[6rem] left-0 h-full w-full sm:object-cover z-11"
          src="images/sk3.png"
          alt="back"
        />
        <h2 style={textElementStyle} className="absolute text-white font-extrabold text-[7.5vw] z-9">
          TradeProtectionism{" "}
        </h2>
        <button
          style={buttonElemetStyle}
          onClick={() => scrollToSection("explore")}
          className="hover:shadow-[0_0.5em_0.5em_-0.4em_#2b1055] hover:translate-y-[75px] transition-all hover:duration-150 hover:ease-in-out inline-block bg-white px-7 py-2 translate-y-20 text-[#2b1055] text-xl font-bold z-10 rounded-3xl"
        >
          <Link>Learn More</Link>
        </button>
        <img
          style={mountainsFrontElemetStyle}
          className="absolute pointer-events-none top-0
           left-0 h-full w-full sm:object-cover"
          src="images/sk5.png"
          alt="front"
        />
      </section>

      <div id="explore" className="relative flex flex-col place-items-center p-10 pt-14 bg-black">
        <h2 className="text-4xl my-5 text-bold font-['Cambria'] text-white">
          What is Trade Protectionism?
        </h2>
        <p className="text-lg text-center text-white">
          Trade protectionism refers to government policies that restrict international trade to help domestic industries. While free trade is when there are no restrictions on trade whatsoever. Many people debate on which is better for the economy.
        </p>

        <h2 className="text-4xl text-bold mt-10 text-white font-['Cambria'] text-center">
          Trade protectionism or Free trade?
        </h2>

        <p className="text-lg my-5 text-center text-white">
          This question has been asked since the dawn of economics and still is asked to this day. You may be questioning it right now, but by the end of this website you will see for yourself the impacts of trade protectionism. 
          Many countries still choose to use trade protectionism as a way to control their trading with other countries. 

        </p>
      </div>

      <div id="advantages" className="relative flex flex-col place-items-center p-10 pt-14 bg-white">
        <h2 className="text-8xl mt-5 mb-15 text-bold font-['Cambria']">
          Arguments for Trade Protection
        </h2>
        
        <h1 className="text-4xl self-start font-bold mt-10">
          #1 - Protection of infant (sunrise) industries
        </h1>
        <div class="flex place-items-center">
          <p class="text-xl">
          An infant (or sunrise) industry is one that has just opened up and is not large enough to take advantage of economies of scale. The government can support infant industries through protection against larger competitors abroad.
          </p> 
          <img class="h-[25rem] w-[40rem] mx-5" src={'/images/graph1.png'} alt=""/>
        </div>

        <h1 className="text-4xl self-end font-bold mt-10">
          National security - #2
        </h1>
        <div class="flex place-items-center">
          <img class="h-[25rem] w-[40rem] mx-5" src={'/images/jet.jpeg'} alt=""/>
          <p class="text-xl text-right">
          Goods and services for security should be produced domestically so protectionism can block foreign trading. Another important consideration for national security is the defence industry.
          </p> 
        </div>

        <h1 className="text-4xl self-start font-bold mt-10">
          #3 - Maintenance of health, safety, and environmental standard
        </h1>
        <div class="flex place-items-center">
          <p class="text-xl">
          Governments have an obligation to keep their citizens safe. One way to do this is to enforce health and safety laws on any goods or services to protect consumers. Regulations and restrictions based on quality can be placed by the government to deter foreign producers. Countries may define clear production standards for goods in order to protect the environment. 
          </p> 
          <img class="h-[24rem] w-[40rem] mt-4 mx-5" src={'/images/regulations.jpeg'} alt=""/>
        </div>

        <h1 className="text-4xl self-end font-bold mt-10">
          Anti-dumping - #4
        </h1>
        <div class="flex place-items-center">
          <img class="h-[25rem] w-[40rem] mx-5" src={'/images/anti.jpeg'} alt=""/>
          <p class="text-xl text-right">
          Dumping refers to firms exporting their goods at a price below production cost. It is a type of predatory pricing behaviour. An importer may sell or ‘dump’ goods abroad in order to gain a foothold in a new market. A country may respond with its own protectionist measures to protect its domestic industries.          </p> 
        </div>

        <h1 className="text-4xl self-start font-bold mt-10">
          #5 - Unfair competition
        </h1>
        <div class="flex place-items-center">
          <p class="text-xl">
          A country may impose trade protection if it believes it faces unfair competition. A country may believe that intellectual property has been stolen and use tariffs to even the playing field. Within the domestic economy, the government can protect innovators and inventors by using patents.           </p> 
          <img class="h-[25rem] w-[40rem] mx-5" src={'/images/unfair.jpeg'} alt=""/>
        </div>

        <h1 className="text-4xl self-end font-bold mt-10">
          Balance-of-payments correction: Reducing trade deficits - #6
        </h1>
        <div class="flex place-items-center">
          <img class="h-[25rem] w-[40rem] mx-5" src={'/images/balance.png'} alt=""/>
          <p class="text-xl text-right">
          The balance of payments is the record of transactions in trade, capital and financial flows between a country and the rest of the world. The total balance of payments must always be equal to zero. Sometimes, extreme trade flows create challenges for the balance of payments.           </p> 
        </div>

        <h1 className="text-4xl self-start font-bold mt-10">
          #7 - Sources of government revenue and Economically least developed country diversification
        </h1>
        <div class="flex place-items-center">
          <p class="text-xl">
          Tariffs provide governments with the opportunity to earn tax revenue. Often, economically least developed countries lack a wide tax base. These countries may choose to impose tariffs on imports to raise government revenue. If an ELDC protects key industries in the short run, then in an absence of competition, domestic industries have a chance to grow and flourish.          </p> 
          <img class="h-[25rem] w-[40rem] mx-5" src={'/images/poor.jpeg'} alt=""/>
        </div>

        <h1 className="text-4xl self-end font-bold mt-10">
          Protection of jobs - #8
        </h1>
        <div class="flex place-items-center">
          <img class="h-[25rem] w-[40rem] mx-5" src={'/images/jobs.png'} alt=""/>
          <p class="text-xl text-right">
          A country might use protectionism to protect jobs. As some industries economically decline and are unable to compete with similar industries abroad, the government may step in and offer trade protection.          </p> 
        </div>

      </div>
    </>
  );
};
export default Home;
