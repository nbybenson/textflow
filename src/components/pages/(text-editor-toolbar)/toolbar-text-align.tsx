import TextAlignIcon from "@/utilities/svg/text-align-icon";
import { FORMAT_ELEMENT_COMMAND, LexicalEditor } from "lexical";

interface ToolbarTextAlignProps {
    editor: LexicalEditor;
    toolbarButtonStyle: string;
}


function ToolbarTextAlign(props: ToolbarTextAlignProps) {
    return (<>
        {/* ALIGN LEFT */}
        <button className={props.toolbarButtonStyle} onClick={() => {
            props.editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "left");
        }}>
            <TextAlignIcon.left />
        </button>

        {/* ALIGN CENTER */}
        <button className={props.toolbarButtonStyle} onClick={() => {
            props.editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "center");
        }}>
            <TextAlignIcon.center />
        </button>

        {/* ALIGN RIGHT */}
        <button className={props.toolbarButtonStyle} onClick={() => {
            props.editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "right");
        }}>
            <TextAlignIcon.right />
        </button>
    </>)
}

export default ToolbarTextAlign;