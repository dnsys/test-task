window.$ = window.jQuery = require('jquery');
import swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'

export default class InputLib{

  constructor (ajaxUrl){
    this.init(ajaxUrl)
  }

  init(ajaxUrl) {
    this._findAllInputs()
    this._changingInputValue(ajaxUrl)
  }

  _findAllInputs(){
    this.inputs = document.getElementsByTagName('input')
  }

  _changingInputValue(ajaxUrl){
    [].forEach.call(this.inputs, (input) => {
      input.addEventListener('input', () => {
        let value = input.value
        let parent = input.parentNode
        let successBlock = parent.getElementsByClassName('valid-feedback')[0]
        let errorBlock = parent.getElementsByClassName('invalid-feedback')[0]

        if(this._checkAnEmail(value)){
          successBlock.style.display = "block"
          errorBlock.style.display = "none"

          this._sendEmailValue(value, ajaxUrl)

        }else{
          errorBlock.style.display = "block"
          successBlock.style.display = "none"
        }
      });
    })
  }

  _checkAnEmail(elem){
    let expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    return expr.test(elem);
  }

  _sendEmailValue(value, ajaxUrl){

    clearTimeout(this.sendTimeout)

    this.sendTimeout = setTimeout(() => {
      $.ajax({
        url: ajaxUrl,
        type: 'GET',
        data: value,
        success: (data) => {
          swal(
            'Congrats!',
            'Field value was sent',
            data.success
          )
        }
      })
    }, 1000)

  }
}