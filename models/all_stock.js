module.exports = function(sequelize, DataTypes) {
    const all_stock = sequelize.define("all_stock", {
      short_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      stock_symbol: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1]
      },
      stock_current_price: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1]
      },
      stock_daily_high: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1]
      },
      stock_daily_low: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1]
      },
      stock_year_high: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1]
      },
      stock_year_low: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1]
      },

    });
  
    // Post.associate = function(models) {
    //   // We're saying that a Post should belong to an Author
    //   // A Post can't be created without an Author due to the foreign key constraint
    //   Post.belongsTo(models.Author, {
    //     foreignKey: {
    //       allowNull: false
    //     }
    //   });
    // };
  
    return all_stock;
  };