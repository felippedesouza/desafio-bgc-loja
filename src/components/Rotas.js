import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ListagemProdutos from './produto/ListagemProdutos';
import FormularioProduto from './produto/FormularioProduto';
import AtualizacaoProduto from './produto/AtualizacaoProduto';
import Produto from './produto/Produto';
import Reserva from './reserva/Reserva';

const Rotas = props => (
   <Switch>
      <Route exact path="/">
         <ListagemProdutos />
      </Route>
      <Route path="/produto/form">
         <FormularioProduto />
      </Route>
      <Route path="/produto/:id">
         <Produto />
      </Route>
      <Route path="/edit/produto/:id">
         <AtualizacaoProduto />
      </Route>
      <Route path="/reserva/:id">
         <Reserva />
      </Route>
   </Switch>
)

export default Rotas;