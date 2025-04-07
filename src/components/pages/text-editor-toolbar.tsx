import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import ToolbarTextAlign from "./(text-editor-toolbar)/toolbar-text-align";
import ToolbarSpacer from "./(text-editor-toolbar)/toolbar-spacer";
import ToolbarTextStyle from "./(text-editor-toolbar)/toolbar-text-style";
import ToolbarTextPreset from "./(text-editor-toolbar)/toolbar-text-preset";

function TextEditorToolbar() {
    const [editor] = useLexicalComposerContext();
    const TOOLBAR_BUTTON_STYLE = "h-10 w-10 flex items-center justify-center rounded-full hover:btn hover:btn-circle";

    return (
        <div className="flex items-center justify-center p-4">
            <div className="flex items-center justify-center gap-2 p-2 shadow-md inset-shadow-xs rounded-full bg-white">

                <ToolbarTextPreset />
                <ToolbarTextStyle editor={editor} toolbarButtonStyle={TOOLBAR_BUTTON_STYLE} />
                <ToolbarSpacer />
                <ToolbarTextAlign editor={editor} toolbarButtonStyle={TOOLBAR_BUTTON_STYLE} />
                
            </div>
        </div>
    )
}

export default TextEditorToolbar;