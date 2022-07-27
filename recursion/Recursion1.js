function basicRecursion(num) {
    if(num <= 0) {
        console.log('All Done......!');
        return;
    }
    console.log(num);
    num--;
    basicRecursion(num);
}

basicRecursion(5);