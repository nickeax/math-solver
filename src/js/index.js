import { Lexer } from "./modules/lexer.js";
import { Parser } from "./modules/parser.js";

const input = document.querySelector('#input')
const output = document.querySelector('#output')
// const evaluate = document.querySelector('#evaluate')

const parser = new Parser()

console.clear()

document.addEventListener('click', e => {
  e.preventDefault()
  switch (e.target.id) {
    case 'evaluate':
      let lexer = new Lexer()
      let inp = input.value || ""
      if (inp !== "") lexer.tokenize(inp)
      lexer.displayTokens()
      break;

    default:
      break;
  }
})