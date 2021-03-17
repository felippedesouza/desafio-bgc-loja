import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { fazer_logout } from '../redux/actions/loginActions';

const BarraNavegacao = (props) => {
   const useStyles = makeStyles((theme) => ({
      root: {
         '& > * + *': {
            marginLeft: theme.spacing(2),
         },
      },
   }));
   const classes = useStyles();
   let history = useHistory()

   const handleLogout = event => {
      event.preventDefault()
      props.fazer_logout()
      history.push('/')
   }

   const login = props.login

   return (
      <Typography className={classes.root}>
         <Link to="/">
            Listar produtos
         </Link>

         {login.tipoDeUsuario === 'ADMIN' &&
            <>
               <Link to="/produto/formulario">
                  Cadastrar produto
               </Link>
               <Link to="/usuarios">
                  Listar usuários
               </Link>
               <Link to="/usuario/formulario">
                  Cadastrar usuário
               </Link>
            </>
         }

         <Link to="/reserva">
            Historico de reservas
         </Link>
         
         {login.logado === false 
            ? <Link to="/login">Login</Link>
            : 
               <>
                  <Link to={`/usuario/${login.id}`}>Olá, {login.nome}</Link>
                  <button onClick={handleLogout}>Logout</button>
               </>
         }
      </Typography>
   );
}

const mapStateToProps = (state) => ({
   login: state.login
})

const mapDispatchToProps = (dispatch) => ({
   fazer_logout: () => dispatch(fazer_logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(BarraNavegacao);