import React, { useState } from 'react';
import Nav from '../Nav';

function Header () {

  const [pages] = useState([
    { name: 'About Me', id: 'aboutme' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Contact', id: 'contact' },
    { name: 'Resume', id: 'resume' }
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <header>
      <div id="header">
      <h1 class="header-name">Logan Page</h1>
      <Nav
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      ></Nav>
      </div>
    </header>
  );
}

export default Header;