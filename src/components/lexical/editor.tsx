"use client";

import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { EditorState } from "lexical";
import { useEffect, useMemo, useState } from "react";
import TextActionButtons from "../pages/text-action-buttons";

const theme = {
    
}


function EditorContentLoaderPlugin({text} : {text : string}) {
    const [editor] = useLexicalComposerContext();
    useEffect(() => {
        editor.setEditorState(editor.parseEditorState(text));
    }, []);

    return <></>
}


function onError(error: any) {
    console.error(error);
}


interface EditorProps {
    initialEditorState: string;
    onChange: (editorState: EditorState) => void;
}

function Editor(props: EditorProps) {
    const initialConfig = {
        namespace: "Editor",
        onError,
    }

    const placeholder = useMemo(() => {
        return (
            <div className="absolute top-0 left-8 text-neutral-800 opacity-50">
                <p>Once upon a time, ...</p>
            </div>
        )
    }, [])


    return (
        <div className="relative">
            <LexicalComposer initialConfig={initialConfig}>
                <RichTextPlugin
                    contentEditable={
                        <ContentEditable
                            aria-placeholder="abc..."
                            placeholder={placeholder}
                            className="px-8 rounded-sm h-full outline-0"
                        />
                    }
                    ErrorBoundary={LexicalErrorBoundary}
                />
                <EditorContentLoaderPlugin text={props.initialEditorState} />
                <AutoFocusPlugin />
                <HistoryPlugin />
                <OnChangePlugin onChange={props.onChange} />
            </LexicalComposer>
        </div>
    )
}

export default Editor;

function $createParapgraphNode() {
    throw new Error("Function not implemented.");
}
