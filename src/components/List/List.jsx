import './List.css'
import PropTypes from 'prop-types'
const List = ({actor}) => {
   const {name,salary} = actor
    return (
        <div className="">
            <div className="bg-gray-300 m-2 p-4 rounded-xl text-center home">
                <h1 className="text-2xl font-bold">{name}</h1>
                <p>salary : {salary} $</p>
                
            </div>
        </div>
    );
};
List.prototype={
    actor:PropTypes.object.isRequired
}
export default List;