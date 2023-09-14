import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import Carts from '../Carts/Carts';

const Cart = ({handelActor}) => {

    const [jsonData, setJsonData] = useState([])
    // console.log(jsonData);

    useEffect(() => {
        fetch('avg.json')
            .then(res => res.json())
            .then(data => setJsonData(data))
    }, [])

    return (
       <div className='grid grid-cols-1 w-2/3 gap-4 '>
        
        {
            jsonData.map(data =><Carts handelActor={handelActor} key={data.id} data={data}></Carts>)
        }

       </div>
    );
};
Cart.propTypes-{
    handelActor:PropTypes.func.isRequired
}
export default Cart;