type handelClick = {
    handelClickProfile: ()=>void
}

 const MenuBarRight:React.FC <handelClick> =({handelClickProfile})=> {
  return (
    <> 
    <button onClick={handelClickProfile}>
        <div>Profile</div>
    </button>
    
    </>
   
  )
}
export default MenuBarRight