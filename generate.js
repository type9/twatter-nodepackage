var {PythonShell} = require('python-shell');

//Configs run parameters
let config = (user, sampleSize, markovOrder) => {
    return {
        mode: 'text',
        pythonOptions: ['-u'], // get print results in real-time
        scriptPath: './dependencies',
        args: [user, sampleSize, markovOrder, false]
    };
}

//Configs generation
let generate = (user) => {
    let gen_options = config(user);

    PythonShell.run('tweet_markov_gen.py', gen_options, (err, results) => {
        if (err) throw err;

        let tweet = new Tweet();
        tweet.text = results[0];
        tweet
            .save()
            .then(tweet => {
                return Promise.all([Handle.findOne({name: req.params.handle}), tweet]);
            })
            .then(([handle, tweet]) => { // bind the tweet to the handle and redirect
                console.log("HANDLE: " + handle.name);
                handle.tweets.unshift(tweet._id);
                handle.save();
                res.status(201);
                res.redirect(`/${handle.name}/twatted/${tweet._id}`);
            })
            .catch(err => {
                console.log(err.message);
            });
    });
};