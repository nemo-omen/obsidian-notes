### Easy decimal to binary conversion
An easy way to convert from decimal to binary is to divide the decimal number by 2. The remainder, whether `1` or `0` will be your `least significant bit`. Keep doing this until both your remainder and the final result of division are `0`.
$$\Large
\begin{align}
55 \div 2 = 27_{1} \\
27 \div 2 = 13_{1} \\
13 \div 2 = 6_{1} \\
6 \div 2 = 3_{0} \\
3 \div 2 = 1_{1} \\
1 \div 2 = 0_{1} \\
\end{align}
$$