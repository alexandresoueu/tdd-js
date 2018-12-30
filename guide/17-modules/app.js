import { union as juntaTudo, uniq as naoRepete} from 'ramda'

import sum, { sub, multiplication, div as division, PI } from './utils'

import react from 'react'
import reactDOM from 'react-dom'

const arr1 = [1, 1, 1, 2, 2, 3, 4, 5, 6, 6]
const arr2 = [5, 6, 6, 6, 7, 7, 8, 9, 10, 1]

const arr3 = juntaTudo(arr1, arr2)

const arr4 = naoRepete(arr1)

console.log('Union is working', arr3)
console.log('Uniq is working', arr4)

console.log('module export default', sum(2,4))
console.log('module export function', sub(2,4))
console.log('module export above function', multiplication(2,4))
console.log('module export above function together', division(2,4))
console.log('module export Variable', PI)