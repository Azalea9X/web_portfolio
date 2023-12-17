const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bparser = require('body-parser');

const app = express();
const port = 443;

app.set('view engine', 'ejs');
app.use(bparser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb://localhost:27017/wikiAPI', {
  auth: {
    username: `${process.env.USERNAME}`,
    password: `${process.env.PASSWORD}`,
  },
  authSource: 'admin',
  useUnifiedTopology: true,
  useNewUrlParser: true,
}).then(() => {
  console.log('Connected to database');
}).catch((err) => {
  console.log('Failed to connect to database:', err);
  console.log('Creating new database...');
  mongoose.connection.db.createCollection('wikiAPI', (err) => {
    if (err) {
      console.log('Failed to create new database:', err);
    } else {
      console.log('New database created');
    }
  });
});

const newArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please fill this out it's required"],
  },
  content: {
    type: String,
  },
});

const Article = mongoose.model('Article', newArticleSchema);


app.get('/', (req, res) => {

  Article.find({}, (err, docs) => {
    if (err) {
      console.log(err);
      res.send('Error occurred');
    } else {
       
      res.send(res.render('forms', { articles: docs }));
    }
  });
});

app.post('/', async (req, res) => {
  const newArticle = new Article({
    title: req.body.title,
    content: req.body.content,
  });

  newArticle.save()
    .then(() => {
      console.log('Data added to the database');
      res.redirect('/articles');
    })
    .catch((err) => {
      console.log('Displaying the error that was resulted with the operation', err);
      res.send('Error occurred');
    });
});

app.delete('/', (req, res) => {
  Article.deleteMany({ title: 'CSS3' }, (err) => {
    if (!err) {
      console.log('Success!!');
      res.send('Success!!');
    } else {
      console.log(err);
      res.send('Error occurred');
    }
  });
});

app.get('/:title', (req, res) => {
  Article.findOne({ title: req.params.title }, (err, titleA) => {
    if (!err) {
      res.write(`<h2>${titleA.title}</h2>
      <pre>${titleA.content}</pre>`);
    } else {
      console.log(err);
      res.send('Error occurred');
    }
  });
});

app.put('/:title', (req, res) => {
  Article.updateOne({ title: req.params.title },
    { title: req.body.title, content: req.body.content },
    (err) => {
      if (!err) {
        console.log('Success!!');
        res.send('Success!!');
      } else {
        console.log(err);
        res.send('Error occurred');
      }
    });
});

app.patch('/:title', (req, res) => {
  Article.updateOne({ title: req.params.title },
    { $set: req.body },
    (err) => {
      if (!err) {
        console.log('Success!!');
        res.send('Success!!');
      } else {
        console.log(err);
        res.send('Error occurred');
      }
    });
});

app.delete('/:title', (req, res) => {
  Article.deleteOne({ title: req.params.title },
    (err) => {
      if (!err) {
        console.log('Success!!');
        res.send('Success!!');
      } else {
        console.log(err);
        res.send('Error occurred');
      }
    });
});

app.get('/news', (req, res) => {
  res.send('News page');
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
