const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    expect(typeof productDetails).toBe('function');
    expect(productDetails()).toBeInstanceOf(Array);
    expect(productDetails('Alcool gel','Máscara')).toHaveLength(2);
    expect(typeof productDetails('Alcool gel', 'Máscara')).toBe('object')
    expect(productDetails('Alcool gel', 'Máscara')).toEqual([
      { name: 'Alcool gel', details: { productId: 'Alcool gel123' } },
      { name: 'Máscara', details: { productId: 'Máscara123' } }
    ]);
    expect(productDetails('Alcool gel','Máscara')[0].details.productId).toEqual('Alcool gel123');
    expect(productDetails('Alcool gel','Máscara')[1].details.productId).toEqual('Máscara123');
  });
});
