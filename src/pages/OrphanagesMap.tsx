import React from 'react';
import {BiHappyBeaming} from 'react-icons/bi'
import { FiPlus } from 'react-icons/fi';
import {Link} from 'react-router-dom'

import mapMarkers from '../images/mark.svg'

import '../styles/pages/orphanages-map.css'

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkers} alt="Icon marca no mapa" />

          <h2>Escolha um orfanato no map</h2>
          <p>Muitas crianças estão esperando a sua visita <BiHappyBeaming size={22} color="#000" /></p>
        </header>

        <footer>
          <strong>Getulina</strong>
          <span>São Paulo</span>
        </footer>
      </aside>

      <div></div>

    <Link to="" className="create-orphanage">
      <FiPlus size={32} color="#fff" />
    </Link>
    </div>
  );
}

export default OrphanagesMap;
