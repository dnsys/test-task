window.$ = window.jQuery = require('jquery');
window.Popper = require('popper.js').default;

import swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'

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

    let options = {
      url: './response.json',
      type: 'post',
      callbacks: {
        afterInputsSent: function(sendStatus, modalMessage){
          swal(
            'Congrats!',
            modalMessage,
            sendStatus
          )
        }
      }
    }

    let inputLib = new InputLib(options)
  }
}

let app = null

$(function () {
  app = new Application();
})