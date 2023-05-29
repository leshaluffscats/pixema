import './EmptyFavPage.scss';
import { IEmptyFavPageProps } from '../../types/appPropsTypes';


const EmptyFavPafe = ({background, text}: IEmptyFavPageProps) => {
    return (
        <div className='favPage-image-wrapper'>
            <img src={background} alt="" />
            <h3>{text}</h3>
        </div>
    );
};

export default EmptyFavPafe;