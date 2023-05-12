import { ReactNode, useState } from "react";

interface Props {
    children: ReactNode;
    onClick: () => void;
}

function Button({children, onClick}: Props) {
    const [buttonState, setButtonState] = useState(false)
    return (
        <>
            <center>
                <button 
                    className={buttonState === true? "btn btn-success" : "btn btn-secondary "}
                    onClick={() => {
                        setButtonState(true);
                    }}
                >
                    {children}
                </button>
            </center>
        </>
    );
}

export default Button;