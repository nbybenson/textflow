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
import { useEffect, useMemo } from "react";
import TextEditorToolbar from "../pages/text-editor-toolbar";

const theme = {
    text: {
        bold: "font-black",
        italic: "italic",
        underline: "underline",
        strikethrough: "text-strikethrough",
    }
}


function EditorContentLoaderPlugin({text} : {text : string}) {
    const [editor] = useLexicalComposerContext();
    useEffect(() => {
        editor.setEditorState(editor.parseEditorState(text));
    }, []);

    return <></>
}


function onError(error: Error) {
    console.error(error);
}


interface EditorProps {
    initialEditorState: string;
    onChange: (editorState: EditorState) => void;
}

function Editor(props: EditorProps) {
    const initialConfig = {
        namespace: "Editor",
        theme: theme,
        onError,
    }

    const placeholder = useMemo(() => {
        return (
            <div className="absolute top-0 left-8 text-neutral-800 opacity-50">
                {/* <p>Once upon a time, ...</p> */}
            </div>
        )
    }, [])


    return (
        <div className="relative flex-1 w-full flex flex-col">
            <LexicalComposer initialConfig={initialConfig}>
                <TextEditorToolbar />
                <RichTextPlugin
                    contentEditable={
                        <ContentEditable
                            spellCheck={true}
                            aria-placeholder="abc..."
                            placeholder={placeholder}
                            className=" rounded-t-2xl flex-1 outline-0 w-full bg-white shadow-equal-xl p-16"
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
