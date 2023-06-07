import './FormButton.scss';

interface IFormButtonProps {
    text: string;
    className?: string;
}

const FormButton = ({ text, className }: IFormButtonProps) => {
    return (
        <button className={className} type='submit'>
            {text}
        </button>
    );
};

export default FormButton;