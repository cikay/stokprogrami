import namor from 'namor'
import gen from './generatorId'
const range = (len: number) => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

const newProduct = () => {
  return {
    id: Number(gen.next().value),
    name: namor.generate({ words: 1, numbers: 0 }),
    description: namor.generate({ words: 1, numbers: 0 }),
    storage: namor.generate({ words: 1, numbers: 0 }),
    category: namor.generate({ words: 1, numbers: 0 }),
  }
}
const fillObject = <T extends {}>(obj: T) => {
  const createdObj = Object.keys(obj).reduce(
    (acc, key) => ({
      ...acc,
      [key]:
        key === 'id'
          ? Number(gen.next().value)
          : namor.generate({ words: 1, numbers: 0 }),
    }),
    {} as T
  )

  return createdObj
}

// const obj = fillObject({ id: '', lastname: '', firstname: '' })
// console.log(obj)

export default function makeData<T>(len: number, obj: T) {
  return range(len).map((d) => fillObject(obj))
}

// function createObj(keys: string[]) {
//   const obj = { id: Number(gen.next().value) }
//   for (let key of keys) {
//     obj[key] = namor.generate({ words: 1, numbers: 0 })
//   }
//   return obj
// }

// export function makeData<T extends Record<string, unknown>>() {}
