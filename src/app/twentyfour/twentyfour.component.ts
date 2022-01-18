import { HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-twentyfour',
  templateUrl: './twentyfour.component.html',
  styleUrls: ['./twentyfour.component.css']
})
export class TwentyFourComponent implements OnInit {

  cards = [3,4,5,6];
  inputText = '';
  message = '';
  answers = [];

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    
  }

  constructor() { }

  ngOnInit(): void {
    this.onNewGame()
  }

  onSubmit(answer) {
    let tree = null;
    try {
        tree = this.parsePM(answer);
        if (!this.isValid(tree)) {
            this.message = "You must use each number exactly once.";
        }
        else if (this.isCorrect(tree)) {
            this.message = "Correct!";
        }
        else {
            this.message = "This evaluates to " + this.evaluate(tree).toString() + ".";
        }
    }
    catch (error) {
        this.message = error;
    }
  }

  onNewGame() {
    this.message = '';
    this.answers = [];
    this.cards = [];
    for (let i = 0; i < 4; ++i) {
        this.cards.push(1 + Math.floor(Math.random() * 10))
    }

    if (solve(this.cards).size == 0) {
        this.onNewGame();
    } else {
        this.cards.sort();
    }
  }

  recur(expr) {
    if (expr == '') {
        throw new Error("Invalid Expression.");
    }
    let parantheses = 0;
    for (let i = 0; i < expr.length; ++i) {
      if (expr[i] == "(") {
        ++parantheses;
      }
      else if (expr[i] == ")") {
        --parantheses;
      }
      else if (['+', '-'].indexOf(expr[i]) != -1 && parantheses == 0) {
        return [expr[i], this.recur(expr.substring(0, i)), this.recur(expr.substring(i+1, expr.length))]
      }
    }
    for (let i = 0; i < expr.length; ++i) {
      if (expr[i] == "(") {
        ++parantheses;
      }
      else if (expr[i] == ")") {
        --parantheses;
      }
      else if (['*', '\/'].indexOf(expr[i]) != -1 && parantheses == 0) {
        return [expr[i], this.recur(expr.substring(0, i)), this.recur(expr.substring(i+1, expr.length))]
      }
    }
    if (!isNaN(expr)) {
      return Number(expr)
    }
    if (expr[0] == "(" && expr[expr.length-1] == ")") {
      return this.recur(expr.substring(1, expr.length-1));
    }

    throw new Error("Invalid Expression.");
  }

  parsePM(expr) {
    return this.recur(expr.replaceAll(' ', ''));
  }

  isValid(exprTree) {
    let numList = [];

    let stack = [exprTree];

    while (stack.length > 0) {
      let cur = stack.pop();
      if (!isNaN(cur)) {
        numList.push(cur);
      }
      else {
        stack.push(cur[1]);
        stack.push(cur[2]);
      }
    }

    numList.sort();
    if (numList.length != 4) {
      return false;
    }
    for (let i = 0; i < 4; ++i) {
      if (numList[i] != this.cards[i]) {
        return false;
      }
    }

    return true;
  }

  isCorrect(tree) {
      return this.evaluate(tree) == 24;
  }

  evaluate(tree) {
      if (!isNaN(tree)) {
          return tree;
      }
      else if (tree[0] == '+') {
          return this.evaluate(tree[1]) + this.evaluate(tree[2]);
      }
      else if (tree[0] == '*') {
        return this.evaluate(tree[1]) * this.evaluate(tree[2]);
    }
    else if (tree[0] == '-') {
        return this.evaluate(tree[1]) - this.evaluate(tree[2]);
    }
    else if (tree[0] == '\/') {
        return this.evaluate(tree[1]) / this.evaluate(tree[2]);
    }
  }

  onShowAnswers() {
      this.answers = [...solve(this.cards)];
  }

  
}


const epsilon = 0.01

class Type {
    static Operation = 1;
    static Number = 2;
}
    

class Operation {
    static ADD = '+';
    static SUB = '-';
    static MUL = '*';
    static DIV = '/';
}
    
class MyNode {
    type: number;
    negatives: boolean;
    number: number;
    left: MyNode;
    right: MyNode;
    operation: string;
    exprs;

    constructor(type) {
        this.type = type;
        this.negatives = false;
    }
    
    setNum(number) {
        this.number = number;
    }
    
    set_op(operation){
        this.operation = operation;
    }
        
    set_children(left, right) {
        this.left = left;
        this.right = right;
    }
        
        
    get_num() {
        return this.number;
    }
    
    get_op() {
        return this.operation;
    }
    
    has_negatives() {
        if (this.type == Type.Number) {
            return this.get_num() < 0;
        }
        return this.eval() < 0 || this.left.has_negatives() || this.right.has_negatives() < 0
    }
    
