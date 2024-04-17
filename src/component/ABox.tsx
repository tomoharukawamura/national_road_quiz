export default function ABox (props: {
    isCapital: boolean,
    type: string,
    mapKey: number,
    updateFunc: (arg1: number, arg2: string) => void
}) {
    const updateTextBox = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.updateFunc(props.mapKey, event.target.value)
    }

    const defineBoxClassName = (isCapital: boolean, type: string) => {
        if(isCapital){
            return 'box-capital'
        } else if(type === 'town') {
            return 'box-town'
        } else {
            return 'box-normal'
        }
    }
    return(
        <div>
            <div>
                <input 
                    type="text" 
                    onInput={updateTextBox} 
                    className={defineBoxClassName(props.isCapital, props.type)}
                />
            </div>
        </div>
    )
}