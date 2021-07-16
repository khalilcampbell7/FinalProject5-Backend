
exports.seed = function(knex) {
  return knex('blogs').del()
    .then(function () {
      return knex('blogs').insert([
        {title: 'Fishin Alaska', author:'Joe Ditto', 
        image_url: 'https://images.unsplash.com/photo-1543955099-d5bb41e1f9e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      location: 'Alaska', content: 'I went on this fishing trip and it was awesome'},
      {title: 'Fishing in Colorado', author:'Yo Moma', 
      image_url: 'https://images.unsplash.com/photo-1474649111648-d95d30755186?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
    location: 'Colorado', content: 'I caught so many fish'},
    {title: 'Minnesota Dreamin', author:'Fred Star', 
    image_url: 'https://images.unsplash.com/photo-1598909820593-c970004196f5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
  location: 'Minnesota', content: 'It was hot, humid, but the fishing was the best ever'},
      ]);
    });
};
