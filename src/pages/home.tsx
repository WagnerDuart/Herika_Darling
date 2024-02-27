
import { Contact } from '@/components/layout/Navibar_contact';
import { Menu } from '@/components/layout/Navibar_menu';
import { Footer } from '@/components/layout/footer';
import { Profissionais } from '@/components/layout/profissionais';
import { Servicos } from '@/components/layout/servicos';
import { Sobre_nos } from '@/components/layout/sobre_nos';
import { Tela } from '@/components/layout/tela';
import React from 'react';

export const HomePage = () => {
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
  );
}