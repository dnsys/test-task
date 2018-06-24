window.$ = window.jQuery = require('jquery');
window.Popper = require('popper.js').default;

require('bootstrap');
import 'bootstrap/scss/bootstrap.scss'

import './fonts'
import './base'
import './grid'
import './helpers/index'
import Blocks from './blocks'
import Views from './views'

import InputLib from './inputsLib'

class Application{
  constructor(){
    Blocks.init()
    Views.init()

    new InputLib()
  }
}

let app = null

$(function () {
  app = new Application();
})