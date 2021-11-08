const headerHeight = 50
const tabsHeight = 52
const paginationHeight = 100

//总高度
export function getLayoutHeight (searchH = 0):number {
  return document.body.offsetHeight - headerHeight - tabsHeight - searchH
}
//table高度
export function getTableHeight (searchH = 0):number {
  return document.body.offsetHeight - headerHeight - tabsHeight - searchH - paginationHeight
}