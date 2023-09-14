import PropTypes from 'prop-types'

const Carts = ({data,handelActor}) => {

    const {name,img,description,salary,work}= data
    return (
       
            <div className="w-2/3 mt-8 ">

            <div className="w-full">
                <div className="card  bg-gray-200 shadow-xl">
                   <div className="flex justify-center">
                   <figure className="px-4 pt-10  w-32
                     h-32 ">
                        <img  src={img} alt="Shoes" className="rounded-xl" />
                    </figure>
                   </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{name}</h2>
                        <p>{description}</p>
                        <div className=" space-y-5 mt-4">
                            <p>work : {work}</p>
                            <p>salary: {salary}</p>
                        </div>
                        <div className="card-actions mt-4">
                        <button onClick={()=>handelActor(data)} className="btn btn-outline btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
       
    );
};
Carts.propTypes={
    data:PropTypes.object.isRequired,
    handelActor:PropTypes.func.isRequired
}
export default Carts;