import { Controller } from "stimulus"

export default class extends Controller {
  initialize(){
    this.render()
  }
  increment(){
    this.value++
  }
  
  incrementAsync(){
    setTimeout(() => this.value++, 1000)
  }
  
  incrementIfOdd(){
    if(this.value % 2 !== 0){
      this.value++
    }
  }
  
  decrease(){
    this.value--
  }
  
  render(){
    this.valueElement.innerHTML = this.value
  }
  
  get value(){
    if(this.data.has('value')){
      return parseInt(this.data.get('value'))
    }else{
      return 0
    }
  }
  
  get valueElement(){
    return this.targets.find('valueCounter')
  }
  
  set value(value){
    this.data.set('value', value)
    this.render()
  }
}
