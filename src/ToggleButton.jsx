import clsx from "clsx";

const ToggleButton=(props)=> {

  const {enable,handleClick,children} = props;
  return(

    <div className=" flex justify-center">
    
    <button
      onClick={handleClick}
      className={clsx(" mx-2 mainContainer  w-14 rounded-full p-1 ", enable?  " flex justify-start bg-stone-600" :"bg-green-400 flex justify-end ") }>

    <div className = "w-4 h-4 bg-white rounded-full"></div>
  
  </button>

<div>{children}</div>
      
    </div>
    
  );
  
};

export default ToggleButton;