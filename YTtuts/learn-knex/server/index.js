import express from 'express';
import bodyParser from 'body-parser';
import knex from '../db/knex';
import knex_populate from 'knex-populate';

const PORT = process.env.PORT || 3000,
      app  = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/todos', (req, res) => {
  // knex.raw('select * from todos').then(todos => {
  //   res.send(todos.rows)
  // })
  knex.select().from('todos').then(todos => {
    res.json(todos)
  })
})



app.get('/todos/:id', (req, res) => {
  // knex.raw('select * from todos where id = 1').then(todo => {
  //   res.json(todo.rows)
  // })
  knex.select()
    .from('todos')
    .where('id', req.params.id)
    .then(todo => {
      res.json(todo)
    })
})

// Joins
app.get('/todos-of-user/:id', (req, res) => {
  // knex.raw('select * from todos inner join users on todos.user_id = users.id where todos.user_id = ?', [req.params.id])
  //   .then(todos => res.json(todos.rows))
  // knex.from('todos')
  //     .innerJoin('users', 'todos.user_id', 'users.id')
  //     .where('todos.user_id', req.params.id)
  //     .then(todos => {
  //       res.json(todos)
  //     })


  // with populate  similar to postgres row_to_json
  knex_populate(knex, 'users')
      // .find({
      //   id: req.params.id
      // })
      .findById(req.params.id)
      .populate('todos', 'user_id', 'user_todos')
      .limitTo(1)
      .exec()
      .then(results => res.json(results))
})

app.post('/todos', (req, res) => {
  // knex.raw('insert into todos(title, user_id) values(?, ?)', ['go play some sports', '1'])
  //   .then(() => {
  //     knex.select().from('todos')
  //       .then(todos => {
  //         res.json(todos)
  //       })
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
  knex('todos').insert({
    title: req.body.title,
    user_id: req.body.user_id
  }).then(() => {
    knex.select().from('todos')
      .then(todos => {
        res.json(todos)
      })
  })
})

app.put('/todos/:id', (req, res) => {
  // knex.raw('update todos set ' + req.body.field + ' = ? where id = ?', [req.body.value, req.params.id])
  knex('todos')
    .where('id', req.params.id)
    .update({
      title: req.body.title,
      completed: req.body.completed,
      updated_at: knex.fn.now()
    })
    .then(() => {
      knex.select().from('todos')
        .then(todos => {
          res.json(todos)
        })
    })
})

app.delete('/todos/:id', (req, res) => {
  // knex.raw('delete from todos where id = ?', [req.params.id]);
  knex('todos')
    .where('id', req.params.id)
    .delete()
    .then(() => {
      knex.select().from('todos')
        .then(todos => {
          res.json(todos);
        })
    })
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})