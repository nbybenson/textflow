"use client";

import { CaretDown } from "@/utilities/svg/indicators";
import { TextPresets } from "@/utilities/text-editor/text-presets";
import { $getSelection, $isRangeSelection, $isTextNode, FORMAT_ELEMENT_COMMAND, FORMAT_TEXT_COMMAND, LexicalEditor } from "lexical";
import { useState } from "react";
import { TextPreset } from "../../../types/text-editor/text-preset";
import { SET_FONT_SIZE_COMMAND } from "@/lexical/commands/font-size-command";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useSwitchTextStyle } from "@/lexical/hooks/use-remove-text-style";

interface ToolbarTextPresetProps {

}

function ToolbarTextPreset(props: ToolbarTextPresetProps) {
    const [editor] = useLexicalComposerContext();
    const [textPreset, setTextPreset] = useState("Heading");
    const dropdownItemStyle = "btn btn-neutral btn-md font-normal flex items-start";

    const switchTextStyle = useSwitchTextStyle();

    const handleTextPresetChange = (preset: TextPreset) => {
        setTextPreset(preset.name);
        editor.dispatchCommand(SET_FONT_SIZE_COMMAND, preset.fontSize);
        
        switchTextStyle('bold', preset.isBold);
        switchTextStyle('italic', preset.isItalic);
        switchTextStyle('underline', preset.isUnderline);
    }

    return (
        <div className="dropdown">
            <div tabIndex={0} role="button" className="rounded-full cursor-pointer flex items-center justify-center p-2 m-1 btn btn-neutral bg-gradient-to-br from-neutral-white to-neutral-50 border-neutral-200 border-1 shadow-md inset-shadow-sm text-md font-normal w-32">
                <div className="flex-1" />
                {textPreset}
                <div className="flex-1" />
                <CaretDown />
            </div>
            <ul tabIndex={0} className="dropdown-content menu mt-3.5 z-10 bg-white rounded-xl shadow-sm backdrop-blur-sm flex gap-1">
                {TextPresets.map((preset, index) => (
                    <li key={index} className={dropdownItemStyle} onClick={() => handleTextPresetChange(preset)}>
                        {preset.name}
                    </li>
                ))}
            </ul>
        </div>
        
    )
}

export default ToolbarTextPreset;