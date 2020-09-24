import * as $ from 'jquery';
import Post from '@/Post';
import json from '@/assets/json';
import WebpackLogo from '@/assets/webpack';
import React from 'react';
import {render} from 'react-dom';
import '@/babel.js';
import '@/styles/style.css';
import '@/styles/sass.scss';
import '@/styles/less.less';

const post = new Post('Webpack post title', WebpackLogo);

console.log('Post to string: ', post.toString());
console.log("JSON: ", json);

$('pre').addClass('code').html(post.toString());

const App = () => (
  <div className="container">
    <h1>Webpack</h1>
    <hr />
    <div className="logo"></div>
    <hr />
    <pre />
    <hr />
    <div className="sass-scss">
      <h2>Sass / scss</h2>
    </div>
    <hr />
    <div className="less">
      <h2>Less</h2>
    </div>
  </div>
);

render(<App />, document.getElementById('app'))
