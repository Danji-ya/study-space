type TAttribute = Record<string, any>;

function jsx(name: string, attributes: TAttribute, ...children: any[]) {
  const node =
    name === "fragment"
      ? document.createDocumentFragment()
      : document.createElement(name);

  if (!(node instanceof DocumentFragment)) {
    Object.entries(attributes || {}).forEach(([key, value]) => {
      node.setAttribute(key, value);
    });
  }

  // 자식 노드들 처리
  (children || []).forEach((childNode) => addChild(node, childNode));

  return node;
}

function addChild(parent: DocumentFragment | HTMLElement, childNode: any): any {
  // 아무것도 없을 때
  if (typeof childNode === "undefined" || childNode === null) return;

  // false 일경우 아무것도 안보이게
  if (typeof childNode === "boolean") return;

  // 배열 형식일 때
  if (Array.isArray(childNode))
    return childNode.forEach((c) => addChild(parent, c));

  // object 형식일 때 이미 하위에서 node로 만들어진 것
  if (typeof childNode === "object") {
    return parent.appendChild(childNode);
  }

  // string, number
  parent.appendChild(document.createTextNode(childNode));
}

export default jsx;
