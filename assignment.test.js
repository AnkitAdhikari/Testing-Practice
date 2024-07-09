const { reverse, capitalize, calculator, caesarCipher, analyzeArray } = require('./assignment');

test('reverse string', () => {
    expect(reverse("hello")).toBe("olleh");
})

test('capitalize', () => {
    expect(capitalize("morning")).toBe("Morning");
})

test('add-int', () => {
    expect(calculator.add(2, 3)).toBe(5);
})

test('add-decimal', () => {
    expect(calculator.add(0.3, 0.1)).toBeCloseTo(0.4);
})

test('sub-int', () => {
    expect(calculator.subtract(3, 2)).toBe(1);
})

test('sub-decimal', () => {
    expect(calculator.subtract(0.1, 0.2)).toBeCloseTo(-0.1);
})

test('divide', () => {
    expect(calculator.divide(7, 2)).toBe(3.5);
})


test('caesar-cipher last letters', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
})

test('caesar-cipher with capitalization', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
})

test('caesar-cipher ignore non Alphabet', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
})

test('analyze-array', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    })
})