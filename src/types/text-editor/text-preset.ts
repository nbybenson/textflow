export interface TextPreset {
    name: string;
    fontSize: string; // in points (not px)
    fontFamily?: string;

    isBold?: boolean;
    isItalic?: boolean;
    isUnderline?: boolean;
}