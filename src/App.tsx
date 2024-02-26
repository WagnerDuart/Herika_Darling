import {Contact} from '@/components/layout/Navibar_contact'
import {Menu} from '@/components/layout/Navibar_menu'
import { Sobre_nos } from './components/layout/sobre_nos'
import {Servicos} from '@/components/layout/servicos'
import {Footer} from '@/components/layout/footer'
import { Tela } from './components/layout/tela'
import { Profissionais } from './components/layout/profissionais'

export function App() {
  return (
    <div>
      <Contact/>
      <Menu/>
      <Tela/>
      <Sobre_nos/>
      <Servicos/>
      <Profissionais/>
      <Footer/>
    </div>
  )
}

