
import PropTypes from 'prop-types';
import Feature from '../Feature/feature';
const PriceOption = ({option}) => {
    const {price, name, features} = option;
    return (
        <div className='bg-blue-500 rounded-md text-white p-5 space-y-7 flex flex-col'>
            <p className='text-3xl font-extrabold text-center'>{price}</p>
            <h2 className="text-3xl font-medium text-center">{name}</h2>
            <div className='flex-grow pl-2'>
            {
                features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
            }
            </div>
            <button className='bg-green-300 w-full py-2 hover:bg-green-500 rounded-lg text-lg font-medium'>Buy now</button>
        </div>
    );
};
PriceOption.propTypes ={
    option: PropTypes.object
}
export default PriceOption;