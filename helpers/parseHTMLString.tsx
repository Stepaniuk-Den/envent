export function parseHTMLString(htmlString: string) {
  const elements = htmlString.split(/(<br\s*\/?>)/g);
  return elements.map((element, index) => {
    if (element === "<br>" || element === "<br/>") return <br key={index} />;
    return element;
  });
}
