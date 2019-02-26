require('dotenv').config();
const knex = require('knex');

const knexInstance = knex({
  client: 'pg',
  connection: process.env.DB_URL,
  debug: true
});

// function searchFor(text) {
//   knexInstance
//     .select('*')
//     .from('shopping_list')
//     .where('name', 'ILIKE', `%${text}%`)
//     .then(result => console.log(result));
// }

// searchFor('mi');

// function showPage(page) {
//   knexInstance
//     .select('*')
//     .from('shopping_list')
//     .limit(6)
//     .offset((page - 1) * 6)
//     .then(result => console.log(result));
// }

// showPage(2);

// function getAddedAfterDate(daysAgo) {
//   knexInstance
//     .select('*')
//     .from('shopping_list')
//     .where(
//       'date_added',
//       '>',
//       knexInstance.raw('now() - \'?? days\'::INTERVAL', daysAgo)
//     )
//     .then(result => console.log(result));
// }

// getAddedAfterDate(2);

function getTotalCategoryCost() {
  knexInstance
    .sum('price AS Total Cost')
    .select('checked AS Purchased')
    .from('shopping_list')
    .groupBy('checked')
    .then(result => console.log(result));
}

getTotalCategoryCost();
