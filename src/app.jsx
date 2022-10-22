import RoutesApp from './routesApp'

import { Sidebar } from './components/sidebar'
import { NavMain, Footer } from './components'



export default function App() {
  return (
    <>
      <NavMain />

      <div className="container">
        <div className="row">

          <div className="col-12 col-md-9 ps-5">

            <RoutesApp />

          </div>

          <div className="col-12 col-md-3">

            <Sidebar />

          </div>

        </div>
      </div>

      <Footer />
    </>
  )
}


