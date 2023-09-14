/* eslint-disable react/jsx-key */
import List from "../List/List";
import './home.css'
import PropTypes from 'prop-types'

const Home = ({actor,totalCost,remaining}) => {
    return (
        <>
            <div className="w-1/3 p-4  text-center mt-8 ">
                <h1 className="text-2xl text-bla ext-center">selected  Actors : {actor.length}</h1>
                <div className="space-x-3">
                    <span>remaining : {remaining} $</span>
                    <span>total cost  : {totalCost} $</span>
                </div>
                <div>
                    {
                        actor.map(((actor,idx) =><List key={idx} actor={actor} totalCost={totalCost} remaining={remaining}></List> ))
                    }
                </div>
            </div>
           
        </>
    );
};
Home.propTypes={
    actor:PropTypes.array.isRequired,
    totalCost:PropTypes.number.isRequired,
    remaining:PropTypes.number.isRequired
}
export default Home;