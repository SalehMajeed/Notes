// String Operations

/*
            // Instance Property
1.->    length -> length property returns the lenght of the string.
        eg. "hi".lenght => // 2

2.->    indexOf() -> it return the index value of the perticular string we can assign 2 parameters in it the 2nd parameters command it to 
            find index no. from given index. it is case sensitive.
        eg. str = "hi kjkljsdi"
            console.log(str.indexOf("i")) // 1
            console.log(str.indexOf("i",2)) // 10

3.->    substring() -> it returns the string from given index.it accept maximum two parameters in the case of 2 parameters it return string between
        given starting and ending index.
        eg. str = 'Mozilla'
            console.log(str.substring(2)) // zilla
            console.log(str.substring(2,7)) // zilla

4.->    charAt() -> it returns new string from perticular index position.
        eg. str = "the brown fox"
            console.log(`The character at index 4 is ${str.charAt(4)}`) //b

            it can also access like access of an array element like ->
            str[4] // b
        
            // Static Methods ->

5.->    fromCharCode() -> it returns the string by given code sequence of UTF-16. it Accept N parameters.
        the range is between 0 to 65535.
        eg. console.log(String.fromCharCode(65, 65, 65, 65)) //AAAA

6.->    fromCodePoint() -> it return the string by give code.it also accept N parameters.
        eg. console.log(String.fromCodePoint(65, 9733, 9842, 0x2F804)) //A★♲你

7.->    String.raw() -> ?

        // Instance methods

8.->    charCodeAt() -> it returns an integer from 0 to 65535.
        eg. const str = "the brown fox"
            console.log(`The character code ${str.charCodeAt('b')}`); //"The character code 116"

9.->    codePointAt() -> it returns a non-negative integer that is the Unicode code point value.
        eg. const icons = '☃★♲'
            console.log(icons.codePointAt(1)) //9733

10.->   concat() -> it concatenates the string argument and return new string. it Takes N parameters. use + and += instead concat method.
        eg. const str1 = 'Hello'
            const str2 = 'World'
            console.log(str1.concat(' ', str2)) //"Hello World"

11.->   includes() -> it returns true or false based upon whether sub string is in string or not.it is case sensitive. it has 2 parameters->
        str.includes(searchString[, position])
        eg. const sentence = 'The quick brown fox jumps over the lazy dog.'
            console.log(sentence.includes("fox") //true

12.->   endsWith() -> it determines whether a string ends with the characters of a specified string, returning true or false as appropriate.it 
        is case sensitive.
        eg. const str1 = 'Cats are the best!'
            console.log(str1.endsWith('best', 17)) // true
            const str2 = 'Is this a question?'
            console.log(str2.endsWith('?')) // true

13.->   indexOf() -> it return index no. of the string if found, otherwise false.it is case sensitive.
        str.indexOf(searchValue [, fromIndex])
        eg. const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?'
            console.log(paragraph.indexOf("dog")) // 40
            console.log(paragraph.indexOf('dog', (paragraph.indexOf("dog") +1))) //52

14.->   lastIndexOf() -> it returns last index of the string.it is case sensitive.
        str.lastIndexOf(searchValue[, fromIndex])
        eg. const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?'
            console.log(paragraph.lastIndexOf("dog")) // 52
            console.log(paragraph.lastIndexOf("dog",paragraph.indexOf("dog"))) //40

15.->   localeCompare() -> it returns a number indicating whether a reference string comes before, or after, or is the same as the given string in sort order.
        referenceStr.localeCompare(compareString[, locales[, options]])
        eg. const a = 'réservé'
            const b = 'Reserve'
            console.log(a.localeCompare(b)) //1
            console.log(a.localeCompare(b, 'en', { sensitivity: 'base' })) //0

16.->   The match() -> method retrieves the result of matching a string against a regular expression.
        eg. const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.'
        console.log(paragraph.match(/[A-Z]/g))
        str.match(regexp)

17.->   matchAll()?

18.->   normalize() -> it returns the Unicode Normalization Form of the string.
        str.normalize([form])
        eg. const name1 = '\u0041\u006d\u00e9\u006c\u0069\u0065';
            const name2 = '\u0041\u006d\u0065\u0301\u006c\u0069\u0065';
            console.log(`${name1.normalize()}, ${name2.normalize()}`)

19.-> padEnd() -> it gives the no. of pad as declared in function
        str.padEnd(targetLength [, padString])
        eg. const str1 = 'Breaded Mushrooms'
            console.log(str1.padEnd(34,',')) //"Breaded Mushrooms,,,,,,,,,,,,,,,,,"
            const str2 = '200';
            console.log(str2.padEnd(5))//"200  "

20,-> padStart() -> it give the no. of pad as declared at the starting of string
        str.padStart(targetLength [, padString])
        eg. const str1 = '5'
            console.log(str1.padStart(6, '-')) //"-----5"
            const fullNumber = '2034399002125581'
            console.log(fullNumber.padStart(fullNumber.length+32, '*')) //"********************************2034399002125581"s
        
21.->  repeat() -> constructs and returns a new string which contains the specified number of copies of the string on which it was called, 
        concatenated together.
        str.repeat(count)
        eg. const chorus = 'Oh Now I got this.'
            console.log(chorus.repeat(5)) //"Oh Now I got this.Oh Now I got this.Oh Now I got this.Oh Now I got this.Oh Now I got this."

22.->  replace() -> method returns a new string with some or all matches of a pattern replaced by a replacement.
        const newStr = str.replace(regexp|substr, newSubstr|function)
        eg. const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?'
            const regex = /dog/gi
            console.log(p.replace(regex, 'ferret'))//"The quick brown fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?"
            console.log(p.replace('dog', 'monkey'))//"The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"

23.->   replaceAll() -> ?

24.->   search() -> method executes a search for a match between a regular expression and this String object.
        eg. const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?'
            console.log(paragraph.search("fox")) //16
            console.log(paragraph[paragraph.search("fox")]) //f

25.->   slice() -> method extracts a section of a string and returns it as a new string, without modifying the original string.
        eg. const str = 'The quick brown fox jumps over the lazy dog.';
            console.log(str.slice(31)) //"the lazy dog."
            console.log(str.slice(4, 19)) //"quick brown fox"
            console.log(str.slice(-4)) //"dog."
            console.log(str.slice(-9, -5)) //"lazy"

26.->   split() -> it divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.
        str.split([separator[, limit]])
        eg. const str = 'The quick brown fox jumps over the lazy dog.'
            const words = str.split(' ',3)
            console.log(words) // ["The", "quick", "brown"]

27.->   startsWith() -> it determines whether a string begins with the characters of a specified string, returning true or false as appropriate.
        str.startsWith(searchString[, position])
        eg. const str1 = 'Saturday sat'
            console.log(str1.startsWith('Sat'))	// true
            console.log(str1.startsWith('sat',9)) //true

28.->   substr() -> it returns a portion of the string, starting at the specified index and extending for a given number of characters afterwards.
        str.substr(start[, length])
        eg. const str = 'Mozilla'
            console.log(str.substr(1, 2)) //"oz"
            console.log(str.substr(2)) //"zilla"

29.->   substring() -> it returns the part of the string between the start and end indexes, or to the end of the string.
        str.substring(indexStart[, indexEnd])
        eg. const str = 'Mozilla'
            console.log(str.substring(1, 3)) //"oz"
            console.log(str.substring(2)) //"zilla"

30.->   toLocaleLowerCase() -> it returns the calling string value converted to lower case, according to any locale-specific case mappings.
        str.toLocaleLowerCase()
        str.toLocaleLowerCase(locale) 
        str.toLocaleLowerCase([locale, locale, ...])
        eg. const dotted = 'İstanbul'
            console.log(`EN-US: ${dotted.toLocaleLowerCase('en-US')}`) //"i̇stanbul"
            console.log(`TR: ${dotted.toLocaleLowerCase('tr')}`) //"istanbul"

31.->   toLocaleUpperCase() -> it returns the calling string value converted to upper case, according to any locale-specific case mappings.
        str.toLocaleUpperCase()
        str.toLocaleUpperCase(locale) 
        str.toLocaleUpperCase([locale, locale, ...])
        eg. const city = 'istanbul'
            console.log(city.toLocaleUpperCase('en-US')) //"ISTANBUL"
            console.log(city.toLocaleUpperCase('TR')) //"İSTANBUL"

32.->   toLowerCase() -> it converts the string into Lower Case.
        eg. const sentence = 'The quick brown fox jumps over the lazy dog.'
            console.log(sentence.toLowerCase()) //"the quick brown fox jumps over the lazy dog."

33.->   toUpperCase() -> it converts the string into upper case.
        eg. const sentence = 'The quick brown fox jumps over the lazy dog.'
            console.log(sentence.toUpperCase()) //"THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."

34.->   toString() -> it return the string from string object.
        eg. const stringObj = new String('foo')
            console.log(stringObj) //String { "foo" }
            console.log(stringObj.toString()) //"foo"

35.->   trim() -> it remove all the white spaces from both ends.
        eg. const greeting = '   Hello world!   '
            console.log(greeting.trim()) //"Hello world!"

36.->  trimStart() -> it removes white spaces from beginning.
        str.trimStart()
        str.trimLeft()
        eg. const greeting = '   Hello world!   '
            console.log(greeting.trimStart()) //"Hello world!   ";

37.->   trimEnd() -> it remvoes white spaces from ending.
        eg. const greeting = '   Hello world!   '
            console.log(greeting.trimEnd()) //"   Hello world!"
            
38.->   valueOf() -> it returns the primitive value of a String object.
        This method is usually called internally by JavaScript and not explicitly in code.
        eg. const stringObj = new String('foo')
            console.log(stringObj) //String { "foo" }
            console.log(stringObj.valueOf()) //"foo"

39.->   [@@iterator]() -> it returns a new Iterator object that iterates over the code points of a String value, returning each code point as a String value.
        str[Symbol.iterator]
        eg. var str = 'ABC'
            var strIter = str[Symbol.iterator]()
            console.log(strIter.next().value) // "A"
            console.log(strIter.next().value) // "B"
*/ 
