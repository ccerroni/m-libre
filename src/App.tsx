import {BrowserRouter, Routes, Route} from 'react-router-dom'

import {ProductList} from './components/ProductList/ProductList'
import {ProductDetails} from './components/ProductDetails/ProductDetails'
import {NotFound} from './components/NotFound/NotFound'

function App() {
  return (
    <main className="container m-auto grid min-h-screen grid-rows-[auto,1fr,auto] px-4">
      <BrowserRouter>
        <header className="text-xl font-bold leading-[3rem]">Migrado libre</header>
        <Routes>
          <Route element={<ProductList />} path="/" />
          <Route element={<ProductDetails />} path="/product/:id" />
          <Route element={<NotFound />} path="*" />
        </Routes>
      </BrowserRouter>

      <footer className="text-center leading-[3rem] opacity-70">
        © {new Date().getFullYear()} cristian cerroni
      </footer>
    </main>
  )
}

export default App
