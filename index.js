"use strict"

module.exports = (data, { multiArgs = false } = {}) => {
	if (typeof data !== "string") {
		throw new TypeError("A string must be provided!")
	}

	if (typeof multiArgs !== "boolean") {
		throw new TypeError("`multiArgs` must be a boolean!")
	}

	const { functionName } = data.match(/(?<functionName>.+)\(.*\)/).groups

	// eslint-disable-next-line no-new-func
	const parser = new Function(functionName, data)

	let result
	parser((...values) => {
		result = values
	})

	return multiArgs ? result : result[0]
}
