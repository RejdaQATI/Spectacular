import { Player } from './player';

describe('LevelUp', () => {

  it('should gain 10 experience points each day', () => {
    const player = new Player(1, 0);
    player.newDay();
    expect(player.experience).toBe(10);
  });

  it('should start with 0 in experience and level', () => {
    const player = new Player(0, 0);
    expect(player.level).toBe(0);
    expect(player.experience).toBe(0);
  });

  it('should win a level when experience equals 100', () => {
    const player = new Player(0, 90);
    player.newDay();
    expect(player.level).toBe(1);
    expect(player.experience).toBe(0);
  });

  it('should keep the same level if experience is below 100', () => {
    const player = new Player(1, 60);
    player.newDay();
    expect(player.level).toBe(1);
  });

  it('max level should be 10', () => {
    const player = new Player(10, 90);
    player.newDay();
    expect(player.level).toBe(10);
  });

  it('should have a level strictly inferior to 11', () => {
    const player = new Player(10, 100);
    player.newDay();
    expect(player.level).toBeLessThan(11);
  });

  // it('should never have initial experience very high', () => {
  //   const player = new Player(1, 200);
  //   expect(player.experience).toBeLessThan(100);
  // });

  it('should never have negative experience', () => {
    const player = new Player(1, -1);
    player.newDay();
    expect(player.experience).toBeGreaterThanOrEqual(0);
  });

  it('should never have a negative level', () => {
    const player = new Player(-1, 0);
    player.newDay();
    expect(player.level).toBeGreaterThanOrEqual(0);
  });

  it('experience and level should be valid numbers', () => {
    const player = new Player(1, 2);

  });

    // it('should keep experience excess after level up', () => {
    //   const player = new Player(1, 150); 
    //   player.newDay();
    //   expect(player.level).toBe(2);
    //   expect(player.experience).toBe(60); 
    // });
})
