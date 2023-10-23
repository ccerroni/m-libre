import {useFetchProducts} from '../../hooks/useFetchProducts'
import {Product} from '../../types/ml-api-types'

import './ProductList.css'
import {ProductListItem} from './ProductListItem/ProductListItem'

export const ProductList = () => {
  const {products} = useFetchProducts()

  return (
    <section className="root">
      {products ? (
        products.map((product: Product) => <ProductListItem product={product} />)
      ) : (
        <>Loading</>
      )}
    </section>
  )
}
