import React, { useEffect, useState } from 'react'
import './Navbar.css';

const Navbar = () => {

    const [black, setBlack] = useState('transparent');

    const listenToScroll = () => {
        if(window.scrollY > 100) {
            setBlack('black');
        } else {
            setBlack('transparent');
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', listenToScroll);
    },[]);
    
    return (
        <div className={`navbar ${black}`}>
            <img className='netflix-logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/340px-Netflix_2015_logo.svg.png" alt="netflix logo"/>
            
            
            <img className='avatar-logo' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAB8CAMAAACcwCSMAAAAY1BMVEUNfoD///8Aenwvg4YuiIrw9fUAd3mJs7Tb6ury+fn2+/tFkpQdg4QAdHbu9vYAcXPl8fGVv8DQ4+NUlpiAsLHF3N07jY+x0NFzqqyny8sAa21joqO71teexMRrpqimxsdRnJ1+klQSAAAEOUlEQVRoge2b2ZajIBCGocYhRsF9jUt8/6ccTKe7o4JCQmAu8l/06dMDfIJFUVU4CH300X8nWOmwiUl4c1qoEwy+aFJQY3jo8UoDWzcplw0yU2z05+8ajkeybEKDVQPP1NQF8KBaDk7PFuHYXzaxC8f9YuEtw3H6aHS24Qujsw4PHgDW4Tj5XXj78AejcwD/NToXcNwQh/AoBHdwnBCHcJzFDuG4JQ7huCAO4cEE7uA4oeAOjsvYIRxfiUM4HiNb8CDZwANrAeR5Ws9zq/fNvJocwsP45BAOrHYIR5C5hFdbk7cGR6RzCEekcAhHu0b3bjhiO0b3djh4cqN7O5wb3dqlW4QjJjU6C3BEBodwRCRGZwUOVHy8WoEjmIRGZwcu8XSW4IiJjM4WfFN+NApHK0cWect/BrrxdIGx4itMmf+grFkPDFXpL7Vp8gKdHBS01w3M1rw/+uijj0zpy1uZGoyLEMLHVGsensaponOXuzT85VfTh660Cscibdu6zPyMHPf/zsGCxM/Ksm7TomnykCK4XOI4ZvOQwo7xhbPCvGiKdKhLDktWIU4Uq8O3OvOnqa9DKrrNPMyZMU4U4PnRIHgQrR/xj7r56ztQAfwg8eY6ieBwVKtQOuOBprv4cy0OkaATRFM/KkdybG+zCBkzWRIWpZRJZgAsbMVBvD94sk6icWLUlOuKJjeZOmd7zw+MTFd/+dznMvV2OwkHIrQbst8X4Jdpjo59BXcn1TjMGy3y/bIucirbmocDERpOTVEUzVQh5UFmLwOIevP7e81V3t3jfxgRwpNLaoDMIG9nY7LO5+Suvu0rP82Jxj4yQEbd445O2g7Z4c9bsN64wKTu6LvXHwiaeonzTfp38oGx+3uW6VwWJH7DA0AMYy+tuj0oKyqzfGBeo0T+Et8AYMgAAbyxP77RWSjwh+l1A+C2rU3+nn8bKhxEcjIjau9ZJr4B2TPrDxDTZi80UVXf0FjrWAJgVSENZnQVlEV1HDv+sKsm24YxL/Ez1blDa5Z8o6sGUsfhv74SVTgxYWcr+apwtvne8kEBjwrTYuzyPPe8iv/suuI01H3p716yKySJd7js9gAHpxCxOVvkxku9WXPz+S88gURe2EmzjV552aUXJ1E48Xy353FxkkQ38V/mZLYdUh7g0os0X2uVDW6Urt7+1o/kriFVhh/nqdoqlPd56BJemXKsv8qVvbv33Bm6p0oZvr04eFlUlb251jAg9Rz5Dc79og7f869PSaEQ9QNvTcMzdTi5mob3GvDUNLzWCKPkzv1JXTWs/fi7K00Jy4YSODUN17lgBNNwYalYImIarn6ucLjhk2V9570PPyxf62l9570PN+zcIw228chdOWW4wY8K97pwde9q3r+WOnDY/c5OXxqu3TxcOWq/wfe/b9SWhmufg2ezcL1vRwyfLDqunWeeRtnz/zsQ6h8GQUXRMvsuUAAAAABJRU5ErkJggg==" alt="AVATAR LOGO"/>
        </div>
    )
}

export default Navbar
