"use client";

import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $getSelection, $isRangeSelection, $isTextNode, COMMAND_PRIORITY_EDITOR, TextNode } from "lexical";
import { useEffect } from "react";
import { SET_FONT_SIZE_COMMAND } from "../commands/font-size-command";

function FontSizePlugin() : null {
    const [editor] = useLexicalComposerContext();

    useEffect(() => {
        return editor.registerCommand(
            SET_FONT_SIZE_COMMAND,
            (fontSize: string) => {
                const selection = $getSelection();
                
                if($isRangeSelection(selection)) {
                    // change previous text style
                    selection.getNodes().forEach(node => {
                        if($isTextNode(node)) 
                            (node as TextNode).setStyle(`font-size: ${fontSize}`);
                    });

                    // change new character style
                    selection.setStyle(`font-size: ${fontSize}`);
                };
                return true;
            },
            COMMAND_PRIORITY_EDITOR
        );
    }, [editor])

    return null;
}

export default FontSizePlugin;