"use client";
import TextAlignIcon from "@/utilities/svg/text-align-icon";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { FORMAT_ELEMENT_COMMAND } from "lexical";

interface ToolbarTextAlignProps {
    toolbarButtonStyle: string;
}


function ToolbarTextAlign(props: ToolbarTextAlignProps) {
    const [editor] = useLexicalComposerContext();

    return (<>
        {/* ALIGN LEFT */}
        <button className={props.toolbarButtonStyle} onClick={() => {
            editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "left");
        }}>
            <TextAlignIcon.left />
        </button>

        {/* ALIGN CENTER */}
        <button className={props.toolbarButtonStyle} onClick={() => {
            editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "center");
        }}>
            <TextAlignIcon.center />
        </button>

        {/* ALIGN RIGHT */}
        <button className={props.toolbarButtonStyle} onClick={() => {
            editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "right");
        }}>
            <TextAlignIcon.right />
        </button>
    </>)
}

export default ToolbarTextAlign;