const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', function () {
  it('When an empty string is passed as an argument, it returns an empty string', function () {
    expect(wrap('', 10)).to.equal('');
  })
  it('It returns the expected results when the string being passed as an argument is not empty and the number of columns is not too small.', function () {
    expect(wrap('I really like cats and dogs.', 6)).to.equal('I\nreally\n;like\ncats\nand\ndogs.');
    expect(wrap('I really like cats and dogs.', 7)).to.equal('I\nreally\n;like\ncats\nand\ndogs.');
    expect(wrap('I really like cats and dogs.', 8)).to.equal('I really\nlike\ncats and\ndogs.');
  })
  it('It throws an error if the number being passed as an argument is smaller than the length of any of the words in the string', function () {
    expect(() => wrap('Hello World!', 2)).to.throw();
    expect(() => wrap('I really like cats and dogs.', 5)).to.throw();
  })
})

