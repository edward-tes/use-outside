import { ReactElement } from "react";

interface RefObject<T> {
  readonly current: T | null
}

export declare const useOutside: (
  elements: RefObject<ReactElement>[],
  onOutside: (e: MouseEvent) => void,
  eventName: string
) => void;
