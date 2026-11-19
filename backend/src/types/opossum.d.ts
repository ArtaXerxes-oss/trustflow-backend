/**
 * Minimal ambient declaration for `opossum`. The package ships no type definitions and
 * `@types/opossum` is not part of this project's dependencies. Without this shim strict
 * TypeScript compilation fails at the circuit-breaker import.
 */
declare module 'opossum' {
  export default class Breaker<T = unknown> {
    constructor(fn: (...args: unknown[]) => Promise<T>, options?: Record<string, unknown>);
    on(event: string, listener: (...args: unknown[]) => void): this;
    fire(...args: unknown[]): Promise<unknown>;
    opened: boolean;
    halfOpen: boolean;
    stats: Record<string, unknown>;
    close(): void;
  }
}
