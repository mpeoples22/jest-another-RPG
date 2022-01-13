const Player = require('../lib/Player');





/*

test('creates a player object', ()=> {
    const player = new Player ('Dave');
  expect(player.name).toBe('Dave');
  expect(player.health).toEqual(expect.any(Number));
  expect(player.strength).toEqual(expect.any(Number));
  expect(player.agility).toEqual(expect.any(Number));
});
*/


test('creates a player object', () => {
  const player = new Player('Dave');
  expect(player.name).toBe('Dave');
  expect(player.health).toEqual(expect.any(Number));
  expect(player.strength).toEqual(expect.any(Number));
  expect(player.agility).toEqual(expect.any(Number));
});