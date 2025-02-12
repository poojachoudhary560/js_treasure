if (!Function.prototype.apply) {
  Function.prototype.apply = function(context, args) {
    // Ensure context is an object
    if (context === null || context === undefined) {
      context = globalThis; // Use global object in non-strict mode
    }

    // Convert the `args` to an array if it's not already an array (handling array-like objects)
    if (!Array.isArray(args)) {
      args = Array.prototype.slice.call(args);
    }

    // Create a unique function property on context
    const funcSymbol = Symbol('func');
    context[funcSymbol] = this;

    // Call the function with the specified context and arguments
    const result = context[funcSymbol](...args);

    // Clean up the added property to avoid polluting the context object
    delete context[funcSymbol];

    // Return the result of the function call
    return result;
  };
}
