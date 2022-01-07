/**
 * 生成一个随机数字
 * 包含v1
 * 不包含v2
 *
 * @export
 * @param {number} v1
 * @param {number} v2
 * @return {*}
 */
export function randomOne(v1: number, v2: number) {
  const randomGap = Math.random() * (v2 - v1);
  return v1 + Math.floor(randomGap);
}

/**
 * 多次执行随机函数
 *
 * @export
 * @param {number} num
 * @param {number} start
 * @param {number} end
 */
export function randomMulti(num: number, start: number, end: number) {
  const res = [];
  for (let i = 0; i < num; i++) {
    res.push(randomOne(start, end));
  }
  return res;
}

/**
 * 平均分布
 * 先平均再随机
 *
 * @export
 * @param {number} num
 * @param {number} start
 * @param {number} end
 */
export function evenlyDistributed(num: number, start: number, end: number) {
  const total = end - start;
  const per = total / num;
  const res = [];

  for (let i = 0; i < num; i++) {
    const v1 = start + per * i;
    const v2 = start + per * (i + 1);

    if (i + 1 === num) {
      res.push(randomOne(v1, end));
    } else {
      res.push(randomOne(v1, v2));
    }
  }

  return res;
}

/**
 * 既保证随机又保证一定的平均分布
 *
 * @export
 * @param {number} num
 * @param {number} start
 * @param {number} end
 */
export function randomDistribution(num: number, start: number, end: number) {
  const total = end - start; // 总长度
  const per = total / num; // 平均每段的长度
  const res = []; // 存储随机结果

  let v1 = start;
  let v2 = start;
  for (let i = 0; i < num; i++) {
    v2 = start * 2 + per * (2 * i + 1) - v1;
    v2 = Math.min(v2, end);
    v1 = randomOne(v1, v2);
    res.push(v1);
  }

  return res;
}
