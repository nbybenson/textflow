import TextStyleIcon from "@/utilities/svg/text-style-icon";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { FORMAT_TEXT_COMMAND } from "lexical";

interface ToolbarTextStyleProps {
    toolbarButtonStyle: string;
}
function ToolbarTextStyle(props: ToolbarTextStyleProps) {
    const [editor] = useLexicalComposerContext();

    return (<>
        {/* BOLD */}
        <button className={`${props.toolbarButtonStyle} font-black`} onClick ={() => {
            editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold");
        }}>
        <TextStyleIcon.bold />
        </button>

        {/* ITALIC */}
        <button className={`${props.toolbarButtonStyle} italic`} onClick={() => {
            editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic");
        }}>
            <TextStyleIcon.italic />
        </button>

        {/* UNDERLINE */}
        <button className={`${props.toolbarButtonStyle} underline`} onClick={() => {
            editor.dispatchCommand(FORMAT_TEXT_COMMAND, "underline");
        }}>
            <TextStyleIcon.underline />
        </button>
    </>);
}

export default ToolbarTextStyle;