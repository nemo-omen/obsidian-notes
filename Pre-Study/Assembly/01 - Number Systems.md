# Number Systems
I wrote a series of blog posts about converting between different number systems after failing an exam in _Data Structures and Algorithms_ because I hadn't bothered to learn beforehand.
The first post is here: [CS Basics: Binary Conversion](https://trainingmontage.dev/posts/cs-basics-binary-conversion/)
## Decimal
The decimal number system is the one we use in everyday life. Because we use it so much we don't give it much thought (well, most of us).
Base-10 numbers are composed of 10 possible digits (0 - 9). Each digit has the power of 10 associated with it.
Here's a breakdown, using the number `555`:

| $10^2$ | $10^1$ | $10^0$ |
| ------ | ------ | ------ |
| 5      | 5      | 5      |

## Binary
Base-2 numbers are composed of 2 possible digits (0, 1). Each digit has the power of 2 associated with it.

### `55`

| $2^5$ | $2^4$ | $2^3$ | $2^2$ | $2^1$ | $2^0$ |
| ----- | ----- | ----- | ----- | ----- | ----- |
| 1     | 1     |    0   | 1     | 1     | 1     |

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

## Hexadecimal

An easy way to convert from decimal to binary is to divide the decimal number by 2. The remainder, whether `1` or `0` will be your `least significant bit`. Keep doing this until both your remainder and the final result of division are `0`.