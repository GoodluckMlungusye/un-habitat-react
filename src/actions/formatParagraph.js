import { htmlToText } from 'html-to-text';

const formatParagraph = (html) => {
  const strippedText = htmlToText(html);
  return strippedText;
};

export default formatParagraph;
