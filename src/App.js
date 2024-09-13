
import './App.css';

import clsx from "clsx";
import {useState} from "react";
const App = () => {

const [isDark,setIsDark] = useState(true);
  
  return (
    <div className="outerContainer flex justify-center p-4">
     
     <div className={clsx("p-4 flex flex-col innerContainer w-full max-w-xl",isDark ? "text-slate-700 bg-slate-400": "bg-white text-slate-500" )}>
       <button
         onClick={()=> setIsDark(!isDark) }
         >{isDark? "dark mode" : "light mode" }</button>
        <p className="my-4">
        The internet is a global network that connects millions of private, public, academic, 
        business, and government networks through a variety of physical infrastructures 
        such as fiber-optic cables, satellites, and wireless connections. 
        This network of networks uses a standardized set of protocols, 
        known as the Internet Protocol Suite (TCP/IP), to transmit data. TCP/IP breaks down information
         into smaller packets, sends them across various routes, and reassembles them at their destination.
          This design allows the internet to handle huge amounts of traffic efficiently, 
          even if parts of the network experience disruptions.
      </p>
      <p className="my-4">
      One of the most critical components of the internet is the Domain Name System (DNS), 
      which acts like a phone book for the web. When you type a website address (like "example.com"),
       the DNS translates that human-readable name into an IP address, which represents
        the actual location of the server hosting that website. Without DNS, users would need to remember 
        long strings of numbers instead of simple domain names, making navigation much harder.
      </p>
      <p className="my-4">
      Another key aspect of how the internet works is client-server architecture.
       In this model, a client (like your web browser) sends requests to a server 
       (the machine hosting a website or service). The server processes the request and
        returns the appropriate data, such as a web page or file. 
        This request-response process allows users to access resources stored remotely on servers around the world.
      </p>
      <p className="my-4">
      Internet traffic is routed through various networks, 
      often owned by different entities such as Internet Service Providers (ISPs),
       large data centers, or private corporations. These networks use routers to direct traffic
        from one point to another. Routers analyze packet data to determine the best path for
         information to travel, ensuring efficient delivery, even if certain routes become 
         congested or unavailable.
      </p>

       
     </div>
    </div>
  );
};

export default App;
