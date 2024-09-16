import { ZenoParadox } from './ZenoParadox';

describe('ZenoParadox', () => {
  it('should match paradox variables', () => {
    const paradox = new ZenoParadox(100, 10, 100);

    expect(paradox.time).toBe(0);
    expect(paradox.achillesPosition).toBe(0);
    expect(paradox.turtlePosition).toBe(100);

    paradox.step();

    expect(paradox.time).toBe(1);
    expect(paradox.achillesPosition).toBe(100);
    expect(paradox.turtlePosition).toBe(110);

    paradox.step();

    expect(paradox.time).toBe(1.1);
    expect(paradox.achillesPosition).toBe(110);
    expect(paradox.turtlePosition).toBe(111);

    paradox.step();

    expect(paradox.time).toBe(1.11);
    expect(paradox.achillesPosition).toBe(111);
    expect(paradox.turtlePosition).toBe(111.1);
  });
});
