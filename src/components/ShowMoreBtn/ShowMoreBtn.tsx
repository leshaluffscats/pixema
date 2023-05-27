import './ShowMoreBtn.scss';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import Loader from '../Loader/Loader';
import { startRenderAction } from '../../store/reducers/renderReducer';

interface IShowMoreBtnProps {
    setPage: React.Dispatch<React.SetStateAction<number>>;
}

const ShowMoreBtn = ({ setPage }: IShowMoreBtnProps) => {
    const { isLoading } = useAppSelector(state => state.loadingStatus);
    const dispatch = useAppDispatch();

    function handleClick() {
        setPage(prev => prev + 1);
        dispatch(startRenderAction());
    }

    return (
        <button className='showMore-btn' onClick={handleClick}>
            Show More
            {isLoading && <Loader />}
        </button>
    );
};

export default ShowMoreBtn;