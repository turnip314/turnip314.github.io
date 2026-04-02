
import { Colours } from "../data/Colours";
import { Card } from "../entities/Card";
import { MenuButton } from "../entities/MenuButton";
import { TextField } from "../entities/TextField";
import { Game } from "../Game";
import { Scene } from "../Scene";

const epsilon = 0.01;

export class TwentyFour extends Scene {
    private numbers: number[] = [];
    private message: string = '';
    private answers: string[] = [];

    private cards: Card[] = [];
    private cardsContainer: any;
    private textBox: TextField | undefined;
    private submitButton: MenuButton | undefined;
    private resultsText: any;
    private newGameButton: any;
    private revealButton: MenuButton | undefined;
    private answersText: any[] = [];

    constructor(world: any, PIXI: any, game: Game,) {
        super(world, PIXI, game);
        this.textBox = new TextField(this.world, this.PIXI, 520, 450, 200, 50, "Answer", 14);
        this.submitButton = new MenuButton(this.world, this.PIXI, 750, 450, 55, 50, ">>", () => this.onSubmit(this.textBox?.getText()!!));

        this.newGameButton = new MenuButton(this.world, this.PIXI, 900, 200, 250, 40, "New Game", () => this.onNewGame());
        this.revealButton = new MenuButton(this.world, this.PIXI, 900, 250, 250, 40, "Reveal Answers", () => this.onShowAnswers());
        this.resultsText = new this.PIXI.Text("", { fontFamily: 'Arial', fontSize: 24, fill: Colours.Red, align: 'center' })
        this.world.addChild(this.resultsText);

        this.cardsContainer = new this.PIXI.Container();
        this.cardsContainer.x = 550;
        this.cardsContainer.y = 200;
        this.world.addChild(this.cardsContainer);

        this.onNewGame()
    }

    update(delta: number) {
        this.textBox?.update(delta);
    }

    destroy(): void {
        this.cards.forEach(card => card.destroy());
        this.submitButton?.destroy();
        this.resultsText?.destroy();
        this.newGameButton?.destroy();
        this.revealButton?.destroy();
        this.answersText.forEach(text => text.destroy());
    }

