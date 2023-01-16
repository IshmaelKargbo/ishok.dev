
import { EditorState } from 'draft-js';
import Editor, { createEditorStateWithText } from '@draft-js-plugins/editor'
import { useEffect, useMemo, useRef, useState } from "react";
import createHashtagPlugin from '@draft-js-plugins/hashtag';
import { convertToHTML } from 'draft-convert';
import createInlineToolbarPlugin from '@draft-js-plugins/inline-toolbar';
import '@draft-js-plugins/hashtag/lib/plugin.css';

import "@draft-js-plugins/inline-toolbar/lib/plugin.css";
import {
    ItalicButton,
    BoldButton,
    UnderlineButton,
    CodeButton,
    UnorderedListButton,
    OrderedListButton,
    BlockquoteButton,
    CodeBlockButton,
} from '@draft-js-plugins/buttons';

interface props {
    placeholder?: string
}

const DarftEditor = ({ placeholder }: props) => {
    const [plugins, InlineToolbar] = useMemo(() => {
        const hashtagPlugin = createHashtagPlugin();
        const inlineToolbarPlugin = createInlineToolbarPlugin();
        return [[inlineToolbarPlugin, hashtagPlugin], inlineToolbarPlugin.InlineToolbar];
    }, []);

    const [editorState, setEditorState] = useState(() =>
        createEditorStateWithText('')
    );

    useEffect(() => {
        setEditorState(createEditorStateWithText(''));
    }, []);

    const editor = useRef<Editor | null>(null);

    const onChange = (value: EditorState): void => {
        let html = convertToHTML(value.getCurrentContent());
        console.log(html);

        setEditorState(value);
    };

    const focus = (): void => {
        editor.current?.focus();
    };

    return <div className="border-2 border-alt p-3 rounded-md">
            <div className='prose prose-slate w-full'  onClick={focus}>
        <Editor placeholder={placeholder} plugins={plugins} editorState={editorState} onChange={onChange} />
        <InlineToolbar>
            {
                externalProps => (
                    <>
                        <ItalicButton {...externalProps} />
                        <BoldButton {...externalProps} />
                        <UnderlineButton {...externalProps} />
                        <CodeButton {...externalProps} />
                        <UnorderedListButton {...externalProps} />
                        <OrderedListButton {...externalProps} />
                        <CodeBlockButton {...externalProps} />
                        <BlockquoteButton {...externalProps} />
                    </>
                )
            }

        </InlineToolbar>
    </div>
    </div>;
};

export default DarftEditor;