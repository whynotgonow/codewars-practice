/*
Is the string uppercase?
    Task
    Create a method is_uppercase() to see whether the string is ALL CAPS. For example:
    
    is_uppercase("c") == False
    is_uppercase("C") == True
    is_uppercase("hello I AM DONALD") == False
    is_uppercase("HELLO I AM DONALD") == True
    is_uppercase("ACSKLDFJSgSKLDFJSKLDFJ") == False
    is_uppercase("ACSKLDFJSGSKLDFJSKLDFJ") == True
*/

String.prototype.isUpperCase = function () {
    let s = this.toString();
    return !!(s && s.toUpperCase() === s)
};

console.log('C'.isUpperCase());


/*
note -->
    注意：此处需要调用实例上的方法，也就是需要this,this在箭头函数中没有意义
*/
/*
solutions -->
1)
    String.prototype.isUpperCase = function () {
        return this == this.toUpperCase()
    };
    
    
2)
    String.prototype.isUpperCase = function() {
        return this.toUpperCase() === this.toString();
    }
*/

