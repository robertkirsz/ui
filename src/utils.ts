export const cn = (...classes: (string | boolean | null | undefined)[]) =>
  classes.filter(Boolean).join(' ')
