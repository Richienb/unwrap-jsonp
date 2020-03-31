const test = require("ava")
const unwrapJsonp = require(".")

const jsonp = "a(1, 2, {a: {b: {}, c: {}, d: {e: \"f\"} }}, 4)"

test("main", t => {
	t.is(unwrapJsonp(jsonp), 1)
	t.deepEqual(unwrapJsonp(jsonp, { multiArgs: true }), [1, 2, { a: { b: {}, c: {}, d: { e: "f" } } }, 4])
})
