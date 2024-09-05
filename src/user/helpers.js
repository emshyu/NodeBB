'use strict';

const assert = require('assert');

function makeBulkSetElement(uids, index, fieldName, count) {
	return [`user:${uids[index]}`, { [fieldName]: count || 0 }];
}

function makeBulkSet(counts, uids, fieldName) {
	console.log('Emily Yu');
	return counts.map((count, index) => makeBulkSetElement(uids, index, fieldName, count));
}

const result1 = makeBulkSetElement(['1', '2'], 1, 'score', 10);

assert.deepEqual(result1, ['user:2', { score: 10 }]);

const result2 = makeBulkSet([10, 20], ['1', '2'], 'score');

assert.deepEqual(result2, [['user:1', { score: 10 }], ['user:2', { score: 20 }]]);

module.exports = makeBulkSet;
