/**
 * 
 */

export default (...args: any[]) => (x: any) => args.reduce((res, cb) => cb(res), x)