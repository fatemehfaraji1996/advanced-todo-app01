import type React from "react"
type onClick = {
    handelClick:()=>void
}

 const HambergerMenu :React.FC <onClick> = ({handelClick})=> {
  return (
    <button onClick={handelClick}>
    <div  className="w-8 h-8 flex flex-col justify-center items-center space-y-1 cursor-pointer">
  <span className="block w-6 h-0.5 bg-gray-800"></span>
  <span className="block w-6 h-0.5 bg-gray-800"></span>
</div>
</button>

  )
}
export default HambergerMenu