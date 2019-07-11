import React from 'react';
import Markdown from 'react-native-markdown-renderer';

export default ({ data }: { data: string }) => {
    return <Markdown>{data}</Markdown>;
};
