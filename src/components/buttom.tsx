export default function NumButton(props: any) {
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

export function EqualButton(props:any) {
    return (
        <button {...props}>
            =
        </button>
    );
}

export function DelButton(props:any){
    return(
        <button {...props}>
            AC
        </button>
    );
}