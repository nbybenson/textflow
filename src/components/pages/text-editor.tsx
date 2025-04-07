"use client";

import { useEffect, useState } from "react";
import Editor from "../lexical/editor";
import { EditorState } from "lexical";
import { getPageById } from "@/db/queries/select";
import { createPage } from "@/db/queries/insert";
import { updatePageContent } from "@/db/queries/update";
import { STATE_UPDATE_DELAY } from "@/utilities/constants/timeout";
import { useDebouncedCallback } from "use-debounce";
import TextActionButtons from "./text-editor-toolbar";
import { EMPTY_EDITOR_STATE } from "@/utilities/constants/editor-state";

interface TextEditorProps {
    id: number;
}

function TextEditor(props: TextEditorProps) {
    const [editorState, setEditorState] = useState<string>("");

    const saveState = useDebouncedCallback((editorStateJSONString: string) => {
        setEditorState(editorStateJSONString);
    }, STATE_UPDATE_DELAY);

    const onChange = (editorState: EditorState) : void => {
        const editorStateJSONString = JSON.stringify(editorState.toJSON());
        saveState(editorStateJSONString);
    }

    const fetchPage = async () => {
        const existing = await getPageById(props.id);
        if (existing?.content) {
            console.log(existing.content)
            setEditorState(existing.content);
        }
        else {
            const data = {
                id: props.id,
                name: "Untitled",
                content: EMPTY_EDITOR_STATE,
            }
            await createPage(data);
        }
    };

    useEffect(() => {
        fetchPage();
    }, []);

    useEffect(() => {
        const postUpdate = async () => {
            const data = {
                content: editorState,
            }
            await updatePageContent(props.id, data);
        }
            if(editorState !== "") {
                postUpdate();
            }
    }, [editorState])

    if(editorState !== "")return (<>
        <div className="flex flex-col items-center justify-center bg-linear-to-br from-neutral-50 to-neutral-100">
            <div className="max-w-[900px] w-full md:mx-3.5 md:w-3/4 xl:w-2/3  min-h-dvh flex">
                <Editor 
                    initialEditorState={editorState}
                    onChange={onChange}
                />
            </div>  

        </div>

    </>)
};

export default TextEditor;