
const Button_v1 = ({children}) => {
    return (
        <button className="button">
            {children}
        </button>
    );
};

const Button_v2 = () => {
    return (
        <button>
            {children}
        </button>
    );
};

const Button_v3 = () => {
    return (
        <button>
            {children}
        </button>
    );
};

export { Button_v1, Button_v2, Button_v3 };
