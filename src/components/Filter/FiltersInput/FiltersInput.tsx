import React from 'react';

interface IFilterInputProps {
    text: string;
    className?: string;
    setState: React.Dispatch<React.SetStateAction<string>>;
    setState2: React.Dispatch<React.SetStateAction<string>>;
    value: string;
    value2: string;
}

const FiltersInput = (props: IFilterInputProps) => {
    return (
        <div className={props.className ? props.className : ""}>
            {props.text}
            <div>
                <input type='text' placeholder='From' onChange={e => props.setState(e.target.value)} value={props.value}/>
                <input type='text' placeholder='To' onChange={e => props.setState2(e.target.value)} value={props.value2}/>
            </div>


        </div>
    );
};

export default FiltersInput;