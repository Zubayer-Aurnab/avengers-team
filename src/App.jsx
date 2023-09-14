
import { useState } from 'react'
import './App.css'
import Cart from './components/Cart/Cart'
import Home from './components/Home/Home'
import Nav from './components/NavBar/Nav'

function App() {
  const [remaining, setRemaining] = useState(0)
  const [totalCost, setTotalCost] = useState(0)
  const [actor, setActor] = useState([])
  console.log(actor);
  const handelActor = (data) => {

    const isExist = actor.find(item => item.id === data.id)
    let count = data.salary

    if (isExist) {

      document.getElementById('my_modal_2').showModal()
      return
    }
    else {
      actor.forEach(item => {
        count = count + item.salary
      })
      const remaining = 90000 - count
      
     
      if (count > 90000) {
        return alert('Out Of Money')
      } else {
        
        setRemaining(remaining);
        setTotalCost(count)
        const newActors = [...actor, data]
        setActor(newActors)
      }

    }
  }


  return (
    <>
      <Nav></Nav>
      <div className='flex max-w-7xl mx-auto'>
        <Cart handelActor={handelActor} ></Cart>
        <Home actor={actor}
          remaining={remaining}
          totalCost={totalCost}
        ></Home>
      </div>



      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-center"> already in the list!</h3>
          <p className="py-4"></p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  )
}

export default App
