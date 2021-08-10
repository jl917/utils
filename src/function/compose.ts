/**
 * 
 */

export default (...args: any[]) => (x: any) => args.reduceRight((res, cb) => cb(res), x)