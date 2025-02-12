if (!Function.prototype.call) {
  Function.prototype.call = function(context, ...args) {
    // Ensure context is an object
    if (context === null || context === undefined) {
      context = globalThis; // In non-strict mode, use the global object
    }
    
    // Create a unique function property on context
    const funcSymbol = Symbol('func');
    context[funcSymbol] = this;
    
    // Apply the function with the provided context and arguments
    const result = context[funcSymbol](...args);
    
    // Clean up the added property to avoid polluting the context object
    delete context[funcSymbol];
    
    // Return the result of the function call
    return result;
  };
}
