export function getUuid () {
  return Number(Math.random().toString().substr(2, 10) + Date.now()).toString(36)
}

export function getMenuItemInMenuListByProperty (menuList, key, value) {
  for (let i = 0; i < menuList.length; i++) {
    const item = menuList[i]
    if (item[key] && item[key] === value) {
      return item
    }
    if (item.childList) {
      for (let j = 0; j < item.childList.length; j++) {
        const iitem = item.childList[j]
        if (iitem[key] && iitem[key] === value) {
          return iitem
        }
      }
    }
  }
}