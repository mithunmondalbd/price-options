
import PropTypes from 'prop-types';
const Link = ({route}) => {
    return (
        <div className='text-lg font-medium hover:bg-yellow-500 px-6'>
            <li className="mr-5 " ><a href={route.path}>{route.name}</a></li>
        </div>
    );
};

Link.propTypes ={
    route: PropTypes.object
}

export default Link;