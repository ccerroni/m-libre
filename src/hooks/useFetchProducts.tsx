import {useEffect, useState} from 'react'

import {ML_API} from '../config'
import {Product} from '../types/ml-api-types'

export const useFetchProducts = () => {
  const [products, setProducts] = useState<Product[] | null>(null)

  useEffect(() => {
    try {
      fetch(ML_API).then((response) =>
        response.json().then((result) => setProducts(result.results)),
      )
    } catch (error) {
      console.error(error)
    }
  }, [])

  return {
    products,
  }
}
