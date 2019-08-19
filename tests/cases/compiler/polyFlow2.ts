function f1<X extends "t" | "f">(x: X): { t: number, f: boolean}[X] {
  if (x === "t") {
      return 1;
  } else {
      return true;
  }
}

function f2<X extends "t" | "f">(x: X): { t: number, f: boolean }[X] {
  if (x === "t") {
      return true;
  } else {
      return 1;
  }
}

function f3<X extends "a" | "b" | "c">(x: X): { a: number, b: boolean, c: string }[X] {
    if (x === "a") {
        return 1;
    } else {
        if (x === "b") {
            return true;
        } else {
            return "z";
        }
    }
}

function f4<X extends "t" | "f">(x: X, b: "t" | "f"): { t: number, f: boolean }[X] {
    if (b === "t") {
        return 1;
    } else {
        return true;
    }
}

function f5<T extends "t" | "f">(str: T, ft: { t: number, f: boolean }[T]): { t: number, f: boolean }[T] {
    if (str === "t") {
      const n: number = ft;
      return 1;
    } else {
      return true;
    }
  }