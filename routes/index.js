const { Router } = require('express');

const router = Router();

/* GET index page. */
router.get('/', (req, res) => {
  res.render('index', {
    title: 'Express'
  });
});

router.get('/zz', (req, res) => {
  global.io.sockets.emit('tag');
  res.json({
    status: 'success'
  });
});

router.get('/xx', (req, res) => {
  // eslint-disable-next-line consistent-return
  global.port.write('1', (err) => {
    if (err) {
      return console.log('Error on write: ', err.message);
    }
    console.log('message written');
  });
  res.json({
    status: 'success'
  });
});

module.exports = router;
