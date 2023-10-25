import {NavLink} from 'react-router-dom'

import {Product} from '../../../types/ml-api-types'
import './ProductListItem.css'

interface ProductListItemProps {
  product: Product
}

export const ProductListItem: React.FC<ProductListItemProps> = ({product}) => {
  return (
    <article className="product-item-container">
      <img alt={product.title} className="product-image" src={product.thumbnail} />
      <p>{product.title}</p>
      <div className="product-info">
        <p>Condition: {product.condition}</p>
        <p>{product.price.toLocaleString('es-AR', {style: 'currency', currency: 'ARS'})}</p>
      </div>
      <div className="product-actions">
        <NavLink to={`/product/${product.id}`}>VIEW</NavLink>
      </div>
    </article>
  )
}
