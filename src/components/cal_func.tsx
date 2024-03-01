function Find_GCD(num1: any, num2: any) {
    if (num2 == 0)
        return num1;
    else
        return Find_GCD(num2, num1 % num2);
}

export function GcdFraction(mol: any, den: any) {
    const GCD: number = Find_GCD(mol, den);

    if (den / GCD != 1)
        return String(mol / GCD) + "/" + String(den / GCD);
    else
        return (mol / GCD);
}