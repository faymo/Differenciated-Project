import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Ripple,
  initTWE,
} from "tw-elements";

initTWE({ Collapse, Ripple });

const Home = () => {
  const mybutton = document.getElementById("btn-back-to-top");
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
  const scrollFunction = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.classList.remove("hidden");
    } else {
      mybutton.classList.add("hidden");
    }
  };
  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  // When the user clicks on the button, scroll to the top of the document
  if (mybutton){
    mybutton.addEventListener("click", backToTop);
    
    window.addEventListener("scroll", scrollFunction);
  }
  return (
    <>
      <header
        style={headerElemetStyle}
        className="absolute left-0 top-0 p-5 w-full z-50"
      >
        <nav className="flex flex-wrap items-center justify-between text-white p-2">
          <Link
            to={"/Differenciated-Project"}
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
            <li>
              <button
                onClick={() => scrollToSection("conclusion")}
                className="hover:text-blue-700 font-medium rounded-full py-2 px-4"
                >
                <Link>Conclusion</Link>
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <section className="overflow-hidden before:absolute before:bottom-0 before:w-full before:h-32 before:z-10 before:bg-gradient-to-t from-black to-transparent flex items-center justify-center relative p-40  h-screen w-full ">
        <img
          style={starsElemetStyle}
          className="absolute pointer-events-none left-0 top-0 h-full w-full sm:object-cover "
          src="Differenciated-Project/images/stars.png"
          alt="stars"
        />

        <img
          style={moonElemetStyle}
          className="absolute pointer-events-none top-0 left-0 h-full w-full object-scale-down mix-blend-screen"
          src="Differenciated-Project/images/moon.png"
          alt="moon"
        />
        <img
          style={mountainsBehindElemetStyle}
          className="absolute pointer-events-none top-[70px] mt-[6rem] left-0 h-full w-full sm:object-cover z-11"
          src="Differenciated-Project/images/sk3.png"
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
          src="Differenciated-Project/images/sk5.png"
          alt="front"
        />
        <button
        type="button"
        data-twe-ripple-init
        data-twe-ripple-color="light"
        class="!fixed bottom-5 end-5 z-[999] idden rounded-full bg-blue-500 p-3 text-xs font-medium uppercase leading-tight text-black shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
        id="btn-back-to-top">
        <span class="[&>svg]:w-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="3"
            stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
          </svg>
        </span>
      </button>
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
        <h2 className="text-8xl mt-5 mb-15 text-bold underline font-['Cambria']">
          Arguments for Trade Protection
        </h2>
        
        <h1 className="text-4xl self-start font-bold mt-10">
          #1 - Protection of infant (sunrise) industries
        </h1>
        <div class="flex place-items-center">
          <p class="text-xl">
          An infant (or sunrise) industry is one that has just opened up and is not large enough to take advantage of economies of scale. The government can support infant industries through protection against larger competitors abroad.
          </p> 
          <img class="h-[25rem] w-[40rem] mx-5" src={'Differenciated-Project/images/graph1.png'} alt=""/>
        </div>

        <h1 className="text-4xl self-end font-bold mt-10">
          National security - #2
        </h1>
        <div class="flex place-items-center">
          <img class="h-[25rem] w-[40rem] mx-5" src={'Differenciated-Project/images/jet.jpeg'} alt=""/>
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
          <img class="h-[24rem] w-[40rem] mt-4 mx-5" src={'Differenciated-Project/images/regulations.jpeg'} alt=""/>
        </div>

        <h1 className="text-4xl self-end font-bold mt-10">
          Anti-dumping - #4
        </h1>
        <div class="flex place-items-center">
          <img class="h-[25rem] w-[40rem] mx-5" src={'Differenciated-Project/images/anti.jpeg'} alt=""/>
          <p class="text-xl text-right">
          Dumping refers to firms exporting their goods at a price below production cost. It is a type of predatory pricing behaviour. An importer may sell or ‘dump’ goods abroad in order to gain a foothold in a new market. A country may respond with its own protectionist measures to protect its domestic industries.          </p> 
        </div>

        <h1 className="text-4xl self-start font-bold mt-10">
          #5 - Unfair competition
        </h1>
        <div class="flex place-items-center">
          <p class="text-xl">
          A country may impose trade protection if it believes it faces unfair competition. A country may believe that intellectual property has been stolen and use tariffs to even the playing field. Within the domestic economy, the government can protect innovators and inventors by using patents.           </p> 
          <img class="h-[25rem] w-[40rem] mx-5" src={'Differenciated-Project/images/unfair.jpeg'} alt=""/>
        </div>

        <h1 className="text-4xl self-end font-bold mt-10">
          Balance-of-payments correction: Reducing trade deficits - #6
        </h1>
        <div class="flex place-items-center">
          <img class="h-[25rem] w-[40rem] mx-5" src={'Differenciated-Project/images/balance.png'} alt=""/>
          <p class="text-xl text-right">
          The balance of payments is the record of transactions in trade, capital and financial flows between a country and the rest of the world. The total balance of payments must always be equal to zero. Sometimes, extreme trade flows create challenges for the balance of payments.           </p> 
        </div>

        <h1 className="text-4xl self-start font-bold mt-10">
          #7 - Sources of government revenue and Economically least developed country diversification
        </h1>
        <div class="flex place-items-center">
          <p class="text-xl">
          Tariffs provide governments with the opportunity to earn tax revenue. Often, economically least developed countries lack a wide tax base. These countries may choose to impose tariffs on imports to raise government revenue. If an ELDC protects key industries in the short run, then in an absence of competition, domestic industries have a chance to grow and flourish.          </p> 
          <img class="h-[25rem] w-[40rem] mx-5" src={'Differenciated-Project/images/poor.jpeg'} alt=""/>
        </div>

        <h1 className="text-4xl self-end font-bold mt-10">
          Protection of jobs - #8
        </h1>
        <div class="flex place-items-center">
          <img class="h-[25rem] w-[40rem] mx-5" src={'Differenciated-Project/images/jobs.png'} alt=""/>
          <p class="text-xl text-right">
          A country might use protectionism to protect jobs. As some industries economically decline and are unable to compete with similar industries abroad, the government may step in and offer trade protection.          </p> 
        </div>

        <div
        class="rounded-lg mt-12 text-center bg-black p-6 text-white text-surface shadow-lg">
        <h2 class="mb-5 text-3xl font-semibold">Real Life Example #1</h2>
        <p>
        During the mid-20th century, South Korea was a war-torn and impoverished nation. To spur economic development and reduce dependency on imports, the South Korean government implemented trade protectionist policies such as tariffs, subsidies, and quotas.      </p>
        <hr class="my-6 h-0.5 border-t-0 bg-gradient-to-r from-black via-white/90 to-black" />
        <p class="mb-4">
        The protectionist policies implemented by South Korea during its economic development phase led to positive outcomes such as industrialization, job creation, technological transfer, and export-led growth. Over the long term, these measures laid the foundation for South Korea's remarkable transformation into one of the world's leading economies, characterized by a strong industrial base, technological prowess, and global competitiveness.
        </p>
        </div>
      </div>

      <div id="disadvantages" className="relative text-white flex flex-col place-items-center p-10 pt-14 bg-black">
        <h2 className="text-8xl mt-5 mb-15 text-bold underline text-white font-['Cambria']">
          Arguments against Trade Protection
        </h2>
        
        <h1 className="text-4xl self-start font-bold mt-10">
          #1 - Misallocation of resources
        </h1>
        <div class="flex place-items-center">
          <p class="text-xl">
          Protectionism creates a misallocation of resources, which occurs when resources are not allocated to their best use. Distorting prices has consequences for resource allocation, since price is an important indicator to consumers to determine the quantity demanded.
          </p> 
          <img class="h-[25rem] w-[40rem] mx-5 bg-white" src={'Differenciated-Project/images/graph2.png'} alt=""/>
        </div>

        <h1 className="text-4xl self-end font-bold mt-10">
        Higher prices and reduced choice - #2
        </h1>
        <div class="flex place-items-center">
          <img class="h-[25rem] w-[40rem] mx-5" src={'Differenciated-Project/images/up.jpeg'} alt=""/>
          <p class="text-xl text-right">
          Tariffs and quotas will lead to higher prices, especially for domestic consumers. Tariffs act like a tax which increases the price of goods, whereas quotas create a shortage in the market that puts upward pressure on prices. Protectionism limits imports, and therefore limits choice for consumers.          </p> 
        </div>

        <h1 className="text-4xl self-start font-bold mt-10">
          #3 - Retaliation
        </h1>
        <div class="flex place-items-center">
          <p class="text-xl">
          If a country raises tariffs, its trading partner may retaliate by also imposing tariffs or other barriers to trade. Sometimes, escalating retaliation can lead to a trade war, which can cause tension between countries.
          </p> 
          <img class="h-[25rem] w-[40rem] mx-5 bg-white" src={'Differenciated-Project/images/hp.jpeg'} alt=""/>
        </div>

        <h1 className="text-4xl self-end font-bold mt-10">
        Increased costs - #4
        </h1>
        <div class="flex place-items-center">
          <img class="h-[25rem] w-[40rem] mx-5" src={'Differenciated-Project/images/up.jpeg'} alt=""/>
          <p class="text-xl text-right">
          Tariffs or quotas imposed on raw materials will drive up the cost of production. If a government imposes a tariff, it must be mindful of the effects on downstream industries. A downstream industry uses inputs to production that are intermediate goods. </p>        </div>
        <h1 className="text-4xl self-start font-bold mt-10">
          #5 - Lack of incentive for domestic firms to become more efficient
        </h1>
        <div class="flex place-items-center">
          <p class="text-xl">
          Without the threat of competition from abroad, domestic firms have no incentive to be efficient. Competition forces firms to pursue the lowest-cost method of production. It creates an environment where firms must innovate and invest in research and development. Without competition, the drive to improve disappears and domestic firms may continue to use outdated technologies or processes.
          </p> 
          <img class="h-[24rem] w-[40rem] mt-4 mx-5 bg-white" src={'Differenciated-Project/images/lack.jpeg'} alt=""/>
        </div>

        <h1 className="text-4xl self-end font-bold mt-10">
        Reduced export competitiveness - #6
        </h1>
        <div class="flex place-items-center">
          <img class="h-[25rem] w-[40rem] mx-5" src={'Differenciated-Project/images/export.jpeg'} alt=""/>
          <p class="text-xl text-right">
          Protectionism creates a higher-cost environment, and reduces the efficiency of firms in the domestic market.           </p> 
        </div>

        <div
        class="rounded-lg mt-12 text-center bg-white p-6 text-black text-surface shadow-lg">
        <h2 class="mb-5 text-3xl font-semibold">Real Life Example #2</h2>
        <p>
        During the Great Depression, the United States implemented the Smoot-Hawley Tariff Act in 1930, significantly raising tariffs on over 20,000 imported goods.
        </p>
        <hr class="my-6 h-0.5 border-t-0 bg-gradient-to-r from-white via-black/90 to-white" />
        <p class="mb-4">
        This escalated retaliatory tariffs by other countries, leading to a reduction in international trade.
        Which then exacerbated the already dire economic conditions of the Great Depression by hindering global trade and contributing to a decrease in global economic activity.
        </p>
        </div>
      </div>

      <div id="free" className="relative flex flex-col place-items-center p-10 pt-14 bg-white">
        <h2 className="text-8xl mt-5 mb-15 text-bold underline font-['Cambria']">
          Free trade
        </h2>

        <p className="text-xl text-center w-2/3 mt-4">
        Free trade occurs when there are no barriers to trade. It allows countries to specialise in the production of goods for which they have comparative advantage. If this is the case, overall world output will rise.
        </p>

        <h1 className="text-4xl mt-5 mb-15 text-bold font-['Cambria']">
          Benefits of Free trade
        </h1>

        <ul class="text-surface text-black text-left place-self-start">
        <li
          class="w-full border-b-2 border-neutral-100 py-4 dark:border-white/10">
          1. Lower Consumer Prices: Free trade typically results in lower prices for consumers due to increased competition and access to a wider variety of goods and services.
        </li>
        <li
          class="w-full border-b-2 border-neutral-100 py-4 dark:border-white/10">
          2. Economic Growth: Free trade fosters economic growth by facilitating the efficient allocation of resources, encouraging innovation, and expanding market opportunities for businesses.
        </li>
        <li
          class="w-full border-b-2 border-neutral-100 py-4 dark:border-white/10">
          3. Job Creation: Free trade can create jobs by enabling industries to focus on their comparative advantages and encouraging the growth of export-oriented industries.
        </li>
        <li
          class="w-full border-b-2 border-neutral-100 py-4 dark:border-white/10">
          4. Higher Standards of Living: Free trade can lead to higher standards of living by providing consumers with access to a greater variety of goods and services at competitive prices.
        </li>
        <li class="w-full py-4">     
        5. Global Cooperation: Free trade promotes cooperation and mutual benefits among nations by fostering economic interdependence and reducing the likelihood of trade conflicts.
        </li>
        </ul>

        <div
        class="rounded-lg my-6 text-center bg-black p-6 text-white text-surface shadow-lg">
        <h2 class="mb-5 text-3xl font-semibold">Real Life Example #3</h2>
        <p>
        The European Union initiated the Single Market project in 1993, aiming to eliminate barriers to trade and create a unified economic area among its member states. They did this with removal of trade barriers, regulations and free movement of people.        </p>
        <hr class="my-6 h-0.5 border-t-0 bg-gradient-to-r from-black via-white/90 to-black" />
        <p class="mb-4">
        The single market project has led to increased trade flows, economic growth, efficiency, and consumer benefits within member states. Over the long term, it has contributed to the overall prosperity, competitiveness, and economic integration of the European Union, fostering social cohesion and peace among member states.
        </p>
        </div>

      </div>

      <div id="conclusion" className="relative text-white flex flex-col place-items-center p-10 pt-14 bg-black">
        <h2 className="text-8xl mt-5 mb-15 text-bold underline font-['Cambria']">
          Free trade vs Trade Protection
        </h2>

        <p className="text-xl text-center mt-4">
          In the end after looking at all of the advantages and disadvantages, what do you think is more effective in creating a better economy?
        </p>

        <div class="mt-10">
          <button
            class="inline-block rounded bg-primary px-6 pb-2 mx-2 pt-2.5 text-xl border border-white font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
            type="button"
            >
            Free Trade
          </button>
          <button
            class="inline-block rounded bg-primary px-6 pb-2 mx-2 pt-2.5 text-xl border border-white font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
            type="button"
            >
            Trade Protectionism
          </button>
        </div>

        <div class="mt-4 grid gap-4 md:grid-cols-2">
          <div
            class="multi-collapse"
            id="1">
            <div>
              Free trade is widely regarded as a more effective strategy for creating a better economy. By removing barriers to trade such as tariffs, quotas, and subsidies, countries can benefit from increased efficiency, productivity, and innovation. Free trade encourages specialization according to comparative advantage, allowing resources to be allocated more efficiently and goods and services to be produced at lower costs. This leads to lower consumer prices, higher standards of living, and greater economic growth. While free trade may result in short-term adjustments and challenges, its long-term benefits include job creation, technological progress, and enhanced global economic integration. Overall, embracing free trade promotes prosperity, competitiveness, and cooperation in the global economy.
            </div>
          </div>
          <div
            class="multi-collapsetext-right"
            id="2">
            <div>
              Trade protectionism can be a viable strategy for safeguarding domestic industries and fostering economic growth. By implementing tariffs, quotas, or subsidies, countries can shield their producers from foreign competition, allowing them to compete on a level playing field. This approach may help protect jobs, promote domestic manufacturing, and reduce reliance on imports. However, it's important to consider the potential drawbacks, including retaliatory measures from trading partners, higher consumer prices, and reduced efficiency. While trade protectionism may offer short-term benefits for certain industries, it can ultimately hinder long-term economic development and global cooperation.
            </div>
          </div>
        </div>

        <p className="text-xl text-center mt-4">
          Both trade protectionism and free trade have their benefits, each having their own perks depending on various factors affecting an economy. But as seen in this website, trade protectionism offers more advantages than disadavantages making it highly useful for most situations.
        </p>
      </div>
    </>
  );
};
export default Home;
