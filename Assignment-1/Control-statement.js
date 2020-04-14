function prime(n) {

    var flag = true;
    for (var i = 2; i <= n - 1; i++) {
        if (n % i == 0) {
            flag = false;
            break;
        }
    }
    if (flag == true)
        console.log(n + " is prime");
    else
        console.log(n + " is not prime");
}
prime(10); // Print 10 is not prime
prime(13); // Print 13 is prime