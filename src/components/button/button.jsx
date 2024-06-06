import "./button.styles.scss";

export const BUTTON_TYPE_CLASSES = {
    red: "red",
    checkout: "checkout",
};

const Button = ({ children, doSomething, buttonType }) => {
    console.log('buttonType', buttonType)

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