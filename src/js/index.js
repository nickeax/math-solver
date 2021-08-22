import { Lexer } from "./modules/lexer.js";
import { Parser } from "./modules/parser.js";

const input = document.querySelector('#input')
const output = document.querySelector('#output')
// const evaluate = document.querySelector('#evaluate')

const lexer = new Lexer()
const parser = new Parser()

document.addEventListener('click', e => {
  e.preventDefault()
  switch (e.target.id) {
    case 'evaluate':
      let inp = input.value || ""
      if (inp !== "") lexer.tokenize(inp)
      break;

    default:
      break;
  }
})