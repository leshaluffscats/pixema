import './ShowMoreBtn.scss';
import { useAppSelector } from '../../store/hooks';
import Loader from '../Loader/Loader';

interface IShowMoreBtnProps {
    setPage: React.Dispatch<React.SetStateAction<number>>;
}

const ShowMoreBtn = ({ setPage }: IShowMoreBtnProps) => {
    const { isLoading } = useAppSelector(state => state.loadingStatus);

    function handleClick() {
        setPage(prev => prev + 1);
    }

    return (
        <button className='showMore-btn' onClick={handleClick}>
            Show More
            {isLoading && <Loader />}
        </button>
    );
};

export default ShowMoreBtn;