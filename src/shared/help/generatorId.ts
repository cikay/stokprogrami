function* generateId() {
  let id = 1

  while (true) {
    console.log(id)
    yield id
    id++
  }
  
}
export default generateId()