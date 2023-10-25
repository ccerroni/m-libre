import {useEffect, useState} from 'react'

import {ML_API_ITEM} from '../config'
import {Product} from '../types/ml-api-types'

export const useFetchProductItem = (id: string | undefined) => {
  const [product, setProduct] = useState<Product | null>(null)

  useEffect(() => {
    try {
      if (id) {
        fetch(`${ML_API_ITEM}/${id}`).then((response) => response.json().then(setProduct))
      }
    } catch (error) {
      console.error(error)
    }
  }, [id])

  return {
    product,
  }
}
