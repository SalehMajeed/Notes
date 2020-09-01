// Object Operations
/*
    //  Constructor
1.->    Object()->  When called in a non-constructor context, Object behaves identically to new Object().

        new Object()
        new Object(value)

        let o = new Object()
        o.foo = 42
        console.log(o) // { foo: 42 }

    //  Static methods->

2.->    Object.assign()->  it copies all enumerable own properties from one or more source objects to a target object. It returns the target object.

        Object.assign(target, ...sources)

        const target = { a: 1, b: 2 }
        const source = { b: 4, c: 5 }
        const source1 = { d: 6, e: 7 }
        Object.assign(target, source, source1)
        console.log(target) // { a: 1, b: 4, c: 5, d: 6, e: 7 }

3.->    Object.create()->  it creates a new object, using an existing object as the prototype of the newly created object.

        Object.create(proto, [propertiesObject])

        const person = {
          isHuman: false,
          printIntroduction: function() {
            console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`)
          }
        }
        const me = Object.create(person)
        console.log(me) // { }
        me.name = 'Matthew' // "name" is a property set on "me", but not on "person"
        me.isHuman = true // inherited properties can be overwritten
        me.printIntroduction() // "My name is Matthew. Am I human? true"
        console.log(me) // { name: "Matthew", isHuman: true }

4.->    Object.defineProperty()-> it defines a new property directly on an object, or modifies an existing property on an object,
        and returns the object.

        Object.defineProperty(obj, prop, descriptor)

        const object1 = {}
        Object.defineProperty(object1, 'property1', {
          value: 45,
          writable: false
        })
        console.log(object1.property1) // 45

5.->    Object.defineProperties()-> defines new or modifies existing properties directly on an object, returning the object.

        Object.defineProperties(obj, props)

        const object1 = {}

        Object.defineProperties(object1, {
          property1: {
            value: 42,
            writable: true
          },
          property2: {
          	value: 40
          }
        })
        console.log(object1.property1) // 42
        object1.property1 = 1
        console.log(object1.property1) // 1
        console.log(object1.property2) // 40

6.->    Object.entries()-> it returns an array of a given object's own enumerable string-keyed property [key, value] pairs,
        in the same order as that provided by a for...in loop.
        (The only important difference is that a for...in loop enumerates properties in the prototype chain as well).

        Object.entries(obj)

        const object1 = {
          a: 'somestring',
          b: 42
        }
        for (const [key, value] of Object.entries(object1)) {
          console.log(`${key}: ${value}`)
        }
        // "a: somestring"
        // "b: 42"
        console.log(Object.entries(object1)) //  [ ["a", "somestring"], ["b", 42] ]

7.->    Object.freeze()-> freezes an object. A frozen object can no longer be changed; freezing an object prevents new properties
        from being added to it, existing properties from being removed, prevents changing the enumerability, configurability,
        or writability of existing properties, and prevents the values of existing properties from being changed. In addition,
        freezing an object also prevents its prototype from being changed. freeze() returns the same object that was passed in.

        Object.freeze(obj)

        const obj = {
          prop: 42
        }
        Object.freeze(obj)
        obj.prop = 33 // Throws an error in strict mode
        console.log(obj.prop) // 42


8.->    Object.fromEntries()-> transforms a list of key-value pairs into an object.

        Object.fromEntries(iterable)

        const entries = new Map([
        ['foo', 'bar'],
        ['baz', 42]
        ])
        const obj = Object.fromEntries(entries)
        console.log(obj) // { foo: "bar", baz: 42 }


9.->    Object.getOwnPropertyDescriptor()-> it returns an object describing the configuration of a specific property on a given object
        (that is, one directly present on an object and not in the object's prototype chain). The object returned is mutable but mutating
        it has no effect on the original property's configuration.

        Object.getOwnPropertyDescriptor(obj, prop)

        const object1 = {
          property1: 42
        }
        const descriptor1 = Object.getOwnPropertyDescriptor(object1, 'property1')
        console.log(descriptor1.configurable) // true
        console.log(descriptor1.value) // 42


10.->   Object.getOwnPropertyDescriptors()-> it returns all own property descriptors of a given object.

        Object.getOwnPropertyDescriptors(obj)

        const object1 = {
          property1: 42,
          property2: 3
        }
        const descriptors1 = Object.getOwnPropertyDescriptors(object1)
        console.log(descriptors1.property1.writable) // true
        console.log(descriptors1.property1.value) // 42
        console.log(descriptors1.property2.value) // 3

11.->   Object.getOwnPropertyNames()-> it returns an array of all properties (including non-enumerable properties except for those which use Symbol)
        found directly in a given object.

        Object.getOwnPropertyNames(obj)

        const object1 = {
          a: 1,
          b: 2,
          c: 3,
          d: "dammn"
        }
        console.log(Object.getOwnPropertyNames(object1)) // ["a", "b", "c", "d"]
        let x = Object.getOwnPropertyNames("foo") // ["0", "1", "2", "length"]

12.->   Object.getOwnPropertySymbols()-> it returns an array of all symbol properties found directly upon a given object.

        Object.getOwnPropertySymbols(obj)

        const object1 = {}
        const a = Symbol('a')
        const b = Symbol.for('b')
        object1[a] = 'localSymbol'
        object1[b] = 'globalSymbol'
        const objectSymbols = Object.getOwnPropertySymbols(object1)
        console.log(objectSymbols.length) // 2
        console.log(objectSymbols) // [Symbol(a), Symbol(b)]

13.->   Object.getPrototypeOf()-> it returns the prototype (i.e. the value of the internal [[Prototype]] property) of the specified object.

        Object.getPrototypeOf(obj)

        const prototype1 = {}
        const object1 = Object.create(prototype1)
        console.log(Object.getPrototypeOf(object1) === prototype1) // true

14.->   Object.is()-> it  determines whether two values are the same value.

        Object.is(value1, value2)

        Object.is('foo', 'foo')     // true
        Object.is(window, window)   // true

        Object.is('foo', 'bar')     // false
        Object.is([], [])           // false

        var foo = { a: 1 }
        var bar = { a: 1 }
        Object.is(foo, foo)         // true
        Object.is(foo, bar)         // false

        Object.is(null, null)       // true

        // Special Cases
        Object.is(0, -0)            // false
        Object.is(-0, -0)           // true
        Object.is(NaN, 0/0)         // true

15.->   Object.isExtensible()-> it determines if an object is extensible (whether it can have new properties added to it).

        Object.isExtensible(obj)

        const object1 = {}
        console.log(Object.isExtensible(object1)) // true
        Object.freeze(object1)
        console.log(Object.isExtensible(object1)) // false

16.->   Object.isFrozen()-> it determines if an object is frozen.

        Object.isFrozen(obj)

        const object1 = {
          property1: 42
        }
        console.log(Object.isFrozen(object1)) // false
        Object.freeze(object1)
        console.log(Object.isFrozen(object1)) // true

17.->   Object.isSealed()-> it determines if an object is sealed.

        Object.isSealed(obj)

        const object1 = {
          property1: 42
        }
        console.log(Object.isSealed(object1)) // false
        Object.seal(object1)
        console.log(Object.isSealed(object1)) // true

18.->   Object.keys()-> it  returns an array of a given object's own enumerable property names,
        iterated in the same order that a normal loop would.

        Object.keys(obj)

        const object1 = {
          a: 'somestring',
          b: 42,
          c: false
        }
        console.log(Object.keys(object1)) // ["a", "b", "c"]

19.->   Object.preventExtensions()-> it prevents new properties from ever being added to an object (i.e. prevents future extensions to the object).

        Object.preventExtensions(obj)

        const object1 = {}
        Object.preventExtensions(object1)
        Object.defineProperty(object1, 'property1', {
          value: 42
        })
        console.log(e) // TypeError: Cannot define property property1, object is not extensible

20.->   Object.seal()-> it seals an object, preventing new properties from being added to it and marking all
        existing properties as non-configurable. Values of present properties can still be changed as long as they are writable.

        Object.seal(obj)

        const object1 = {
          property1: 42
        }
        Object.seal(object1)
        object1.property1 = 33
        console.log(object1.property1) // 33
        delete object1.property1 // cannot delete when sealed
        console.log(object1.property1) // 33

21.->   Object.setPrototypeOf()-> it sets the prototype (i.e., the internal [[Prototype]] property) of a specified object
        to another object or null. it is slow.

        Object.setPrototypeOf(obj, prototype)

        var dict = Object.setPrototypeOf({}, null)

22.->   Object.values()-> it returns an array of a given object's own enumerable property values, in the same order as
        that provided by a for...in loop. (The only difference is that a for...in loop enumerates properties in the prototype chain as well.)

        Object.values(obj)

        const object1 = {
          a: 'somestring',
          b: 42,
          c: false
        }
        console.log(Object.values(object1)) // ["somestring", 42, false]

        // Instance properties->

23.->   Object.prototype.constructor-> it returns a reference to the Object constructor function that created the instance object. Note that
        the value of this property is a reference to the function itself, not a string containing the function's name.

        function Tree(name) {
          this.name = name
        }

        let theTree = new Tree('Redwood')
        console.log('theTree.constructor is ' + theTree.constructor)

24.->   Object.prototype.__proto__-> The __proto__ property of Object.prototype is an accessor property (a getter function and a setter function)
        that exposes the internal [[Prototype]] (either an object or null) of the object through which it is accessed.
        it is no longer available and it is slow.

        var Circle = function () {}
        var shape = {}
        var circle = new Circle()
        shape.__proto__ = circle
        console.log(shape.__proto__ === circle) // true

25.->   Object.prototype.__noSuchMethod__-> By default, an attempt to call a method that doesn't exist on an object results in a TypeError being
        thrown. This behavior can be circumvented by defining a function at that object's __noSuchMethod__ member. The function takes two arguments,
        the first is the name of the method attempted and the second is an array of the arguments that were passed in the method call. The second
        argument is an actual array (that is, it inherits through the Array.prototype chain) and not the array-like arguments object.

        obj.__noSuchMethod__ = function (id, args) { . . . }


        // Instance methods

26.->   Object.prototype.__defineGetter__()-> (not to be use) it binds an object's property to a function to be called when that property is looked up.

        obj.__defineGetter__(prop, func)

        var o = {}
        o.__defineGetter__('gimmeFive', function() { return 5; })
        console.log(o.gimmeFive) // 5

27.->   Object.prototype.__defineSetter__()-> (not to be use) it binds an object's property to a function to be called when an attempt is made to set that property.

        obj.__defineSetter__(prop, fun)

        var o = {}
        o.__defineSetter__('value', function(val) { this.anotherValue = val; })
        o.value = 5
        console.log(o.value) // undefined
        console.log(o.anotherValue) // 5

28.->   Object.prototype.__lookupGetter__()-> (not to be use) it returns the function bound as a getter to the specified property.

        obj.__lookupGetter__(sprop)

        var obj = {
          get foo() {
            return Math.random() > 0.5 ? 'foo' : 'bar'
          }
        }
        // Non-standard and deprecated way
        obj.__lookupGetter__('foo')
        // (function() { return Math.random() > 0.5 ? 'foo' : 'bar'; })

        // Standard-compliant way
        Object.getOwnPropertyDescriptor(obj, "foo").get
        // (function() { return Math.random() > 0.5 ? 'foo' : 'bar'; })

29.->   Object.prototype.__lookupSetter__()-> (not to be use) it returns the function bound as a setter to the specified property.

        obj.__lookupSetter__(sprop)

        var obj = {
          set foo(value) {
            this.bar = value
          }
        }
        // Non-standard and deprecated way
        obj.__lookupSetter__('foo')
        // (function(value) { this.bar = value})

        // Standard-compliant way
        Object.getOwnPropertyDescriptor(obj, 'foo').set
        // (function(value) { this.bar = value })

30.->   Object.prototype.hasOwnProperty()-> it returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).

        obj.hasOwnProperty(prop)

        const object1 = {}
        object1.property1 = 42
        object1.toString = "Bool"
        console.log(object1.hasOwnProperty('property1')) // true
        console.log(object1.hasOwnProperty('toString')) // true
        console.log(object1.hasOwnProperty('hasOwnProperty')) // false


31.->   Object.prototype.isPrototypeOf()-> it checks if an object exists in another object's prototype chain.

        prototypeObj.isPrototypeOf(object)

        function object1() {}
        function object2() {}
        object1.prototype = Object.create(object2.prototype)
        const object3 = new object1()
        console.log(object1.prototype.isPrototypeOf(object3)) // true
        console.log(object2.prototype.isPrototypeOf(object3)) // true

32.->   Object.prototype.propertyIsEnumerable()-> it returns a Boolean indicating whether the specified property is enumerable and is the object's own property.

        obj.propertyIsEnumerable(prop)

        const object1 = {};
        const array1 = [];
        object1.property1 = 42;
        array1[0] = 42;
        console.log(object1.propertyIsEnumerable('property1')) // true
        console.log(array1.propertyIsEnumerable(0)) // true
        console.log(array1.propertyIsEnumerable(1)) // false
        console.log(array1.propertyIsEnumerable('length')) // false
        console.log(array1.propertyIsEnumerable(length)) // true

33.->   Object.prototype.toLocaleString()-> it returns a string representing the object. This method is meant to be overridden by derived objects for locale-specific purposes.

        obj.toLocaleString()
        
        const date1 = new Date(Date.UTC(2012, 11, 20, 3, 0, 0))
        console.log(date1.toLocaleString('ar-EG')) // "٢٠‏/١٢‏/٢٠١٢ ٤:٠٠:٠٠ ص"
        const number1 = 123456.789
        console.log(number1.toLocaleString('de-DE')) // "123.456,789"

34.->   Object.prototype.toString()-> it returns a string representing the object.

        obj.toString()

        function Dog(name) {
          this.name = name
        }
        const dog1 = new Dog('Gabby')
        Dog.prototype.toString = function dogToString() {
          return `${this.name}`
        }
        console.log(dog1.toString()) // "Gabby"

35.->   Object.prototype.unwatch()-> (not to be used) it removes a watchpoint set with the watch() method.

        obj.unwatch(prop)

36.->   Object.prototype.valueOf()-> it returns the primitive value of the specified object.

        object.valueOf()

        function MyNumberType(n) {
          this.number = n
        }
        MyNumberType.prototype.valueOf = function() {
          return this.number
        }
        const object1 = new MyNumberType(4)
        console.log(object1 + 3) // 7

37.->   Object.prototype.watch()-> (not to be used) it watches for a property to be assigned a value and runs a function when that occurs.

        obj.watch(prop, handler)

        const o = { p: 1 }
        o.watch('p', (id, oldval, newval) => {
          console.log('o.' + id + ' changed from ' + oldval + ' to ' + newval)
          return newval
        })
        o.p = 2
        o.p = 3
        delete o.p
        o.p = 4
        o.unwatch('p')
        o.p = 5
*/