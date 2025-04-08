"use client";
import { CaretDown } from "@/utilities/svg/indicators";
import { $getSelection, $isRangeSelection, $isTextNode } from "lexical";
import { useEffect, useState } from "react";
import { TextPreset } from "../../../types/text-editor/text-preset";
import { SET_FONT_SIZE_COMMAND } from "@/lexical/commands/font-size-command";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useSwitchTextStyle } from "@/lexical/hooks/use-remove-text-style";
import { TextPresets } from "@/utilities/constants/text-editor/text-presets";
import { useDebouncedCallback } from "use-debounce";

function ToolbarTextPreset() {
    const [editor] = useLexicalComposerContext();
    const [selectedPreset, setSelectedPreset] = useState<TextPreset>(TextPresets[0]);

    // detects and automatically changes textPreset based on cursor location
    useEffect(() => {
        return editor.registerUpdateListener(({ editorState }) => {
            editorState.read(() => {
                const selection = $getSelection();
                if(!$isRangeSelection(selection)) return;

                const node = selection.getNodes().find($isTextNode);
                if(!node) return;

                const style = node.getStyle();
                const fontSize = style?.match(/font-size:\s*(\d+px)/)?.[1] || '16px';

                const isBold = node.hasFormat('bold');
                const isItalic = node.hasFormat('italic');
                const isUnderline = node.hasFormat('underline');

                const matchedPreset = TextPresets.find(preset => 
                    preset.fontSize === fontSize &&
                    preset.isBold === isBold &&
                    preset.isItalic === isItalic &&
                    preset.isUnderline === isUnderline
                )

                if(matchedPreset && matchedPreset.name !== selectedPreset.name) 
                    setSelectedPreset(matchedPreset);
            })
        }
    )}, [editor, selectedPreset]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            handleTextPresetChange(selectedPreset);
        }, 0); // or 100ms if needed
    
        return () => clearTimeout(timeout);
    }, []);

    const switchTextStyle = useSwitchTextStyle();

    const handleTextPresetChange = (preset: TextPreset) => {
        editor.dispatchCommand(SET_FONT_SIZE_COMMAND, preset.fontSize);
        
        switchTextStyle('bold', preset.isBold);
        switchTextStyle('italic', preset.isItalic);
        switchTextStyle('underline', preset.isUnderline);
        console.log("preset", preset);
        setSelectedPreset(preset);
    }

    const dropdownItemStyle = "btn btn-neutral btn-md font-normal flex items-start";
    const selectedButtonStyle = "bg-gradient-to-br from-neutral-100 to-neutral-100 border-2 border-neutral-100 shadow-md inset-shadow-md";
    return (
        <div className="dropdown">
            <div tabIndex={0} role="button" className="rounded-full cursor-pointer flex items-center justify-center p-2 m-1 btn btn-neutral bg-gradient-to-br from-neutral-white to-neutral-50 border-neutral-200 border-1 shadow-md inset-shadow-sm text-md font-normal w-32">
                <div className="flex-1" />
                {selectedPreset.name}
                <div className="flex-1" />
                <CaretDown />
            </div>
            <ul tabIndex={0} className="dropdown-content menu mt-3.5 z-10 bg-white rounded-xl shadow-sm backdrop-blur-sm flex gap-2">
                {TextPresets.map((preset, index) => (
                    <li key={index} className={`${dropdownItemStyle} ${(preset.name == selectedPreset.name) ? selectedButtonStyle : ""}`} onClick={() => handleTextPresetChange(preset)}>
                        {preset.name}
                    </li>
                ))}
            </ul>
        </div>
        
    )
}

export default ToolbarTextPreset;