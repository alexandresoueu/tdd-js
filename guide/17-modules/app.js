import { union as juntaTudo, uniq as naoRepete} from 'ramda'

const arr1 = [1, 1, 1, 2, 2, 3, 4, 5, 6, 6]
const arr2 = [5, 6, 6, 6, 7, 7, 8, 9, 10, 1]

const arr3 = juntaTudo(arr1, arr2)

const arr4 = naoRepete(arr1)
console.log('Union is working', arr3)
console.log('Uniq is working', arr4)