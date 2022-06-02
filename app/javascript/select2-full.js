//= require select2-full
import $ from 'jquery'
import 'select2/dist/css/select2.css'
import 'select2'


/// if you don't have turnbolinks then use this:
//// document.addEventListener('DOMContentLoaded', () => { 
// window.addEventListener('turbolinks:load', () => {
//   debugger
//   $('.select2').select2({
//     tags: true,
//     tokenSeparators: [',', ' ']
//   });
// })


window.addEventListener('DOMContentLoaded', () => {
  $('.js-source-states').select2()
})
