import TextEditor from "@/components/pages/text-editor";

interface PagesParams {
    params: Promise<{pageId: number}>;
}

async function PagesPage({params} : PagesParams) {
    const { pageId } = await params;

    return (<>
        <TextEditor id={pageId} />
    </>)
}

export default PagesPage;