function triangle(length) {
    var alas = 8;
    var tinggi = 8;
    var length = alas/tinggi ;
    var z = '';    
    for (let i = 0; i < 10; i++) {
        for (let j = 1; j <= i-1; j++) {
            z+= length + 1
            while (i < length) {
                i+2
            }
        }
        z+= '\n'
    }  
    return z += '\n'
}

console.log(triangle(8));

// 2 : +1
// 3 5 : +1 +2
// 7 11 13 : +2 +4 +2
// 17 19 23 29 : +4 +2 +4 +6
// 31 37 41 43 47 : +2 +6 +4 +2 +4
// 53 59 61 67 71 73 :
// 79 83 89 97 101 103 107 :
// 109 113 127 131 137 139 149 :
// 151 157 163 167 173 179 181 191 :
