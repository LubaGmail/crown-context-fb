import "./button.styles.scss";

export const BUTTON_TYPE_CLASSES = {
    red: "red",
    checkout: "checkout",
    disabled: "disabled"
};

const Button = ({ children, doSomething, buttonType }) => {

    return (
        <>
            <button onClick={doSomething}
                className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
            >
                {children}
            </button>
        </>
    )
}

export default Button