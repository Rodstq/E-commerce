const db = require('./db');

const Pedido = db.sequelize.define('pedidos', {
  numero: {
    type: db.Sequelize.STRING,
    primaryKey: true,
  },
});

const Produto = db.sequelize.define('produtos', {
  id: {
    type: db.Sequelize.STRING,
    primaryKey: true,
  },
  imgC: {
    type: db.Sequelize.STRING,
  },
  imgSrc: {
    type: db.Sequelize.STRING,
  },
  descricao: {
    type: db.Sequelize.TEXT,
  },
  preco: {
    type: db.Sequelize.STRING,
  },
  count: {
    type: db.Sequelize.STRING,
  },
});

// Define the association with a different alias for the foreign key
Pedido.hasMany(Produto, { foreignKey: 'pedidoId', as: 'produtos' });
Produto.belongsTo(Pedido, { foreignKey: 'pedidoId', as: 'pedido' });

// Uncomment the line below if you want to force sync the tables
 //db.sequelize.sync({ force: true });

module.exports = { Pedido, Produto };