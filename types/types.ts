export type ObjectValues<T> = T[keyof T];

export const CONST_EXAMPLE = {
    EXAMPLE_1: "one",
    EXAMPLE_2: "two",
    EXAMPLE_3: "three",
} as const;
export type CostExample = ObjectValues<typeof CONST_EXAMPLE>;
