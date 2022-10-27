export function splitContainerChildStyle(style) {
  const innerStyle = { ...StyleSheet.flatten(style) };
  const outerStyle = {};

  if (style) {
    outerStyle.margin = innerStyle.margin;
    outerStyle.marginHorizontal = innerStyle.marginHorizontal;
    outerStyle.marginVertical = innerStyle.marginVertical;
    outerStyle.marginBottom = innerStyle.marginBottom;
    outerStyle.marginTop = innerStyle.marginTop;
    outerStyle.marginLeft = innerStyle.marginLeft;
    outerStyle.marginRight = innerStyle.marginRight;
    outerStyle.borderRadius = innerStyle.borderRadius;
    outerStyle.width = innerStyle.width;
    outerStyle.height = innerStyle.height;
    outerStyle.position = innerStyle.position;
    outerStyle.top = innerStyle.top;
    outerStyle.left = innerStyle.left;
    outerStyle.right = innerStyle.right;
    outerStyle.bottom = innerStyle.bottom;
    outerStyle.zIndex = innerStyle.zIndex;
    outerStyle.flex = innerStyle.flex;

    delete innerStyle.margin;
    delete innerStyle.marginHorizontal;
    delete innerStyle.marginVertical;
    delete innerStyle.marginTop;
    delete innerStyle.marginBottom;
    delete innerStyle.marginLeft;
    delete innerStyle.marginRight;
    delete innerStyle.top;
    delete innerStyle.left;
    delete innerStyle.right;
    delete innerStyle.bottom;
    delete innerStyle.zIndex;
    delete innerStyle.flex;
    delete innerStyle.placeholder;
  }
  return { innerStyle, outerStyle };
}
