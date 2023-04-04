const Table = require('./table')

test('запись в таблицу', () => {
    const table = Table.create();
    table['A'][0] = 4;
    table['A'][1] = 10;
    expect(table.A[0]).toBe(4);
    expect(table.A[1]).toBe(10);
    expect(table.A[2]).toBe(null);
    expect(() => {table.undefined}).toThrow(Error);
});

test('Select', () => {
    const table = Table.create();
    table.A[0] = 1;
    table.A[1] = 2;
    table.A[2] = 3;
    table.A[3] = 4;
    const t1 = table.select(() => {
        
    })
})