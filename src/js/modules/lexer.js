import { Token } from "../../models/token.js";
const operators = ['+', '-', '*', '/', '%', '=', '(', ')']
const mode = ['identifier', 'literal', 'operator']

export class Lexer {
  tokens = []

  tokenize(inp) {
    let atoms = inp.split('')


  }
}