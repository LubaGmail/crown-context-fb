import "./button.styles.scss";

export const BUTTON_TYPE_CLASSES = {
    red: "red",
    checkout: "checkout",
};

const Button = ({ children, buttonType}) => {
  
    return (
        <>
            <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
             >
                {children}
            </button>
        </>
    )
}

export default Button