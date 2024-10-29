/**
 * Catches errors from a promise and returns a tuple indicating success or failure.
 *
 * @template T - The type of the resolved value of the promise.
 * @template E - The type of the error to catch, extending the Error constructor.
 *
 * @param {Promise<T>} promise - The promise to handle errors for.
 * @param {E[]} [errorsToCatch] - An optional array of error constructors to catch. If not provided, all errors will be caught.
 *
 * @returns {Promise<[undefined, T] | [InstanceType<E>]>} - A promise that resolves to a tuple.
 * If the promise resolves successfully, the tuple will be [undefined, T].
 * If an error is caught, the tuple will be [InstanceType<E>].
 * @example
 * class CustomError extends Error {
 *   name = "CustomError";
 *   extraProp = "ERROR: test";
 * }
 *
 * async function example() {
 *   const promise = new Promise<string>((resolve, reject) => {
 *     // Simulate an asynchronous operation
 *     setTimeout(() => {
 *       reject(new CustomError("Something went wrong"));
 *     }, 1000);
 *   });
 *
 *   const result = await catchErrorTyped(promise, [CustomError]);
 *
 *   if (result[0] instanceof CustomError) {
 *     console.error("Caught a CustomError:", result[0].extraProp);
 *   } else {
 *     console.log("Promise resolved successfully with value:", result[1]);
 *   }
 * }
 *
 * example();
 * */
function catchErrorTyped<T, E extends new (message?: string) => Error>(
    promise: Promise<T>,
    errorsToCatch?: E[],
): Promise<[undefined, T] | [InstanceType<E>]> {
    return promise
        .then((data) => {
            return [undefined, data] as [undefined, T];
        })

        .catch((error) => {
            if (errorsToCatch == undefined) {
                return [error];
            }
            if (errorsToCatch.some((e) => error instanceof e)) {
                return [error];
            }
            throw error;
        });
}

// example of error usage
class CustomError extends Error {
    name = "CustomError";
    extraProp = "ERROR: test";
}