    flatten() {
        if (this.type == Type.Number) {
            this.exprs = [this]
            return
        }
            
        
        this.left.flatten();
        this.right.flatten();

        if (this.operation == Operation.ADD || this.operation == Operation.MUL) {
            if (this.left.type == Type.Number) {
                this.exprs = this.left.exprs;
            }
                
            else if (this.left.operation == this.operation) {
                this.exprs = this.left.exprs;
            }
                
            else {
                this.exprs = [this.left];
            }
                
            if (this.right.type == Type.Number) {
                this.exprs = this.exprs.concat(this.right.exprs);
            }
                
            else if (this.right.operation == this.operation) {
                this.exprs = this.exprs.concat(this.right.exprs);
            }
                
            else {
                this.exprs = this.exprs.concat([this.right]);
            }
                
            return this.exprs
        }
        
        else {
            if (this.left.type == Type.Number) {
                this.exprs = [this.left, this.right];
            }
                
            else if (this.left.operation == this.operation) {
                this.exprs = this.left.exprs.concat([this.right]);
            }
                
            else {
                this.exprs = [this.left, this.right];
            }
                
            return this.exprs
        }
    }
        
     arrange() {
        if (this.type == Type.Operation) {
            if (this.operation == Operation.ADD || this.operation == Operation.MUL) {
                this.exprs.sort((x, y) => x.eval() > y.eval() ? 1 : -1);
            }    
            else {
                let sub = this.exprs.slice(1);
                this.exprs = [this.exprs[0]]
                .concat(sub.sort((x,y) => x.eval() > y.eval() ? 1 : -1))
            }
                
            
            this.exprs.forEach(expr => {
                expr.arrange()
            });
                
        }
            
     }
    
     eval() {
        if (this.type == Type.Number)
            return this.get_num();
        else if (this.operation == Operation.ADD)
            return this.exprs.reduce((x,y) => x + y.eval(), 0);
        else if (this.operation == Operation.SUB)
            return this.exprs[0].eval() - this.exprs.slice(1).reduce((x,y) => x + y.eval(), 0);
        else if (this.operation == Operation.MUL) 
            return this.exprs.reduce((x,y) => x * y.eval(), 1);
            
        else if (this.operation == Operation.DIV)
            return this.exprs[0].eval() / this.exprs.slice(1).reduce((x,y) => x * y.eval(), 1);
     }
        
        
    toString() {
        if (true) {
            if (this.type == Type.Number)
                return this.get_num().toString();
            else
                return '(' + this.exprs.reduce((x,y) => x + " " + this.operation + " " + y.toString()) + ')';
        }
        else if (this.type == Type.Number) return this.get_num().toString();
        else return '(' + this.left.toString() + ' ' + this.operation + ' ' + this.right.toString() + ')'
    }
        

}
        
        
let structures = [
    [
        Type.Operation,
        [
            Type.Operation,
            [
                Type.Operation,
                Type.Number,
                Type.Number
            ],
            Type.Number
        ],
        Type.Number
    ],
    
    [
        Type.Operation,
        [
            Type.Operation,
            Type.Number,
            [
                Type.Operation,
                Type.Number,
                Type.Number
            ]
        ],
        Type.Number
    ],
    
    [
        Type.Operation,
        [
            Type.Operation,
            Type.Number,
            Type.Number
        ],
        [
            Type.Operation,
            Type.Number,
            Type.Number
        ]
    ],
    
    [
        Type.Operation,
        Type.Number,
        [
            Type.Operation,
            [
                Type.Operation,
                Type.Number,
                Type.Number
            ],
            Type.Number
        ]
    ],
    
    [
        Type.Operation,
        Type.Number,
        [
            Type.Operation,
            Type.Number,
            [
                Type.Operation,
                Type.Number,
                Type.Number
            ]
        ]
    ]
]

function generate_tree(structure, op_list, num_list) {
    if (structure == Type.Number) {
        let node = new MyNode(Type.Number);
        node.setNum(num_list.pop());
        return node;
    }
        
    else if (structure[0] == Type.Operation) {
        let node = new MyNode(Type.Operation);
        node.set_op(op_list.pop());
        let left = generate_tree(structure[1], op_list, num_list);
        let right = generate_tree(structure[2], op_list, num_list);
        node.set_children(left, right);
        return node;
    }
        
}

// Helper function copied from https://stackoverflow.com/questions/37579994/generate-permutations-of-javascript-array
function permutations(xs) {
    let ret = [];
  
    for (let i = 0; i < xs.length; i = i + 1) {
      let rest = permutations(xs.slice(0, i).concat(xs.slice(i + 1)));
  
      if(!rest.length) {
        ret.push([xs[i]])
      } else {
        for(let j = 0; j < rest.length; j = j + 1) {
          ret.push([xs[i]].concat(rest[j]))
        }
      }
    }
    return ret;
  }
        
let ops = [Operation.ADD, Operation.SUB, Operation.MUL, Operation.DIV]
let num_list = [1,2,3,4]

function solve(nums) {
    let solutions = [];
    structures.forEach(structure => {
        permutations(nums).forEach(perm => {
            ops.forEach(x => {
                ops.forEach(y => {
                    ops.forEach(z => {
                        let cur = generate_tree(structure, [x,y,z], perm.slice(0));
                        cur.flatten();
                        cur.arrange();
                        
                        if (cur.eval() - 24 < epsilon && 24 - cur.eval() < epsilon) {
                            solutions.push(cur.toString());
                        }
                    });
                });
            });
        });
    });
                            
    return new Set(solutions);
}
    