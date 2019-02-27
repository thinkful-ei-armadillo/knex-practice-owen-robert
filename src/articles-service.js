const ArticlesService = {
  getAllArticles(database) {
    return database.select('*').from('blogful_articles')
  },

  insertArticle(database, newArticle) {
    return database
      .insert(newArticle)
      .into('blogful_articles')
      .returning('*')
      .then(rows => {
        return rows[0]
      })
  },

  getById(database, id) {
    return database
      .from('blogful_articles')
      .select('*')
      .where('id', id).first()
  },

  deleteArticle(database, id) {
    return database('blogful_articles')
      .where({ id })
      .delete()
  },

  updateArticle(database, id, newArticleFields) {
    return database
      .from('blogful_articles')
      .where({ id })
      .update(newArticleFields)
  }
}
module.exports = ArticlesService