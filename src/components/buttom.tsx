export function NumButton(props: any) {
    const {
        text,
        ...other
    } = props;
    return (
        <button {...other}>
            {text}
        </button>
    );
}

export function OpeButton(props: any) {
    const {
        text,
        ...other
    } = props;
    return (
        <button {...other}>
            {text}
        </button>
    );
}