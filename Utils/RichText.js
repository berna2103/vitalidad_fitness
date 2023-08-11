import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

function RichText({ json }) {
  return <div>{documentToReactComponents(json)}</div>;
}

export default RichText;
