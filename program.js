var args = process.argv;
sum = 0
for(var i = 0; i < args.length; i ++){
    if( i > 1){
        num = Number(args[i]);
        sum += num;
    }
}
console.log(sum);
