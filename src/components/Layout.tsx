import Header from './Header'
import Footer from './Footer'
import { ReactElement } from 'react'
 const Layout=({children}:{ children: React.ReactNode })=>{


    return <div className='container'>
    <Header/>
    {children}
    <Footer/>
    </div>

    
}

export default Layout