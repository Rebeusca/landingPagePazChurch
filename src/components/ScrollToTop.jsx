import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Este componente reseta a posição de scroll para o topo
// toda vez que a navegação ocorrer (mudança de rota)
export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}
