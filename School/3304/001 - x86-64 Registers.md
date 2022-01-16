| Register  | Hardware            | Software: x64 Calling Convention                         |
| --------- | ------------------- | -------------------------------------------------------- |
| RAX       | Default Accumulator | Return value, volatile                                   |
| RBX       | Index               | Nonvolatile                                              |
| RCX       | Loop counter        | 1st integer argument, volatile, usually exit status code |
| RDX       |                     | 2nd integer argument, volatile                           |
| RSI       | Source index        | Nonvolatile                                              |
| RDI       | Destination index   | Nonvolatile                                              |
| RBP       | Base pointer        | Nonvolatile                                              |
| RSP       | Stack pointer       | Nonvolatile                                              |
| R8, R9    |                     | 3rd, 4th integer argument, volatile                      |
| R10, R11  |                     | Volatile                                                 |
| R12 - R15 |                     | Nonvolatile                                              |

