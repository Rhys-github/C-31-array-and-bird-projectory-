//arrays

//same data type
var marks = [100,99,97,98];
console.log(marks);

//to add values to the array, use arrayname.push(value)
marks.push(97);
console.log(marks);

//to remove data from the array, use arrayname.pop(); follows last in, first out
marks.pop();
console.log(marks);

//find length of array, arrayname.length;
console.log(marks.length)

//check the specific values of the array
console.log(marks[1]);

//use for loop to access all the values in an array
//i = i + 1 OR i++ OR i += 1
for(var i = 0;i<marks.length;i++){
    console.log(marks[i])
}

//array storing list of arrays
var trajectory = [[120,150],[130,170],[150,200]];
var position = [220,230];
trajectory.push(position);
for(var i = 0;i<trajectory.length;i++){
    console.log(trajectory[i][0],trajectory[i][1])
}
//console.log(trajectory[2][0]);

