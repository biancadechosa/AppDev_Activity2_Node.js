exports.getHome = (req, res) => {
    res.render('index', { title: 'Node.js App', message: 'Welcome to the homepage!' });
};

exports.postForm = (req, res) => {
    const {name, email} = req.body;

    res.render('index', { title: 'Form Submitted', message: `Thank you ${name}, we received your email: ${email}.` });
};
