export const buscarHistorico = (idUsuario, reservas, produtos) => {
   let historico = []
   reservas = reservas.filter(reserva => reserva.idUsuario === idUsuario)
   
   reservas.forEach(reserva => {
      produtos.forEach(produto => {
         if(produto.id === reserva.idProduto){
            historico.push({
               produto,
               reserva
            })
         }
      })
   })
   return historico
}