const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

    let dinosaur1;
    let dinosaur2;

  beforeEach(function () {
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('diplodocus');
    park = new Park('Jurassic Park', 100);
  })

  it('should have a name', function(){
    const actual = park.name
    assert.strictEqual('Jurassic Park', actual)
  });


  it('should have a ticket price', function(){
    const actual = park.ticketPrice
    assert.strictEqual(100, actual)
  })

  it('should have a collection of dinosaurs', function(){
    park.addDinosaurToPark(dinosaur1);
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual(actual, ['t-rex', 'carnivore', 50])
  });

  it('should be able to add a dinosaur to its collection');



  it('should be able to remove a dinosaur from its collection');

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
