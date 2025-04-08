import { TextPreset } from "../../types/text-editor/text-preset";

export const title: TextPreset = {
    name: "Title",
    fontSize: "32px",
    isBold: true,
    isItalic: false,
    isUnderline: false,
}

export const heading1: TextPreset = {
    name: "Heading 1",
    fontSize: "28px",
    isBold: true,
    isItalic: false,
    isUnderline: false,
}

export const heading2: TextPreset = {
    name: "Heading 2",
    fontSize: "24px",
    isBold: true,
    isItalic: false,
    isUnderline: false,
}

export const heading3: TextPreset = {
    name: "Heading 3",
    fontSize: "20px",
    isBold: true,
    isItalic: false,
    isUnderline: false,
}

export const body: TextPreset = {
    name: "Body",
    fontSize: "16px",
    isBold: false,
    isItalic: false,
    isUnderline: false,
}

export const TextPresets: TextPreset[] = [
    title,
    heading1,
    heading2,
    heading3,
    body,
]