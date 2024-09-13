import clsx from "clsx";
import {useState} from "react";
import ToggleButton from "./ToggleButton.jsx";
import "./App.css";
import "./index.css";

const App = () => {

const [isDark,setIsDark] = useState(true);
  
  return (
    <div className="outerContainer flex justify-center p-4">
     
     <div className={clsx("p-4 flex flex-col innerContainer w-full max-w-3xl",isDark ? "text-slate-700 bg-slate-400": "bg-white text-slate-500" )}>
       
       <ToggleButton
         enable={isDark}
         handleClick={()=> setIsDark(!isDark) }
         >{isDark? "dark mode" : "light mode" }</ToggleButton>


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

      <p className="my-5" >In terms of security, the internet relies on encryption protocols like HTTPS
         to protect data during transmission. HTTPS encrypts data between the user and the server, making
          it much harder for hackers or malicious actors to intercept and read sensitive information, 
          such as passwords or credit card details. This secure layer is especially important for
           activities like online banking, shopping, and private communications.

</p>
      <p className="my-6" >Lastly, the internet is decentralized, meaning no single entity controls it. 
        Various organizations and stakeholders collaborate to manage standards and policies,
         such as the Internet Engineering Task Force (IETF) and the Internet Corporation for 
         Assigned Names and Numbers (ICANN). This decentralized nature helps ensure the internet
          remains open and accessible, though it also presents challenges in governance and regulation, 
          particularly with issues like cybersecurity and privacy.</p>

       
     </div>
    </div>
  );
};

export default App;
