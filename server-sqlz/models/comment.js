'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Comment.belongsTo(models.User); // Comment linked to one user
      models.Comment.belongsTo(models.Post); // Comment linked to one post
    }
  }
  Comment.init({
    userId: DataTypes.INTEGER,
    postId: DataTypes.INTEGER,
    content: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};