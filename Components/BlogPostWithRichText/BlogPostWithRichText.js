import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      // Render the embedded asset here
      return (
        <div className="text-center">
          <img
            className="mt-2 mb-2 img-fluid"
            src={node.data.target.fields.file.url}
            alt=""
          />
        </div>
      );
    },

    [BLOCKS.TABLE]: (node) => {
      const rows = node.content.map((row, index) => (

          <tr key={index} >
            {!node ? (
              <></>
            ) : (
              row.content.map((cell, index) => (
                <td key={index} className='p-2'>
                  {cell.content[0].content[0].value}
                </td>
              ))
            )}
          </tr>

      ));

      return (
        <div className="table-responsive shadow-sm mb-4 mt-4">
          <table className='table-bordered'>
            <tbody>{rows}</tbody>
          </table>
        </div>
      );
    },
  },
  renderInline: {
    [INLINES.HYPERLINK]: (node) => {
      if (node.data.uri.startsWith("/assets/")) {
        // Handle linked asset (image) here
        const assetUrl = node.data.uri.replace("/assets/", "");
        return <img src={assetUrl} alt="" />;
      } else {
        // Regular hyperlink
        return <a href={node.data.uri}>{node.content[0].value}</a>;
      }
    },
  },
};

const BlogPostWithRichText = ({ content }) => {
  const children = documentToReactComponents(content, options);
  return <div>{children}</div>;
};

export default BlogPostWithRichText;
