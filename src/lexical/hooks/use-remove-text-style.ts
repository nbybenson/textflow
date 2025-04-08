import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $getSelection, $isRangeSelection, $isTextNode, TextFormatType } from "lexical";


export function useSwitchTextStyle() {
    const [editor] = useLexicalComposerContext();

    return (style: TextFormatType, applyStyle?: boolean) => 
        editor.update(() => {
            const selection = $getSelection();
            if ($isRangeSelection(selection)) {
                selection.getNodes().forEach((node) => {
                    if ($isTextNode(node) && ((!applyStyle && node.hasFormat(style)) || applyStyle && !node.hasFormat(style))) {
                        node.toggleFormat(style);
                    }
                });
            }
        });
}