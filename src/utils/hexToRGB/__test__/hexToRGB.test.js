import { hexToRGB } from '..'

describe('将16进制颜色转为 rgb', () => {

  it('小写', () => {
    expect(hexToRGB('#ffb400')).toEqual([255, 180, 0])
  });

  it('大写', () => {
    expect(hexToRGB('#FFB400')).toEqual([255, 180, 0])
  });
})