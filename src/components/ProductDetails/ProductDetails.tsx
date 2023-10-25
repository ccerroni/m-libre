import {useParams} from 'react-router-dom'

import {useFetchProductItem} from '../../hooks/useFetchProductItem'
// import {useQueryParams} from '../../hooks/useQueryParams'

export const ProductDetails = () => {
  const {id} = useParams()
  // const params = useQueryParams()

  const {product} = useFetchProductItem(id)

  return (
    <>
      Product details
      {product ? (
        <article>
          <h1>{product.title}</h1>
          <div className="product-info">
            <p>Condition: {product.condition}</p>
            <p>{product.price.toLocaleString('es-AR', {style: 'currency', currency: 'ARS'})}</p>
          </div>
          <div>
            <img alt={product.title} className="product-image" src={product.thumbnail} />
          </div>
          <div>
            <p>Quantity Sold: {product.sold_quantity}</p>
            <p>Quantity Available: {product.available_quantity}</p>
            <a href={product.permalink}>View in ML</a>
          </div>
          {/* 
          TODO: // REMOVE THIS - testing query params
          {JSON.stringify(params.get('test1'))}
          {JSON.stringify(params.get('test2'))} */}
        </article>
      ) : (
        <div>Loading</div>
      )}
    </>
  )
}
