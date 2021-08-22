import { Token } from "../../models/token.js";

const numerals = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
const letters =
  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const operators = ['+', '-', '*', '/', '%', '=', '(', ')']
export class Lexer {
  modes = { identifier: 'identifier', literal: 'literal', operator: 'operator', unknown: 'unknown' }
  tokens = []
  mode = this.modes['unknown']
  currentString = ""

  tokenize(inp) {
    let atoms = inp.split('')
    for (let i = 0; i < atoms.length; i++) {
      switch (this.mode) {
        case this.modes.unknown:
          if (atoms[i] === ' ') break
          if (operators.indexOf(atoms[i]) !== -1) {
            this.tokens.push(new Token('operator', atoms[i]))
          } else if (numerals.indexOf(atoms[i]) !== -1) {
            console.log(atoms[i])
            this.mode = this.modes.literal
            this.currentString = atoms[i]
          } else if (letters.indexOf(atoms[i]) !== -1) {
            mode = modes.identifier
            this.currentString = atoms[i]
          }
          break;
        case this.modes.literal:
          if (numerals.indexOf(atoms[i]) === -1) {
            this.tokens.push(new Token('literal', this.currentString))
            this.currentString = ""
            this.mode = this.modes.unknown
            --i
            console.log(this.tokens)
          } else {
            this.currentString += atoms[i]
          }
        default:
          break;
      }
    };
  }
}