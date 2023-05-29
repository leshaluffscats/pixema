export interface IAsideButtonProps {
    icon: string;
    text: string;
    url: string;
}

export interface IFormLabelProps {
    type: string;
    value: string;
    setState: React.Dispatch<React.SetStateAction<string>>;
    text: string;
}