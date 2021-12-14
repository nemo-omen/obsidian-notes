An easy way to convert from decimal to binary is to divide the decimal number by 2. The remainder, whether `1` or `0` will be your `least significant bit`. Keep doing this until both your remainder and the final result of division are `0`.
$$\Large
\begin{align}
55 \div 2 &= 27\; r\; 1 \\
27 \div 2 &= 13\; r\; 1 \\
13 \div 2 &= 6\; r\; 1 \\
6 \div 2 &= 3\; r\; 0 \\
3 \div 2 &= 1\; r\; 1 \\
1 \div 2 &= 0\; r\; 1 \\
&= \text{\style{font-family: monospace}{110111}}
\end{align}
$$
