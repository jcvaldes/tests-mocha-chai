var expect = require('chai').expect;
describe.only('Boolean test', () => {
    const numero = 2;
    it ('El valor true es verdadero', () => {
        expect(true).to.be.equal(true)
        expect(true).to.be.true
        
    });
    it('El valor false es falso', () => {
        expect(false).to.be.equal(false)
        expect(false).to.be.false
    })
    it('1 es de tipo número', () => {
        expect(1).to.be.a('number')
        expect(typeof 1).to.be.equal('number')
    });
    it('1 NO es de tipo string', () => {
        expect(1).not.to.be.a('string')
        expect(typeof 1 === 'string').to.be.false
        expect(typeof 1 === 'string').not.to.be.equal('string')
    });
    it('1 NO es de tipo booleano', () => {
        expect(1).not.to.be.a('boolean')
        expect(typeof 1 === 'boolean').to.be.false
        expect(typeof 1 === 'boolean').not.to.be.equal('boolean')
        
    });

});

