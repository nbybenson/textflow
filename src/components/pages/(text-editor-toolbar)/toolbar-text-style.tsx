import TextStyleIcon from "@/utilities/svg/text-style-icon";
import { FORMAT_TEXT_COMMAND, LexicalEditor } from "lexical";

interface ToolbarTextStyleProps {
    editor: LexicalEditor;
    toolbarButtonStyle: string;
}
function ToolbarTextStyle(props: ToolbarTextStyleProps) {
    return (<>
        {/* BOLD */}
        <button className={`${props.toolbarButtonStyle} font-black`} onClick ={() => {
            props.editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold");
        }}>
        <TextStyleIcon.bold />
        </button>

        {/* ITALIC */}
        <button className={`${props.toolbarButtonStyle} italic`} onClick={() => {
            props.editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic");
        }}>
            <TextStyleIcon.italic />
        </button>

        {/* UNDERLINE */}
        <button className={`${props.toolbarButtonStyle} underline`} onClick={() => {
            props.editor.dispatchCommand(FORMAT_TEXT_COMMAND, "underline");
        }}>
            <TextStyleIcon.underline />
        </button>
    </>);
}

export default ToolbarTextStyle;