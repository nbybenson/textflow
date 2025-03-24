"use client";

import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { EditorState, SerializedEditorState } from "lexical";
import { useMemo, useState } from "react";

const theme = {
    
}

function onError(error: any) {
    console.error(error);
}

// function OnChangePlugin({ onChange }: any) {
//     const [editor] = useLexicalComposerContext();
//     useEffect(() => {
//         return editor.registerUpdateListener(({ editorState }) => {
//             onChange(editorState);
//         });
//     }, [editor, onChange]);
// }

function Editor() {
    const initialConfig = {
        namespace: "Editor",
        onError,
    }

    const placeholder = useMemo(() => {
        return (
            <div className="absolute top-2 left-2">
                <p>Once upon a time, ...</p>
            </div>
        )
    }, [])

    const [editorState, setEditorState] = useState<string>();
    const onChange = (editorState: EditorState) => {
        const editorStateJSON = editorState.toJSON();
        setEditorState(JSON.stringify(editorStateJSON));
    }

    return (
        <LexicalComposer initialConfig={initialConfig}>
            <RichTextPlugin
                contentEditable={
                    <ContentEditable
                        aria-placeholder="abc..."
                        placeholder={placeholder}
                        className="p-2 rounded-lg"
                    />
                }
                ErrorBoundary={LexicalErrorBoundary}
            />
            <HistoryPlugin />
            <AutoFocusPlugin />
            <OnChangePlugin onChange={onChange} />
        </LexicalComposer>
    )
}

export default Editor;