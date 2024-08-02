export type Styles = {
  base: string;
  variants: {
    [key: string]: {
      [key: string]: string;
    };
  };
}

export type Variants<T extends Styles> = {
  [K in keyof T["variants"]]?: keyof T["variants"][K];
}

export function style<T extends Styles>(styles: T, variants: Variants<T>, className?: string): string {
  const classNames = [styles.base];

  for (const variantKey in variants) {
    const variantValue = variants[variantKey];
    const variantStyle = styles.variants[variantKey as keyof typeof styles.variants][variantValue as string];

    classNames.push(variantStyle);
  }

  if (className) classNames.push(className);

  return classNames.join(" ");
}

export function concat(...classNames: (string | undefined)[]) {
  return classNames.join(" ");
}