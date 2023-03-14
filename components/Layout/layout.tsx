import {ReactNode} from 'react';
import Header from '../Header';


interface LayoutProps {
  children: ReactNode
}

const Layout = ({children}: LayoutProps) => {
  return (
    <div className='font-roboto_Condensed'>
     <Header />
     <div>{children}</div>
    </div>
  )
}

export default Layout;