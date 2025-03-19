"use client";

import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";

const theme = {}

function onError(error: any) {
    console.error(error);
}

function Editor() {
    const initialConfig = {
        namespace: "Editor",
        theme,
        onError,
    }

    // const placeholder = useMemo(() => {
    //     return (
    //         <div>
    //             <p>Type something...</p>
    //         </div>
    //     )
    // })

    return (
        <LexicalComposer initialConfig={initialConfig}>
            <RichTextPlugin
                contentEditable={
                    <ContentEditable
                        aria-placeholder="Type something..."
                        placeholder={<div>Type something...</div>}
                    />
                }
                ErrorBoundary={LexicalErrorBoundary}
            />
            <HistoryPlugin />
            <AutoFocusPlugin />
        </LexicalComposer>
    )
}

export default Editor;