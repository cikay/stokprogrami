import { useState, useEffect } from 'react'

const PREFIX = 'stokprogrami-'

export default function useLocalStorage(key: string, initialValue?: unknown) {
  const prefixKey = PREFIX + key
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixKey)

    console.log('jsonValue', jsonValue)
    if (jsonValue === 'undefined' || jsonValue == null) {
      return initialValue
    }
    else if (typeof initialValue === 'function') {
      return initialValue()
    }
    return JSON.parse(jsonValue)
  })
  console.log("value", value)
  useEffect(() => {
    console.log('value', value)
    localStorage.setItem(prefixKey, JSON.stringify(value))
  }, [value, setValue])

  return [value, setValue]
}
