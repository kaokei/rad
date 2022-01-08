import {
  randomMulti,
  evenlyDistributed,
  randomDistribution,
} from '../src/index';

import * as ss from 'simple-statistics';

function distance(arr: number[]) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      sum += Math.abs(arr[i] - arr[j]);
    }
  }
  return sum;
}

const samples = [
  [10, 10, 20],
  [100, 200, 300],
  [100, 20000, 30000],
  [1000, 3000, 4000],
  [1000, 30000, 40000],
  [10000, 40000, 50000],
  [10000, 400000, 500000],
] as Array<[number, number, number]>;

const SAMPLE_COUNT = 9999;

/**
 * 计算方差
 * 似乎没有明显差距
 */
function test1() {
  const result = [];
  for (const sample of samples) {
    const currentResult = [[], [], []] as [number[], number[], number[]];
    for (let i = 0; i < SAMPLE_COUNT; i++) {
      currentResult[0].push(ss.sampleVariance(randomMulti(...sample)));
      currentResult[1].push(ss.sampleVariance(evenlyDistributed(...sample)));
      currentResult[2].push(ss.sampleVariance(randomDistribution(...sample)));
    }
    const newResult = currentResult.map(item => ss.mean(item));
    result.push(newResult);
  }
  console.log('输出方差结果 => ', JSON.stringify(result, null, 2));
}

/**
 * 计算所有点之间的距离
 */
function test2() {
  const result = [];
  for (const sample of samples) {
    const currentResult = [[], [], []] as [number[], number[], number[]];
    for (let i = 0; i < SAMPLE_COUNT; i++) {
      currentResult[0].push(distance(randomMulti(...sample)));
      currentResult[1].push(distance(evenlyDistributed(...sample)));
      currentResult[2].push(distance(randomDistribution(...sample)));
    }
    const newResult = currentResult.map(item => ss.mean(item));
    result.push(newResult);
  }
  console.log('输出距离结果 => ', JSON.stringify(result, null, 2));
}

test2();

/*
// 以下是方差的输出结果
// 看起来没什么区别
// const SAMPLE_COUNT = 999999;
[
  [
    8.252475385808719,
    9.166666666666666,
    9.209847243180576
  ],
  [
    833.0819312473858,
    841.6666666666666,
    841.8500780808862
  ],
  [
    8333253.217962939,
    8417473.331720132,
    8417988.098825537
  ],
  [
    83330.70708807863,
    83416.66666666667,
    83416.83278424051
  ],
  [
    8333657.196446534,
    8341674.78936479,
    8341683.896522445
  ],
  [
    8333425.416601894,
    8334166.666666667,
    8334166.894598825
  ],
  [
    833345603.0048352,
    833416678.1441561,
    833416675.8027935
  ]
]
*/

/*
// 以下是距离的输出结果
// 看起来没什么区别
// const SAMPLE_COUNT = 9999;
输出距离结果 =>  [
  [
    148.42154215421542,
    165,
    159.4152415241524
  ],
  [
    164924.1313131313,
    166650,
    166585.6787678768
  ],
  [
    16492614.758775877,
    16665088.809780978,
    16661934.168416841
  ],
  [
    166476310.54945496,
    166666500,
    166665775.3212321
  ],
  [
    1665350644.9377937,
    1666664603.8289828,
    1666661881.3132312
  ],
  [
    166648706091.47205,
    166666665000,
    166666656572.44916
  ],
  [
    1666452658179.0918,
    1666666649632.567,
    1666666667495.2444
  ]
]
*/
