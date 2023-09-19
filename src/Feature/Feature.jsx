import { AiOutlineCheckCircle } from "react-icons/ai";
import PropTypes from 'prop-types';
const Feature = ({feature}) => {
    return (
        <div>
            <p className="flex items-center"><AiOutlineCheckCircle className="bg-green-400 rounded-full mr-2"></AiOutlineCheckCircle>{feature}</p>
        </div>
    );
};
Feature.propTypes ={
    feature: PropTypes.string
}
export default Feature;