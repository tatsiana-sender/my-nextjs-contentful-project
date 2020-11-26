import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

const BlogBody = ({ content }) => {

  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { url, fileName } = node.data.target.fields.file;
        return (
          <img
            src={url}
            alt={fileName}
            style={{ height: "auto", width: "100%", margin: "1em 0" }}
          />
        );
      },
      [INLINES.HYPERLINK]: (node) => {
        const { uri } = node.data;
        const { value } = node.content[0];
        return (
          <a target="_blank" rel="noreferrer noopener" href={uri}>
            {value}
          </a>
        );
      },
    },
  };
  return (
    <div>
      {documentToReactComponents(content, options)}
    </div>
  );
};

export default BlogBody;