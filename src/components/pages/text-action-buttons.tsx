function TextActionButtons() {
    const BUTTON_CLASSNAME = "bg-neutral-200 h-9 w-9 flex items-center justify-center rounded-sm";

    return (
        <div className="flex items-center justify-center gap-2 p-4">
            <button className={`${BUTTON_CLASSNAME} font-extrabold`}>
                B
            </button>
            <button className={`${BUTTON_CLASSNAME} italic`}>
                I
            </button>
            <button className={`${BUTTON_CLASSNAME} underline`}>
                U
            </button>
        </div>
    )
}

export default TextActionButtons;