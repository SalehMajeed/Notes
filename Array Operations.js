// Array Operations
/*
    // Instance Properties
1.->    length -> it returns the no. of element in an array.
        eg. const clothing = ['shoes', 'shirts', 'socks', 'sweaters']
            console.log(clothing.length) //4

2.->    ?

    // Static Methods

3.->    Array.from() -> it creates new array from and iterable object.
        Array.from(arrayLike [, mapFn [, thisArg]])
        eg. console.log(Array.from([1, 2, 3], x => x + x)) //Array [2, 4, 6]

4.->    Array.isArray() -> it return true or false on the basis of whether given is array or not
        Array.isArray(value)
        eg. Array.isArray([1, 2, 3])  // true
            Array.isArray({foo: 123}) // false
            Array.isArray('foobar')   // false
            Array.isArray(undefined)  // false

5.->    Array.of() -> it creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.
        eg. Array.of(7)       // [7] 
            Array.of(1, 2, 3) // [1, 2, 3]
            Array(7)          // array of 7 empty slots
            Array(1, 2, 3)    // [1, 2, 3]

    // Instance Methods

6.->    concat() -> it merge more than 1 array.it return new array.
        eg. const array1 = ['a', 'b', 'c']
            let array2 = ['d', 'e', 'f']
            let array3 = []
            array2.concat(array1)
            array3 = array2.concat(array1)
            console.log(array2)	//["d", "e", "f"]
            console.log(array3) //["a", "b", "c", "d", "e", "f"]

7.->    copyWithin() -> it copies part of an array to another location in the same array and returns it without modifying its length.it is mutable.
        arr.copyWithin(target[, start[, end]])
        eg. const array1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
            console.log(array1.copyWithin(0, 3, 6)) // ["d", "e", "c", "d", "e", "f", "g", "h"]
            console.log(array1.copyWithin(1, 3)) // ["d", "d", "e", "d", "e"]

8.->    entries() -> it returns a new Array Iterator object that contains the key/value pairs for each index in the array.
        array.entries()
        eg. const array1 = ['a', 'b', 'c']
            const iterator1 = array1.entries()
            console.log(iterator1.next().value) // [0, "a"]
            console.log(iterator1.next().value)	// [1, "b"]

9.->    every() -> it returns boolean value by satisy the condition upon all element of the array.if each element satisfy then it returns true.
        every does not mutate the array on which it is called.
        arr.every(callback(element[, index[, array]])[, thisArg])
        eg. const isBelowThreshold = (currentValue) => currentValue < 40
            const array1 = [1, 30, 39, 29, 10, 13]
            console.log(array1.every(isBelowThreshold)) // true

10.->   fill() -> it changes all elements in an array to a static value,it returns modified array.
        arr.fill(value[, start[, end]])
        eg. const array1 = [1, 2, 3, 4]
            console.log(array1.fill(0, 2, 4)) // [1, 2, 0, 0]
            console.log(array1.fill(5, 1)) // [1, 5, 5, 5]
            console.log(array1.fill(6)) // [6, 6, 6, 6]

11.->   filter() -> it created new array of elements that satisfies the conditions.
        let newArray = arr.filter(callback(element[, index, [array]])[, thisArg])
        eg. const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']
            console.log(words.filter(word => word.length > 6)) // ["exuberant", "destruction", "present"]

12.->   find() -> it returns the element from array if satisfies condition.
        arr.find(callback(element[, index[, array]])[, thisArg])
        eg. const array1 = [5, 12, 8, 130, 44, 44]
            const found = array1.find(element => element > 4)
            console.log(found) // 5


13.->   findIndex() -> it returns the index of first element that satifies the condition.
        arr.findIndex(callback( element[, index[, array]] )[, thisArg])
        eg. const array1 = [5, 12, 8, 130, 44]
            const isLargeNumber = (element) => element > 13
            console.log(array1.findIndex(isLargeNumber)) // 3

14.->   forEach() -> it executes a provided function once for each array element.
        arr.forEach(callback(currentValue [, index [, array]])[, thisArg])
        eg. const array1 = ['a', 'b', 'c']
            array1.forEach(element => console.log(element))
            // "a"
            // "b"
            // "c"

15.->   includes() -> it check wether an element is included in array or not and return ture or false.it's case sensitive.
        arr.includes(valueToFind[, fromIndex])
        eg. const pets = ['cat', 'dog', 'cat', 'bat']
            console.log(pets.includes('cat',1))
            console.log(pets.includes('cat'))
            console.log(pets.includes('cat',3))
            
16.->   indexOf() -> returns the first index if elements exist in array.
        arr.indexOf(searchElement[, fromIndex])
        eg. const beasts = ['ant', 'bison', 'camel', 'bison', 'duck', 'bison']
            console.log(beasts.indexOf('bison')) // 1
            console.log(beasts.indexOf('bison', 4)) // 5
            console.log(beasts.indexOf('giraffe')) // -1

17.->   join() -> creates and returns a new string by concatenating all of the elements in an array (or an array-like object), 
        separated by commas or a specified separator string. If the array has only one item,
        then that item will be returned without using the separator.
        arr.join([separator])
        eg. const elements = ['Fire', 'Air', 'Water']
            console.log(elements.join()) // "Fire,Air,Water"
            console.log(elements.join('')) // "FireAirWater"
            console.log(elements.join('-')) // "Fire-Air-Water"

18.->   keys() -> returns a new Array Iterator object that contains the keys for each index in the array.
        arr.keys()
        eg. const array1 = ['a', 'b', 'c']
            const k = array1.keys()
            console.log(k.next().value) // 0
            console.log(k.next().value) // 1
            console.log(k.next().value) // 2
            console.log(k.next()) // undefined

19.->   lastIndexOf() ->  returns the last index at which a given element can be found in the array.it is backward.
        arr.lastIndexOf(searchElement[, fromIndex])
        eg. const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo']
            console.log(animals.lastIndexOf('Dodo',2)) // 3
            console.log(animals.lastIndexOf('Dodo')) // 3
            console.log(animals.lastIndexOf('Tiger')) // 1

20.->   map() -> creates a new array populated with the results of calling a provided function on every element in the calling array.
        arr.map(function callback( currentValue[, index[, array]]){}[, thisArg])
        eg. const array1 = [1, 4, 9, 16]
            let map1 = array1.map(x => x==1?"hi":"bye")
            let map2 = array1.map(x => x*2)
            console.log(map1) // ["hi", "bye", "bye", "bye"]
            console.log(map2) // [2, 8, 18, 32]

21.->   pop() -> it removes the last element from an array and returns that element. This method changes the length of the array.
        arrName.pop()
        eg. const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato']
            console.log(plants.pop()) //"tomato"
            console.log(plants) // ["broccoli", "cauliflower", "cabbage", "kale"]
            plants.pop()
            console.log(plants) // ["broccoli", "cauliflower", "cabbage"]

            var myFish = {0:'angel', 1:'clown', 2:'mandarin', 3:'sturgeon', length: 4}
            var popped = Array.prototype.pop.call(myFish) //same syntax for using apply( )
            console.log(myFish) // {0:'angel', 1:'clown', 2:'mandarin', length: 3} 
            console.log(popped) // 'sturgeon'

22.->   push() -> it adds one or more elements to the end of an array and returns the new length of the array.
        arr.push([element1[, ...[, elementN]]])
        eg. const animals = ['pigs', 'goats', 'sheep']
        const count = animals.push('cows')
        console.log(count) // 4
        console.log(animals) // ["pigs", "goats", "sheep", "cows"]
        animals.push('chickens', 'cats', 'dogs')
        console.log(animals) // ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]

23.->   reduce() -> it executes a reducer function (that you provide) on each element of the array, resulting in single output value.
        arr.reduce(callback( accumulator, currentValue, [, index[, array]] )[, initialValue])
        eg. const array1 = [1, 2, 3, 4]
            const reducer = (accumulator, currentValue) => accumulator + currentValue // 1 + 2 + 3 + 4
            console.log(array1.reduce(reducer)) // 10
            // 5 + 1 + 2 + 3 + 4
            console.log(array1.reduce(reducer, 5)) // 15
            
24.->   reduceRight() -> it applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.
        arr.reduceRight(callback(accumulator, currentValue[, index[, array]])[, initialValue])
        eg. const array1 = [[0, 1], [2, 3], [4, 5]].reduceRight(
              (accumulator, currentValue) => accumulator.concat(currentValue))
            console.log(array1) // [4, 5, 2, 3, 0, 1]

25.->   reverse() -> it returns array elements from ending to starting index.it changes the array.
        a.reverse()
        eg. const array1 = ['one', 'two', 'three']
        console.log('array1:', array1) // "array1:" Array ["one", "two", "three"]
        const reversed = array1.reverse()
        console.log('reversed:', reversed) // "reversed:" Array ["three", "two", "one"]
        // Careful: reverse is destructive -- it changes the original array.
        console.log('array1:', array1) // ["three", "two", "one"]

26.->   shift() -> it removes the first element from an array and returns that removed element.
        arr.shift()
        eg. const array1 = [1, 2, 3]
            const firstElement = array1.shift()
            console.log(array1) // [2, 3]
            console.log(firstElement) // 1

27.->   slice() -> it returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included),
        where start and end represent the index of items in that array. The original array will not be modified.
        arr.slice([start[, end]])
        const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']
        console.log(animals.slice(2)) // ["camel", "duck", "elephant"]
        console.log(animals.slice(2, 4)) // ["camel", "duck"]
        console.log(animals.slice(1, 5)) // ["bison", "camel", "duck", "elephant"]

28.->   some() -> it tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
        arr.some(callback(element[, index[, array]])[, thisArg])
        eg. const array = [1, 2, 3, 4, 5]
            const even = (element) => element % 2 == 0
            console.log(array.some(even)) // true

29.->   sort() -> it  sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, 
        built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
        arr.sort([compareFunction])
        eg. const months = ['March', 'Jan', 'Feb', 'Dec']
            months.sort()
            console.log(months)// ["Dec", "Feb", "Jan", "March"]

            const array1 = [1, 30, 4, 21, 100000]
            array1.sort()
            console.log(array1) // [1, 100000, 21, 30, 4]

30.->   splice() -> it changes the content of an array
        array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
        eg. const months = ['Jan', 'March', 'April', 'June']
            months.splice(1, 0, 'Feb')
            console.log(months) // ["Jan", "Feb", "March", "April", "June"]

            months.splice(4, 1, 'May')
            console.log(months) // ["Jan", "Feb", "March", "April", "May"]

            months.splice(4, 1)
            console.log(months) // ["Jan", "Feb", "March", "April", "May"]

31.->   toLocaleString() -> it convert array into local string and string may be vary according to local.
        arr.toLocaleString([locales[, options]])
        eg. const array1 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')]
            const localeString = array1.toLocaleString('en', { timeZone: 'UTC' })
            console.log(localeString) // "1,a,12/21/1997, 2:12:00 PM"

32.->   toString() -> it returns a string representing the specified array and its elements.
        arr.toString()
        eg. const array1 = [1, 2, 'a', '1a']
            console.log(array1.toString()) // "1,2,a,1a"

33.->   unshift() -> it adds one or more elements to the beginning of an array and returns the new length of the array.
        arr.unshift(element1[, ...[, elementN]])
        eg. const array1 = [1, 2, 3]
            console.log(array1.unshift(4, 5)) // 5
            console.log(array1) // [4, 5, 1, 2, 3]

34.->   values() -> it returns a new Array Iterator object that contains the values for each index in the array.
        arr.values()
        eg. const array1 = ['a', 'b', 'c']
            const iterator = array1.values()
            console.log(iterator.next()) // Object { value: "a", done: false }
            console.log(iterator.next()) // Object { value: "b", done: false }
            console.log(iterator.next()) // Object { value: "c", done: false }
            console.log(iterator.next()) // Object { value: undefined, done: true }

35.->   @@iterator -> it is part of The iterable protocol, that defines how to synchronously iterate over a sequence of values.
        arr[Symbol.iterator]()
        eg. var arr = ['a', 'b', 'c', 'd', 'e']
            var eArr = arr[Symbol.iterator]()
            console.log(eArr.next().value) // a
            console.log(eArr.next().value) // b
            console.log(eArr.next().value) // c
            console.log(eArr.next().value) // d
            console.log(eArr.next().value) // e
*/