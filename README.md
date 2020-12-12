#  Twatter - Node

[![NPM version](https://img.shields.io/npm/v/tocsify.svg?style=flat)](https://www.npmjs.com/package/twatter) [![NPM downloads](https://img.shields.io/npm/dm/tocsify.svg?style=flat)](https://npmjs.org/package/twatter)

npm module that generates tweets using the markov chain model from a Twitter user handles

## Features

* Given a user handle, scrapes Twitter for a variable amount of tweets
* Stores samples Tweets such that they don't need to be rescraped
* Generates a random Tweet from sampled Tweets that attempt to resemble something that might be said by target user

## Installation

```bash
npm install -g twatter-node
```

## Usage

```bash
Functions

    generate([user], [sampleSize], [order], [overwrite]);

        Arguements:

            user (String) -- Handle of target twitter user

            sampleSize (integer) -- Number of tweets to sample if no previous samples exist

            order -- Adjusts complexity of the model. Lowest should be 1 and it should be raised depending on how much text there is to sample. In general higher complexity will closer resemble human speech but has a higher chance of repeating something already said instead of being original.
            
            overwrite (boolean) -- Forces to ignore previously sampled Tweets and resamples at the given sampleSize.
```