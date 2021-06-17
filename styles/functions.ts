export const centerText = (height: number) => {
  return `text-align: center;
  line-height: ${height}px`
}

export const setFlex = (type: "row" | "column" = "row") => {
  return `display: flex; flex-direction: ${type}`
}