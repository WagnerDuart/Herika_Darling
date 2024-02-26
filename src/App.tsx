import {Contact} from '@/components/layout/Navibar_contact'
import {Menu} from '@/components/layout/Navibar_menu'
import {Servicos} from '@/components/layout/servicos'
import {Footer} from '@/components/layout/footer'
import { Tela } from './components/layout/tela'
export function App() {
  return (
    <div>
      <Contact/>
      <Menu/>
      <Tela/>
      <Servicos/>
      <Footer/>
      
    </div>
  )
}

