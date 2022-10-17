const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  res: [],
  getLength() {
    return this.res.length
  },
  addLink(value) {
    this.res.push(`( ${value} )~~`);
    console.log(this)
    return this;
  },
  removeLink(position) {
    if (this.res[position - 1] === undefined) {
      this.res = [];
      throw new Error("You can\'t remove incorrect link!")
    }
    this.res.splice(position - 1, 1);
    console.log(this)
    return this;
  },
  reverseChain() {
    this.res = this.res.reverse();
    console.log(this)
    return this;
  },
  finishChain() {
    let final = this.res.join('').slice(0, -2);
    this.res = [];
    return final;
  }
};

//chainMaker.addLink(1).addLink(2)
//chainMaker.addLink(1).addLink(2).removeLink(1)
//chainMaker.addLink(1).addLink(2).reverseChain().finishChain();
//chainMaker.addLink(function () { }).addLink('2nd').addLink('3rd').removeLink(2).reverseChain().finishChain()

module.exports = {
  chainMaker
};
