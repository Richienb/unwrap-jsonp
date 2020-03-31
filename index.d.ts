declare namespace unwrapJsonp {
	export interface Options {
		/**
		 * Return an array of the function arguments instead of just the first one.
		 * @default false
		*/
		multiArgs?: boolean
	}
}

/**
 * Unwrap the values in a JSONP function.
 * @param data The jsonp to parse.
 * @param options Options.
 * @example
 * ```
 * const unwrapJsonp = require("unwrap-jsonp")
 *
 * unwrapJsonp(`fn({a: "b"})`)
 * //=> {a: "b"}
 *
 * unwrapJsonp(`fn("a", "b")`, {multiArgs: true})
 * //=> ["a", "b"]
 * ```
*/
declare function unwrapJsonp<ReturnType = unknown>(data: string, options?: unwrapJsonp.Options): ReturnType

export = unwrapJsonp