    onSubmit(answer: any) {
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
                this.message = "This evaluates to " + Math.round(this.evaluate(tree)* 100) / 100 + ".";
            }
            this.resultsText.style.fill = Colours.Green;
        }
        catch (error) {
            this.message = "Invalid expression.";
            this.resultsText.style.fill = Colours.Red;
        }
        this.resultsText.text = this.message;
        this.resultsText.x = 520;
        this.resultsText.y = 520;
        this.world.addChild(this.resultsText);
    }

    onNewGame() {
        this.textBox?.unset();
        this.cards.forEach(sprite => sprite.destroy());
        this.cards = [];
        this.resultsText.text = "";
        this.answersText.forEach(text => text.destroy());
        this.answersText = [];
        this.message = '';
        this.answers = [];
        this.numbers = [];
        for (let i = 0; i < 4; ++i) {
            this.numbers.push(1 + Math.floor(Math.random() * 10))
        }

        if (solve(this.numbers).size == 0) {
            this.onNewGame();
        } else {
            this.numbers.sort();
            this.onGenerateCards();
        }
    }

    onGenerateCards() {
        console.log(this.numbers)
        for (let i = 0; i < 4; i++) {
            this.cards.push(
                new Card(
                    this.cardsContainer, this.PIXI, this.numbers[i], Math.floor(4*Math.random()), 80 * (i%2), 120 * Math.floor(i/2)
                )
            );
        }
    }

    recur(expr: string): number | any[] {
        if (expr == '') {
            throw new Error("Invalid Expression.");
        }
        let parantheses = 0;
        for (let i = expr.length - 1; i >= 0; --i) {
            if (expr[i] == "(") {
                ++parantheses;
            }
            else if (expr[i] == ")") {
                --parantheses;
            }
            else if (['+', '-'].indexOf(expr[i]) != -1 && parantheses == 0) {
                return [expr[i], this.recur(expr.substring(0, i)), this.recur(expr.substring(i + 1, expr.length))]
            }
        }
        for (let i = expr.length - 1; i >= 0; --i) {
            if (expr[i] == "(") {
                ++parantheses;
            }
            else if (expr[i] == ")") {
                --parantheses;
            }
            else if (['*', '\/'].indexOf(expr[i]) != -1 && parantheses == 0) {
                return [expr[i], this.recur(expr.substring(0, i)), this.recur(expr.substring(i + 1, expr.length))]
            }
        }
        if (!isNaN(Number(expr))) {
            return Number(expr)
        }
        if (expr[0] == "(" && expr[expr.length - 1] == ")") {
            return this.recur(expr.substring(1, expr.length - 1));
        }

        throw new Error("Invalid Expression.");
    }

    parsePM(expr: string) {
        return this.recur(expr.replaceAll(' ', ''));
    }

    isValid(exprTree: number | any[]): boolean {
        let numList = [];

        let stack: any[] = [exprTree];

        while (stack.length > 0) {
            let cur = stack.pop();
            if (!isNaN(Number(cur))) {
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
            if (numList[i] != this.numbers[i]) {
                return false;
            }
        }

        return true;
    }

    isCorrect(tree: number | any[]) {
        return Math.abs(this.evaluate(tree) - 24) < epsilon;
    }

    evaluate(tree: number | any[]): number {
        if (!isNaN(Number(tree))) {
            return Number(tree);
        }
        tree = tree as any[]
        if (tree[0] == '+') {
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

        throw Error("Cannot evaluate tree.")
    }

    onShowAnswers() {
        if (this.answersText.length > 0) return;
        this.answers = [...solve(this.numbers)];
        for (let i = 0; i < this.answers.length; i++) {
            const text = new this.PIXI.Text(this.answers[i], { fontFamily: 'Arial', fontSize: 24, fill: Colours.Green, align: 'center' });
            text.x = 900;
            text.y = 300 + 40 * i;
            this.answersText.push(
                text
            );
            this.world.addChild(text);
        }
    }
}

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
    number: number = 0;
    left: MyNode | undefined;
    right: MyNode | undefined;
    operation: string | undefined;
    exprs: MyNode[] = [];

    constructor(type: number) {
        this.type = type;
        this.negatives = false;
    }

    setNum(number: number) {
        this.number = number;
    }

    set_op(operation: string) {
        this.operation = operation;
    }

    set_children(left: MyNode | undefined, right: MyNode | undefined) {
        this.left = left;
        this.right = right;
    }

    get_num() {
        return this.number;
    }

    get_op() {
        return this.operation;
    }

    has_negatives(): boolean {
        if (this.type == Type.Number) {
            return this.get_num() < 0;
        }
        return this.eval() < 0 || this.left!!.has_negatives() || this.right!!.has_negatives()
    }

    flatten() {
        if (this.type == Type.Number) {
            this.exprs = [this]
            return
        }
        if (this.left == undefined || this.right == undefined) return;


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
                    .concat(sub.sort((x, y) => x.eval() > y.eval() ? 1 : -1))
            }


            this.exprs.forEach(expr => {
                expr.arrange()
            });

        }

    }

    eval(): number {
        if (this.type == Type.Number)
            return this.get_num();
        else if (this.operation == Operation.ADD)
            return this.exprs.reduce((x, y) => x + y.eval(), 0);
        else if (this.operation == Operation.SUB)
            return this.exprs[0].eval() - this.exprs.slice(1).reduce((x, y) => x + y.eval(), 0);
        else if (this.operation == Operation.MUL)
            return this.exprs.reduce((x, y) => x * y.eval(), 1);

        else if (this.operation == Operation.DIV)
            return this.exprs[0].eval() / this.exprs.slice(1).reduce((x, y) => x * y.eval(), 1);

        throw Error("Operation unknown")
    }


    toString(): string {
        if (true) {
            if (this.type == Type.Number)
                return this.get_num().toString();
            else
                return '(' + this.exprs.map(expr => expr.toString()).reduce((x, y) => x + " " + this.operation!! + " " + y) + ')';
        }
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

function generate_tree(structure: any, op_list: string[], num_list: number[]): MyNode {
    if (structure == Type.Number) {
        let node = new MyNode(Type.Number);
        node.setNum(num_list.pop()!!);
        return node;
    } else if (structure[0] == Type.Operation) {
        let node = new MyNode(Type.Operation);
        node.set_op(op_list.pop()!!);
        let left = generate_tree(structure[1], op_list, num_list);
        let right = generate_tree(structure[2], op_list, num_list);
        node.set_children(left, right);
        return node;
    } else {
        throw Error("Cannot generate expression tree")
    }


}

// Helper function copied from https://stackoverflow.com/questions/37579994/generate-permutations-of-javascript-array
function permutations(xs: number[]): number[][] {
    let ret = [];

    for (let i = 0; i < xs.length; i = i + 1) {
        let rest = permutations(xs.slice(0, i).concat(xs.slice(i + 1)));

        if (!rest.length) {
            ret.push([xs[i]])
        } else {
            for (let j = 0; j < rest.length; j = j + 1) {
                ret.push([xs[i]].concat(rest[j]))
            }
        }
    }
    return ret;
}

let ops = [Operation.ADD, Operation.SUB, Operation.MUL, Operation.DIV]
let num_list = [1, 2, 3, 4]

function solve(nums: number[]) {
    let solutions: string[] = [];
    structures.forEach(structure => {
        permutations(nums).forEach(perm => {
            ops.forEach(x => {
                ops.forEach(y => {
                    ops.forEach(z => {
                        let cur = generate_tree(structure, [x, y, z], perm.slice(0));
                        cur.flatten();
                        cur.arrange();

                        if (cur.eval() - 24 < epsilon && 24 - cur.eval() < epsilon && !cur.has_negatives()) {
                            solutions.push(cur.toString());
                        }
                    });
                });
            });
        });
    });

    return new Set(solutions);
}

