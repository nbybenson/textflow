import TextAlignIcon from "@/utilities/svg/text-align-icon";
import TextStyleIcon from "@/utilities/svg/text-style-icon";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { FORMAT_ELEMENT_COMMAND, FORMAT_TEXT_COMMAND } from "lexical";

function TextEditorToolbar() {
    const [editor] = useLexicalComposerContext();

    const BUTTON_CLASSNAME = "h-10 w-10 flex items-center justify-center rounded-full hover:bg-neutral-200";

    return (
        <div className="flex items-center justify-center p-4">
            <div className="flex items-center justify-center gap-2 p-2 shadow-md inset-shadow-xs rounded-full bg-white">

                {/* BOLD */}
                <button className={`${BUTTON_CLASSNAME} font-black`} onClick ={() => {
                    editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold");
                }}>
                  <TextStyleIcon.bold />
                </button>

                {/* ITALIC */}
                <button className={`${BUTTON_CLASSNAME} italic`} onClick={() => {
                    editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic");
                }}>
                    <TextStyleIcon.italic />
                </button>

                {/* UNDERLINE */}
                <button className={`${BUTTON_CLASSNAME} underline`} onClick={() => {
                    editor.dispatchCommand(FORMAT_TEXT_COMMAND, "underline");
                }}>
                   <TextStyleIcon.underline />
                </button>

                {/* SPACER */}
                <div className="w-3" />

                {/* LINK */}
                {/* <button className={BUTTON_CLASSNAME} onClick={() => {
        
                }}>
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14 12C14 14.7614 11.7614 17 9 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7H7.5M10 12C10 9.23858 12.2386 7 15 7H17C19.7614 7 22 9.23858 22 12C22 14.7614 19.7614 17 17 17H16.5" stroke="#000000" strokeWidth="2" strokeLinecap="round"></path> </g></svg>
                </button> */}
                
                {/* ALIGN LEFT */}
                <button className={BUTTON_CLASSNAME} onClick={() => {
                    editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "left");
                }}>
                    <TextAlignIcon.left />
                </button>

                {/* ALIGN CENTER */}
                <button className={BUTTON_CLASSNAME} onClick={() => {
                    editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "center");
                }}>
                    <TextAlignIcon.center />
                </button>

                {/* ALIGN RIGHT */}
                <button className={BUTTON_CLASSNAME} onClick={() => {
                    editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "right");
                }}>
                    <TextAlignIcon.right />
                </button>

                {/* ALIGN JUSTIFY */}
                {/* <button className={BUTTON_CLASSNAME} onClick={() => {
                    editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "justify");
                }}>
                    <TextAlignIcon.justify />
                </button> */}
            </div>
        </div>
    )
}

export default TextEditorToolbar;