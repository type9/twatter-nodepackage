var {PythonShell} = require('python-shell');

//Configs generation parameters
let gen_config = (user, sampleSize, markovOrder, overwrite) => {
    return {
        mode: 'text',
        pythonOptions: ['-u'], // get print results in real-time
        scriptPath: './dependencies',
        args: [user, sampleSize, markovOrder, overwrite]
    };
};

//Configs generation
let generate = (user, sampleSize, markovOrder, overwrite) => {
    let gen_options = gen_config(user,sampleSize, markovOrder, overwrite);

    PythonShell.run('tweet_markov_gen.py', gen_options, (err, results) => {
        if (err) throw err;
        let tweet = new Tweet();
        tweet.text = results[0];
        return tweet.text;
    });
};

module.exports = {generate};