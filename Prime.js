//
// Created by Raoul Grosser on Thursday, June 6, 2013
// RaoulCoder@outlook.com
//
// Prints prime numbers up to 1000.
//
(function (sys) {
        var i = 2,
            isPrime = function () {
                    var j = 2
                        max = i / 2;
                    while ( j <= max ) {
                        if ( i % j === 0 ) {
                                return false;
                        }
                        j += 1;
                    }
                    return true;
            },
            result = [];
 
        while ( i < 1000 ) {
                if ( isPrime() ) {
                        result.push(i);
                }
                i += 1;
        }
 
        sys.puts(result);
 
}(require("sys")));
