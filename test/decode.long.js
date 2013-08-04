var fs = require('fs')
    , decoder = require('../lib/decoder')
    , ei = require('../lib/const')
    , tap = require('tape')
    , test = tap.test
    ;

fs.readFile('fixtures/integer.ebin', function(error, data) {
    var dec = decoder(data);

    test('decode/long', function(t) {
        t.ok(dec.decodeVersion(), 'version');
        t.equals(dec.getType(), ei.INTEGER_EXT, 'type');
        t.deepEqual(dec.decodeLong(), 100000000, 'value');
        t.equals(dec.index, data.length, 'eof');
        t.end();
    });
});