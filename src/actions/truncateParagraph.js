const truncateParagraph = (text, maxWords) => {
    const words = text.split(' ');
    if (words.length <= maxWords) return text;
    return words.slice(0, maxWords).join(' ') + '...';
  };

  export default truncateParagraph;