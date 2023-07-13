import 'react';

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    isValid?: boolean;
    // ref?: React.RefObject<T>;
  }
}