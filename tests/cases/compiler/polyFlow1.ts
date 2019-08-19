function fx<X extends "t" | "f">(x: X, b: "t" | "f"): { t: number, f: boolean }[X] {
    if (b === "t") {
        return 1;
    } else {
        return true;
    }
}