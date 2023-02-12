import { HeaderContainer } from './styles';
import { Timer, Scroll } from 'phosphor-react';
import logoIgnite from '../../assets/logo.svg';
import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <HeaderContainer>
      <img
        src={logoIgnite}
        alt="Dois triangulos inclinados um por cima do outro na cor verde com duas tonalidades"
      />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
