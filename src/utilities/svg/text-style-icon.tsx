export const BoldIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12H12.5C14.9853 12 17 9.98528 17 7.5C17 5.01472 14.9853 3 12.5 3H6V12ZM6 12H13.5C15.9853 12 18 14.0147 18 16.5C18 18.9853 15.9853 21 13.5 21H6V12Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
)

export const ItalicIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 3H20M4 21H14M15 3L9 21" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
)

export const UnderlineIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 21H20M18 4V11C18 14.3137 15.3137 17 12 17C8.68629 17 6 14.3137 6 11V4M4 3H8M16 3H20" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
)


const TextStyleIcon = {
    bold: BoldIcon,
    italic: ItalicIcon,
    underline: UnderlineIcon,
    
}

export default TextStyleIcon;