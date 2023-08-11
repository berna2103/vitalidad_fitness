import React from "react";

export default function ContentfulEmbeddedTable({ node }) {
  const rows = node.content.map((row) => (
    <tr>
      {row.content.map((cell) => (
        <td>{cell.content[0].value}</td>
      ))}
    </tr>
  ));
  return (
    <table>
      <tbody>{rows}</tbody>
    </table>
  );
}
