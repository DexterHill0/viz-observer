export interface VisualObserverEntry {
    target: Element;
    contentRect: DOMRectReadOnly;
    isAppearing: boolean;
}
export interface VisualObserverCallback {
    (this: VisualObserver, entries: VisualObserverEntry[], observer: VisualObserver): void;
}
/**
 * Create an observer that notifies when an element is resized, moved, or added/removed from the DOM.
 */
export declare class VisualObserver {
    #private;
    constructor(callback: VisualObserverCallback);
    disconnect(): void;
    observe(target: Element): void;
    unobserve(target: Element): void;
}
