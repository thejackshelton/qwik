/**
 * @public
 */
export const untypedAppUrl = function appUrl(
  route: string,
  params?: Record<string, string>,
  paramsPrefix: string = ''
): string {
  const path = route.split('/');
  for (let i = 0; i < path.length; i++) {
    const segment = path[i];
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const isSpread = segment.startsWith('[...');
      const key = segment.substring(segment.startsWith('[...') ? 4 : 1, segment.length - 1);
      const value = params ? params[paramsPrefix + key] || params[key] : '';
      path[i] = isSpread ? value : encodeURIComponent(value);
    }
  }
  return path.join('/');
};

/**
 * Creates a new object from `obj` by omitting a set of `keys`.
 *
 * @public
 */
export function omitProps<T, KEYS extends keyof T>(obj: T, keys: KEYS[]): Omit<T, KEYS> {
  const omittedObj: Record<string, any> = {};
  for (const key in obj) {
    if (!key.startsWith('param:') && !keys.includes(key as any)) {
      omittedObj[key] = obj[key];
    }
  }
  return omittedObj as Omit<T, KEYS>;
}
